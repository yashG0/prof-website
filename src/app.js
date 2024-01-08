import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// FOR HANDLING THE FILES COMING FROM FONTEND (JSON,OTHER DATA)
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// ROUTES
import userRouter from './routes/user.route.js';

app.use("/api/v1/users",userRouter); //http://localhost:3000/users/*

export { app }