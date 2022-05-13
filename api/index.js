import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app = express()
dotenv.config()


const connect = async() => {

   
    try { await mongoose.connect(process.env.MONGODBC);
        console.log('we are connected to mongodb ')

 } catch (error){
    console.log(error)
 }
}


mongoose.connection.on("connected", () => {
    console.log('we are connected to database ')
})

mongoose.connection.on("disconnected", () => {
    console.log('disconnected to data base ')
})

app.listen(8800,()=> 

console.log('we are in the server ')
)