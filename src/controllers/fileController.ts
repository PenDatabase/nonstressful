import type {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import { FileService } from '../services/fileService.js';

class fileController {    
    getUploadUrl = async (req: Request, res: Response) => {
        const fileName = req.body["fileName"];
        const contentType = req.body["contentType"]
        const fileUploadDetail = await FileService.getUploadUrl(fileName, contentType);
        res.send(fileUploadDetail);
    }

    getDownloadUrl = async (req: Request, res: Response) => {
        const fileKey = req.body["fileKey"];
        console.log(fileKey);
        const fileUploadDetail = await FileService.getDownloadUrl(fileKey);
        res.send(fileUploadDetail);
    }

    createFile = async(req: Request, res: Response) => {
        const file = await FileService.createFile(req.body);
        res.status(StatusCodes.CREATED).send(file);
    }
}

export const FileController = new fileController();