const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const PORT = config.get('serverPort');
const auth = require("./routes/auth.router");
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);

app.use(express.json());
app.use('/api/auth',auth)
const start = async ()=>{
    try{
        await mongoose.connect(config.get('dbUrl'));
        app.listen(PORT,()=>{
            console.log(`Server Started! On Port ${PORT}`);
        });
    }
    catch (e) {
        console.log('Error',e)
        }

}

start();