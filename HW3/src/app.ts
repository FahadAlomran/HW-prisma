import express, { Application} from "express";
import bookRoutes from "./routes/book.routes";
import loanRoutes from "./routes/loan.routes";
import userRoutes from "./routes/user.routes";

import {connectDB} from "./config/db"
const app: Application = express();

app.use(express.json());
connectDB()
app.use('/book',bookRoutes)
app.use('/loan',loanRoutes)
app.use('/user',userRoutes)

const PORT = 3003;
app.listen(PORT,()=>{
    console.log('server started');
    
})