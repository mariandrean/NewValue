import NewsModel from "../models/NewsModel";
import { Request, Response } from "express";

export const getAllNews = async(request: Request, response: Response )=>{
    try {
        const news = await NewsModel.findAll()
        response.status(200).json(news);
    } catch (error: any) {
        response.status(500).json({message: error.message});
    }  
}

export const createNews = async (req: Request, res: Response) => {
    try {
        const createdNews = await NewsModel.create(req.body);
        res.status(201).json(createdNews);
    }catch(error){
        return res.status(500).send({ error: 'Error creating' });
    }
}

export const deleteNews = async(request: Request, response: Response)=>{
    const idNews = request.params.id;
    try {
        await NewsModel.destroy({where:{id:idNews}});
        return response.status(200).json({message: 'News deleted correctly'})
    } catch (error: any) {
        return response.status(500).json({message:'Error deleting news', error: error.message})
    }
}

export const updateNews = async(request: Request, response: Response)=>{
    const idNews =request.params.id;
    try {
        await NewsModel.update(request.body,{where:{id:idNews}});
        return response.status(200).json({message:'News updated successfully!'});
    } catch (error: any) {
        return response.status(500).json({message:'Error updating news', error: error.message})
    }
}

export const getNewsById = async(request: Request, response: Response) => {
    const idNews = request.params.id;
    try {
        const news = await NewsModel.findOne({ where: { id: Number(idNews) } });
        return response.status(200).json(news);
    } catch (error: any) {
        return response.status(500).json({ message: 'Error getting news', error: error.message });
    }
}

