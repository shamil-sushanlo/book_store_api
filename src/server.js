import http from 'http'
import mongoose from 'mongoose'
import app from './app.js'
import dotenv from "dotenv";

const result = dotenv.config();
const env = process.env.PORT

// const host = "192.168.0.122";
// const mongoURI = `mongodb://${username}:${password}@${hostdb}:${port}/${dbName}?authSource=admin`;
// const PORT = process.env.PORT || 3000
// const username = process.env.MONGO_INITDB_ROOT_USERNAME;
// const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
// const hostdb = process.env.MONGO_HOST;
// const port = process.env.MONGO_PORT;
// const dbName = process.env.MONGO_DB_NAME;

// mongoose.connect(mongoURI).then(()=>{
//     console.log('connected to MongoDB')
//     const server = http.createServer(app)

//     server.listen(PORT, host, ()=>{
//         console.log('server is running')
//     })
// }).catch(err => {
//     console.log('not')
// })

mongoose.connect('mongodb://root:example@localhost:27017/admin').then(()=>{
    console.log('connected')
    console.log(env, result);
}).catch(err=>{
    console.log(err)
})