import { Request, Response } from "express";
import { prisma } from "../config/db";

// Get loans
export const getallLoan = async (req: Request, res: Response) => {
  try {
    let loans = await prisma.loan.findMany();
    res.json(loans);
  } catch (error) {
    console.log(error);
  }
};

export const addLoan = async (req: Request, res: Response) => {
  try {
    const loan = req.body;

    await prisma.loan.create({
      data: loan,
    });
    res.json({
      msg: "add Loan successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
