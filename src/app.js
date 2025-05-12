import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({ // .use() for middlewares 
    origin: process.env.CORS_ORIGIN,
    credentials: true

})) 

app.use(express.json({limit: "16kb"})) // config for json data

app.use(express.urlencoded({extended: true, limit: "16kb"})) // config for data receiving through url

app.use(express.static("public")) // public assests 

app.use(cookieParser()) // to setup cookies



export {app} 