import type {Response, NextFunction, Request } from "express";
import UnauthenticatedError from "../errors/UnauthenticatedError.js";
import jwt, { type JwtPayload } from "jsonwebtoken";
import Unauthorized from "../errors/UnauthorizedError.js";



export const authenticate = (req: Request, res: Response, next: NextFunction)=>{
    
    const token = req.headers.authorization;
    
    if(!token){
        throw new UnauthenticatedError({message:"No token provided"})
    }
    
    const tokenWithoutBearer = token.split(" ")[1];
    try{
        const secretKey = process.env.JWT_SECRET_KEY
        const decoded = jwt.verify(tokenWithoutBearer!, secretKey!) as JwtPayload
        if(!decoded){
            throw new UnauthenticatedError({message: "Could not validate your token"})
        }
        req.user = decoded.user;

    } catch (error) {
        throw new UnauthenticatedError({message: "Could not validate your token"})
    }

    next();
}

export const checkAdmin = (req: Request, res: Response, next: NextFunction)=>{
    if(!req.user?.isAdmin){
        throw new Unauthorized({message:"User is not allowed"})
    }

    next();
}

