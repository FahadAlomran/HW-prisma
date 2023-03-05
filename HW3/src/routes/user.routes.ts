import {getallUsers,addUser} from '../controller/user'
import express from "express";
import  validate  from '../middleware/valdition';

let router=express.Router()

router.get('/',getallUsers)

router.post('/',addUser)

export default router;