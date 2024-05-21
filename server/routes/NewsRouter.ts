import express from "express";
import { getAllNews, createNews, deleteNews, updateNews, getNewsById } from "../controllers/NewsController";
import { newsValidation } from "../validators/FormsValidation";
import { verifyAuth } from "../middlewares/AuthenticationMiddleware";

const router = express.Router();

router.get('/', getAllNews);
router.post('/', verifyAuth, newsValidation,createNews);
router.delete('/:id', verifyAuth, deleteNews);
router.put('/:id', verifyAuth, newsValidation,updateNews);
router.get('/:id', getNewsById);

export default router;