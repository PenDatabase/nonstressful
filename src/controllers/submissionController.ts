import express, {type Request, type Response} from 'express';

class submissionController {
    getSubmissions = async (req: Request, res: Response) => {
        res.send({
            'success': true,
            'message': 'Submission added successfully'
        });
    }

    getSubmission = async (req: Request, res: Response) => {
        const id = req.params.id;
        res.send({
            'success': true,
            'message': 'Submission added successfully'
        });
    }

    createSubmission = async (req: Request, res: Response) => {
        res.send({
            'success': true,
            'message': 'Submission added successfully'
        });
    }

    deleteSubmission = async (req: Request, res: Response) => {
        const id = req.params.id;
        res.send({
            'success': true,
            'message': 'Submission added successfully'
        });
    }
}

export const SubmissionController = new submissionController();