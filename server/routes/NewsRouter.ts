import express from "express";
import { getAllNews, createNews, deleteNews, updateNews, getNewsById } from "../controllers/NewsController";
import { newsValidation } from "../validators/FormsValidation";
import { verifyAuth } from "../middlewares/AuthenticationMiddleware";
import { verifyUserRole } from "../middlewares/RoleAuthMiddleware";

const router = express.Router();

router.get('/', getAllNews);
router.post('/', verifyAuth, verifyUserRole(['admin']), newsValidation,createNews);
router.delete('/:id', verifyAuth, verifyUserRole(['admin']),deleteNews);
router.put('/:id', verifyAuth, verifyUserRole(['admin']), newsValidation,updateNews);
router.get('/:id', getNewsById);

export default router;

