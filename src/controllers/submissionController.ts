import express, {type Request, type Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import { SubmissionService } from '../services/submissionService.js';


class submissionController {
    getSubmissions = async (req: Request, res: Response) => {
        const submissions = await SubmissionService.getSubmissions();
        res.send(submissions);
    }

    getSubmission = async (req: Request, res: Response) => {
        const id = req.params.id as string;
        const submission = await SubmissionService.getSubmission(id);
        res.send(submission);
    }

    createSubmission = async (req: Request, res: Response) => {
        const submission = await SubmissionService.createSubmission(req.user);
        res.status(StatusCodes.CREATED).send(submission);
    }

    deleteSubmission = async (req: Request, res: Response) => {
        const id = req.params.id as string;
        await SubmissionService.deleteSubmission(id);
        res.status(StatusCodes.NO_CONTENT).send();
    }
}

export const SubmissionController = new submissionController();