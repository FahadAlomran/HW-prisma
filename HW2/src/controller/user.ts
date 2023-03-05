import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Role } from "@prisma/client";

export const Register = async (req: Request, res: Response) => {
  try {
    let user = req.body;
    await prisma.user.create({
      data: user,
    });
    res.json({
      message: "user created",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAlluser = async (req: Request, res: Response) => {
  try {
    let user = await prisma.user.findMany({
      select: {
        email: true,
        username: true,
        role: true,
        age: true,
        joiningYear: true,
      },
    });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getOneUserByID = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    let user = await prisma.user.findFirst({
      where: {
        id: id,
      },
      select: {
        email: true,
        username: true,
        role: true,
        age: true,
        joiningYear: true,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getOneUserByEmail = async (req: Request, res: Response) => {
  try {
    let email = req.params.email;
    let user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        email: true,
        username: true,
        role: true,
        age: true,
        joiningYear: true,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getolderUser = async (req: Request, res: Response) => {
  try {
    let age = parseInt(req.params.age);
    let user = await prisma.user.findMany({
      where: {
        age: {
          gte: age,
        },
      },
      select: {
        email: true,
        username: true,
        role: true,
        age: true,
        joiningYear: true,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.json({
        message: ` No User found in this age:  ${age}!!`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getrole = async (req: Request, res: Response) => {
  try {
    let role = req.params.role;
    let user = await prisma.user.findMany({
      where: {
        role: role as Role,
      },
      select: {
        email: true,
        username: true,
        role: true,
        age: true,
        joiningYear: true,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    let { username, password } = req.body;
    await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    res.json({
      message: `welcome ${username}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePassWord = async (req: Request, res: Response) => {
  try {
    let { id, password } = req.body;
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: password,
      },
    });
    res.json({
      msg: "password updated",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserByYear = async (req: Request, res: Response) => {
  try {
    let { joiningYear } = req.body;
    let { id } = req.body;

    let users = await prisma.user.findMany({
      where: {
        id: id,
        joiningYear: joiningYear,
      },
      select: {
        email: true,
        username: true,
        role: true,
        age: true,
        joiningYear: true,
      },
    });
    if (users) {
      res.json(users);
    } else {
      res.json({
        message: ` No User found in this year ${joiningYear}!!`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserByYear = async (req: Request, res: Response) => {
  try {
    let { joiningYear } = req.body;
    let users = await prisma.user.findMany({
      where: {
        joiningYear: {
          gte: joiningYear,
        },
      },
      select: {
        email: true,
        username: true,
        role: true,
        age: true,
        joiningYear: true,
      },
    });
    if (users) {
      res.json(users);
    } else {
      res.json({
        message: ` No User found in this year ${joiningYear}!!`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
