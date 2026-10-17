import express, { type Request, type Response } from "express";
import { AuthService } from "../services/authService.js";
import { StatusCodes } from "http-status-codes";

class authController {
  createUser = async (req: Request, res: Response) => {
    const user = await AuthService.createUser(req.body);
    res.status(StatusCodes.CREATED).send(user);
  };

  loginUser = async (req: Request, res: Response) => {
    const token = await AuthService.loginUser(req.body);
    res.status(StatusCodes.OK).send(token);
  };
}

export const AuthController = new authController();
