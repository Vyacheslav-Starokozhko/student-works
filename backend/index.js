const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const PORT = config.get('serverPort');

app.use(express.json());

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