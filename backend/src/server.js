import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import router from "./routes/libRoutes.js"

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/library",router)

connectDB().then(()=>{
    app.listen(5001)
})
//password : JujagfA85gZ0pZRd
//connection string :mongodb+srv://korcaklejdi80:JujagfA85gZ0pZRd@librarydb.1cdo1i2.mongodb.net/?retryWrites=true&w=majority&appName=LibraryDB