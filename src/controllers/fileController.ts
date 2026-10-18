import type {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import { FileService } from '../services/fileService';

class fileController {
    upload = async (req: Request, res: Response) => {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        
        const file = await FileService.uploadFile(req.body, req.file);
        res.status(StatusCodes.CREATED).send(file);
    }
}

export const FileController = new fileController();