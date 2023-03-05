import {addLoan,getallLoan} from '../controller/loan'
import express from "express";
import  validate  from '../middleware/valdition';

let router= express.Router();

router.get('/',getallLoan)

router.post('/',addLoan)

export default router;