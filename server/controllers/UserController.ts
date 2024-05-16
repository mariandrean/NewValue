import UserModel from "../models/UserModel";
import { Request, Response } from "express";

export const getUsers = async(req: Request, res: Response) =>{
    try{
        const users = await UserModel.findAll(); 
        res.status(200).json(users);
      }

    catch(error){
      return res.status(500).send({ error: 'Error fetching users' + error });
    }
}

export const getUserById = async(req: Request, res: Response) =>{
    const userId = req.params.id

    try{
        const user = await UserModel.findOne({ where: {id: userId} });
        res.status(200).json(user);
    } 
    
    catch(error){

    }
}

export const editUser = async(req: Request, res: Response) =>{
    
}

export const deleteUser = async(req: Request, res: Response) =>{
    
}