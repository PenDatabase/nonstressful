import express from 'express';
import { SubmissionController } from '../controllers/submissionController.js';
import { createSubmissionSchema } from '../schemas/fileSchema.js';
import { validateData } from '../middlewares/validationMiddleware.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { upload } from '../common/services/s3Service.js';

const router = express.Router();
const maxFileUploads = Number(process.env.MAX_FILE_UPLOADS);

router.get('/', authenticate, SubmissionController.getSubmissions);

router.get('/:id', authenticate, SubmissionController.getSubmission);

router.post('/', authenticate, upload.array('files', maxFileUploads), validateData(createSubmissionSchema), SubmissionController.createSubmission);

router.delete('/:id', authenticate, SubmissionController.deleteSubmission);

export default router;