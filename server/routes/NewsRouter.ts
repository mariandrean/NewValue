import express from "express";
import { getAllNews, createNews, deleteNews, updateNews, getNewsById } from "../controllers/NewsController";


const newsRouter =  express.Router();

newsRouter.get('/news', getAllNews);
newsRouter.post('/news', createNews);
newsRouter.delete('/news/:id', deleteNews);
newsRouter.put('/news/:id', updateNews);
newsRouter.get('/news/:id', getNewsById);

export default newsRouter;

