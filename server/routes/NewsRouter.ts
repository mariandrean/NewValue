import express from "express";
import { getAllNews, createNews, deleteNews, updateNews, getNewsById } from "../controllers/NewsController";
import { newsValidation } from "../validators/FormsValidation";

const router = express.Router();

router.get('/', getAllNews);
router.post('/', newsValidation,createNews);
router.delete('/:id', deleteNews);
router.put('/:id', newsValidation,updateNews);
router.get('/:id', getNewsById);

export default router;

