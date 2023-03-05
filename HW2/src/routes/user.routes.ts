import { getAlluser, Register,  getOneUserByID, getOneUserByEmail, getolderUser, getrole, Login, updatePassWord, getUserByYear,getAllUserByYear } from '../controller/user';

import express from "express";
import validate from '../middleware/valdition';
import  {addUser}  from '../zodschema/zod';

let router = express.Router();

router.get('/', getAlluser)

router.post('/',Register)

//get user by id
router.get('/:id',getOneUserByID)

//get user by email
router.get('/:email',getOneUserByEmail)

//get user by age
router.get('/:age',getolderUser)

// get user by role
router.get('/role',getrole)

router.get('/login',Login)

router.put('/password',updatePassWord)

router.get('/getUserByYear',getUserByYear)

router.get('/getAllUserByYear',getAllUserByYear)


export default router;