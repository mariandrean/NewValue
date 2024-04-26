import express from "express";
import { getAllNews, createNews, deleteNews, updateNews, getNewsById } from "../controllers/NewsController";

const router = express.Router();

router.get('/', getAllNews);
router.post('/', createNews);
router.delete('/:id', deleteNews);
router.put('/:id', updateNews);
router.get('/:id', getNewsById);

export default router;

