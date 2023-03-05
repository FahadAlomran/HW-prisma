import {  getallBooks, addBook} from '../controller/book';
import express from "express";
import  validate  from '../middleware/valdition';

let router= express.Router();


router.get('/',getallBooks)
router.post('/',addBook)


export default router;