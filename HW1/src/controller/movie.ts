import  { Request, Response } from "express";
import {prisma} from "../config/db";
import {genre } from "@prisma/client";

export const getAllMovie = async (req: Request, res: Response) => {
    try {
    let allMovie= await prisma.movie.findMany(
      {
        select:{
          id:true,
          movieTitle:true,
          rating:true,
          genre:true,
          
        }
      }
    )
  
      res.json(allMovie);
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllMovieByGenre = async (req: Request, res: Response) => {
    try {
      let Genre=req.params.genre
      
    let allMovie= await prisma.movie.findMany(
      
      {
        where:{
         genre :Genre as genre 
        },
        select:{
          id:true,
          movieTitle:true,
          rating:true,
          genre:true
        }
      }
    )
  
      res.json(allMovie);
    } catch (error) {
      console.log(error);
    }
  };

  export const getMovie = async (req: Request, res: Response) => {
    try {
      console.log('hii');
      
    let nameMovie= await prisma.movie.findFirst(
      {
        where:{
          movieTitle:req.params.name
        },
        select:{
          movieTitle:true,
          rating:true,
          genre:true
        }
      }
    )
  
      res.json(nameMovie);
    } catch (error) {
      console.log(error);
    }
  };

  export const getMovieByRating = async (req: Request, res: Response) => {
    try {
      console.log('gg');
      
      let rating=parseInt(req.params.rating) 
    let nameMovie= await prisma.movie.findMany(
      {
        where:{
          rating:{
            gte:rating
          }
        },
        select:{
          movieTitle:true,
          rating:true,
          genre:true
        }
      }
    )
  
      res.json(nameMovie);
    } catch (error) {
      console.log(error);
    }
  };
  export const addNewMovie = async (req: Request, res: Response) => {
    try {
      let newMovie = req.body;
      console.log('hi');
      
      await prisma.movie.create({
        data: newMovie,
      });
      res.json({
        message: "add new movie",
      });
    } catch (error) {
      console.log(error);
    }
  };
 

  export const updateMovie = async (req: Request, res: Response) => {
    try {
      let updateMovie = req.body;
     await prisma.movie.update({
        where: {
          id: req.params.id,
        },
        data: updateMovie,
      });
      res.json({
        message: "movie Updated",
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteMovie = async (req: Request, res: Response) => {
    try {
      await prisma.movie.delete({
        where: {
          id: req.params.id,
        },
      });
      res.json({
        msg: "Movie deleted",
      });
    } catch (error) {
      console.log(error);
    }
  };