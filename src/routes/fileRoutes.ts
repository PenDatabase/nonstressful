import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { FileController } from '../controllers/fileController.js';
import { DownloadFileSchema, FileSchema, UploadFileSchema } from '../schemas/fileSchema.js';
import { validateData } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/upload-url', authenticate, validateData(UploadFileSchema), FileController.getUploadUrl)
router.post('/download-url', authenticate, validateData(DownloadFileSchema), FileController.getDownloadUrl)
router.post('/', authenticate, validateData(FileSchema), FileController.createFile);

export default router