import  express from 'express';
import { getAllMovie, getAllMovieByGenre, getMovie, getMovieByRating, addNewMovie, deleteMovie, updateMovie } from '../controller/movie';
import validate from '../middleware/valdition';
import { addMovie,UMovie } from '../zodschema/zod';

let router =  express.Router();


router.get("/", getAllMovie )

router.get("/genre/:genre", getAllMovieByGenre )

router.get("/name/:name", getMovie )

router.get("/rating/:rating", getMovieByRating )

router.post("/", addNewMovie)

router.put("/:id",updateMovie )

router.delete("/:id", deleteMovie )

export default router;