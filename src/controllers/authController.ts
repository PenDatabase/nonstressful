import express, {type Request, type Response} from 'express';

class authController {
    registerUser = async (req: Request, res: Response) => {
        res.send({
            'success': true,
            'message': 'Submission added successfully'
        });
    }
}

export const AuthController = new authController();