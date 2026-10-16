import express, {type Request, type Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import { SubmissionService } from '../services/submissionService.js';


class submissionController {
    getSubmissions = async (req: Request, res: Response) => {
        const submissions = await SubmissionService.getSubmissions();
        res.send(submissions);
    }

    getSubmission = async (req: Request, res: Response) => {
        const id = req.params.id;
        const submission = await SubmissionService.getSubmission(id);
        res.send(submission);
    }

    createSubmission = async (req: Request, res: Response) => {
        const submission = await SubmissionService.createSubmission(req.body);
        res.status(StatusCodes.CREATED).send(submission);
    }

    deleteSubmission = async (req: Request, res: Response) => {
        const id = req.params.id;
        await SubmissionService.deleteSubmission(id);
        res.status(StatusCodes.NO_CONTENT).send();
    }
}

export const SubmissionController = new submissionController();