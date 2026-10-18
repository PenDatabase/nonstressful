import BadRequestError from "../errors/BadRequestError.js";
import { prisma } from "../lib/prisma.js";
import type { CreateUserRequest, LoginRequest } from "../types/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

class authService {
  async createUser(submissionData: CreateUserRequest) {
    const isRegNoAllReadyExist = await prisma.user.findFirst({
      where: {
        regNo: submissionData.regNo,
      },
    });

    if (isRegNoAllReadyExist) {
      throw new BadRequestError({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(
      submissionData.password,
      saltRounds,
    );

    const newUser = await prisma.user.create({
      data: {
        regNo: submissionData.regNo,
        name: submissionData.name,
        password: hashedPassword,
      },
    });

    return {
      id: newUser.id,
      regNo: newUser.regNo,
      name: newUser.name,
    };
  }

  async loginUser(submissionData: LoginRequest) {
    const isRegNoAlreadyExist = await prisma.user.findFirst({
      where: {
        regNo: submissionData.regNo,
      },
    });

    if (!isRegNoAlreadyExist) {
      throw new BadRequestError({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(
      submissionData.password,
      isRegNoAlreadyExist.password,
    );

    if (!isMatch) {
      throw new BadRequestError({ message: "Password is incorrect" });
    }

    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(
      {
        user:{

          id: isRegNoAlreadyExist?.id,
          name: isRegNoAlreadyExist?.name,
          regNo: isRegNoAlreadyExist?.regNo,
          isAdmin: isRegNoAlreadyExist.isAdmin
        }
      },
      `${secretKey}`,
      { expiresIn: "1d" },
    );
    return {token: token, user:{
      name: isRegNoAlreadyExist?.name,
      regNo: isRegNoAlreadyExist?.regNo,
      isAdmin: isRegNoAlreadyExist?.isAdmin
    }};
  }
}

export const AuthService = new authService();
