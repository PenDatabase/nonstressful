import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { upload } from '../common/services/s3Service';
import { FileController } from '../controllers/fileController';
import { FileSchema } from '../schemas/fileSchema';
import { validateData } from '../middlewares/validationMiddleware';

const router = express.Router();

router.post('/upload', authenticate, upload.single('file'), validateData(FileSchema), FileController.upload);