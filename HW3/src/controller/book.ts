import { Request, Response } from "express";
import { prisma } from "../config/db";

// Get Books
export const getallBooks = async (req: Request, res: Response) => {
  try {
    let books = await prisma.books.findMany({
      select:{
        name:true,
        genre:true
      }
    });
    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

// Add new Book

export const addBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;

    await prisma.books.create({
      data: book,
    });
    res.json({
      msg: "add book successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
