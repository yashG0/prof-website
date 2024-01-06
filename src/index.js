// require('dotenv').config({path:'./env'});

import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/index.js';

dotenv.config({ path: './env' });
const app = express();
const PORT = process.env.PORT || 5500;

connectDb().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Application is listeing on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
}).catch((err) => {
    console.error("MONGODB conenction failed || ", err);
})

/* const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (err) => {
            console.log("ERR :", err);
        })
        app.listen(PORT, () => {
            console.log(`Application is listeing on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
})() */