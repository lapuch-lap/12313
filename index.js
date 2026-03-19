import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";

const PORT = 5000;

const app = express();

const DB_url = '';

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_url)
        app.listen(PORT, ()=> console.log('SERVER WORK'));
    } catch (e){
        console.log(e)
    }
}
startApp() 