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

export const getOneUser = async() =>{
    
}

export const editUser = async() =>{
    
}

export const deleteUser = async() =>{
    
}