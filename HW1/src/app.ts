import express, { Application} from "express";
import movieRoutes from "./routes/move.routes";

import {connectDB} from "./config/db"
const app: Application = express();

app.use(express.json());
connectDB()
app.use('/movie',movieRoutes)

const PORT = 3001;
app.listen(PORT,()=>{
    console.log('server started');
    
})