import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const verifyUserRole = (role: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    try {
        const dataToken: any = verifyToken(token);
        const userRole = dataToken.role;
        console.log(userRole)
        const rolesByUser = userRole;
        const checkValueRole = role.some((roleSingle) => rolesByUser.includes(roleSingle))
        if (!checkValueRole) {
            return res.status(401).send({ error: 'Oops! You do not have permission to perform this actio' });
        }
    } catch (error) {
        return res.status(401).send({ error: 'Error verifying user role in the middleware' });
    }
    next();
}