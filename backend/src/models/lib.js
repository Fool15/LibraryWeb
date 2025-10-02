import mongoose from "mongoose";

const booksSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        min:10,
        max:100,
        required:true
    },
    published:{ 
        type:Number,
        required:true
    },
    viewed:{
        type:Number,
    },
    genre:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
})

const Books=mongoose.model("Books",booksSchema)

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
const User=mongoose.model("User",userSchema)

export {Books,User}