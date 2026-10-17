import express from 'express';
import { SubmissionController } from '../controllers/submissionController.js';
import { createSubmissionSchema } from '../schemas/submissionSchemas.js';
import { validateData } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.get('/', SubmissionController.getSubmissions);

router.get('/:id', SubmissionController.getSubmission);

router.post('/', validateData(createSubmissionSchema), SubmissionController.createSubmission);

router.delete('/:id', SubmissionController.deleteSubmission);

export default router;