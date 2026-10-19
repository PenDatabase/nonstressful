import type {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import { FileService } from '../services/fileService.js';

class fileController {    
    getUploadUrl = async (req: Request, res: Response) => {
        const fileName = req.body;
        const fileUploadDetail = await FileService.getUploadUrl(fileName);
        res.send(fileUploadDetail);
    }

    createFile = async(req: Request, res: Response) => {
        const file = await FileService.createFile(req.body);
        res.status(StatusCodes.CREATED).send(file);
    }
}

export const FileController = new fileController();