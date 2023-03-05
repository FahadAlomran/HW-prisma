import { Request, Response } from "express";
import { prisma } from "../config/db";

export const addUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    await prisma.user.create({
      data: user,
    });
    res.json({
      msg: "user created",
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Users
export const getallUsers = async (req: Request, res: Response) => {
  try {
    let users = await prisma.user.findMany({
      select:{
        username:true
      }
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
