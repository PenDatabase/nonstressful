import BadRequestError from "../errors/BadRequestError.js";
import { prisma } from "../lib/prisma.js";
import type { CreateUserRequest, LoginRequest } from "../types/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

class authService {
  async createUser(submissionData: CreateUserRequest) {
    const isEmailAllReadyExist = await prisma.user.findFirst({
      where: {
        email: submissionData.email,
      },
    });

    if (isEmailAllReadyExist) {
      throw new BadRequestError({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(
      submissionData.password,
      saltRounds,
    );

    const newUser = await prisma.user.create({
      data: {
        email: submissionData.email,
        name: submissionData.name,
        password: hashedPassword,
      },
    });

    return {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
  }

  async loginUser(submissionData: LoginRequest) {
    const isEmailAlreadyExist = await prisma.user.findFirst({
      where: {
        email: submissionData.email,
      },
    });

    if (!isEmailAlreadyExist) {
      throw new BadRequestError({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(
      submissionData.password,
      isEmailAlreadyExist.password,
    );

    if (!isMatch) {
      throw new BadRequestError({ message: "Password is incorrect" });
    }

    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(
      {
        id: isEmailAlreadyExist?.id,
        name: isEmailAlreadyExist?.name,
        email: isEmailAlreadyExist?.email,
        isAdmin: isEmailAlreadyExist.isAdmin
      },
      `${secretKey}`,
      { expiresIn: "1d" },
    );
    return {token: token, user:{
      name: isEmailAlreadyExist?.name,
      email: isEmailAlreadyExist?.email,
      isAdmin: isEmailAlreadyExist?.isAdmin
    }};
  }
}

export const AuthService = new authService();
