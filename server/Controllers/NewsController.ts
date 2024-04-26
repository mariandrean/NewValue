import NewsModel from "../models/NewsModel";
import { Request, Response } from "express";

export const getAllNews = async (request: Request, response: Response) => {
    try {
        const news = await NewsModel.findAll()
        response.status(200).json(news);
    } catch (error: any) {
        response.status(500).json({ message: `Error getting news: ${error.message }` });
    }
}

export const createNews = async (request: Request, response: Response) => {
    try {
        const newsData = request.body;
        const createdNews = await NewsModel.create(newsData);
        response.status(201).json(createdNews);
    } catch (error: any) {
        return response.status(500).json({ error: `Error creating news: : ${error.message }` });
    }
}

export const deleteNews = async (request: Request, response: Response) => {
    const idNews = request.params.id;
    try {
        await NewsModel.destroy({ where: { id: idNews } });
        return response.status(200).json({ message: 'News deleted correctly' })
    } catch (error: any) {
        return response.status(500).json({ message: `Error deleting news: ${error.message }`})
    }
}

export const updateNews = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        await NewsModel.update(request.body, { where: { id } });
        return response.status(200).json({ message: 'News updated successfully!' });
    } catch (error: any) {
        return response.status(500).json({ message: `Error updating news: ${error.message }` })
    }
}

export const getNewsById = async (request: Request, response: Response) => {
    const idNews = request.params.id;
    try {
        const news = await NewsModel.findOne({ where: { id: Number(idNews) } });
        return response.status(200).json(news);
    } catch (error: any) {
        return response.status(500).json({ message: `Error getting news: ${error.message }`});
    }
}

