import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { upload } from '../common/services/s3Service.js';
import { FileController } from '../controllers/fileController.js';
import { FileSchema } from '../schemas/fileSchema.js';
import { validateData } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/upload', authenticate, upload.single('file'), validateData(FileSchema), FileController.upload);