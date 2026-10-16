import express from 'express';
import { SubmissionController } from '../controllers/submissionController.js';

const router = express.Router();

router.get('/', SubmissionController.getSubmissions);

router.get('/:id', SubmissionController.getSubmission);

router.post('/', SubmissionController.createSubmission);

router.delete('/:id', SubmissionController.deleteSubmission);

export default router;