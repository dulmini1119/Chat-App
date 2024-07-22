import express from 'express'
import dotenv from 'dotenv'

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connecttoMongoDB from './db/connecttoMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// app.get("/",(req,res)=> {
//     res.send("Hello World!");
// });


app.listen(PORT, ()=> {
    connecttoMongoDB();
    console.log(`Server Running on Port ${PORT}`);
});