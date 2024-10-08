import http from 'http'
import mongoose from 'mongoose'
import app from './app.js'
import dotenv from "dotenv";

const result = dotenv.config();
const env = process.env.PORT

const hostAPI = "192.168.0.122";
const PORT = process.env.PORT || 3000


const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const hostdb = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const dbName = process.env.MONGO_DB_NAME;


const mongoURI = `mongodb://${username}:${password}@${hostdb}:${port}/book_store?authSource=admin`;

mongoose.connect(mongoURI).then(()=>{
    const server = http.createServer(app)

    server.listen(PORT, hostAPI, ()=>{
        console.log('server is running')
    })
}).catch(err => {
    console.log('not')
})
