import express from 'express';
import { SubmissionController } from '../controllers/submissionController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();
const maxFileUploads = Number(process.env.MAX_FILE_UPLOADS);

router.get('/', authenticate, SubmissionController.getSubmissions);

router.get('/:id', authenticate, SubmissionController.getSubmission);

router.post('/', authenticate, SubmissionController.createSubmission);

router.delete('/:id', authenticate, SubmissionController.deleteSubmission);

export default router;