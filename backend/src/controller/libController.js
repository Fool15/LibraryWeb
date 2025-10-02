import {Books} from "../models/lib.js"
import  {returnTop5Books}  from "../../functions/top5Books.js"

export async function getAllBooks(req,res) {
    try {
        const allBooks=await Books.find()
        res.status(200).send(allBooks)
    } catch (error) {
        res.status(500).send({message:"Error in getAllBooks controller!!!"})
    }
}
export async function Top5Books(req,res) {
    try {
        const allBooks=await Books.find()
        let top5Books=returnTop5Books(allBooks)
        res.status(200).send(top5Books)
    } catch (error) {
        res.status(500).send({message:"Error in getAllBooks controller!!!"})
    }
}

export async function getBookById(req,res){
    try {
        const bookById=await Books.findById(req.params.id)
        res.status(200).send(bookById)
    } catch (error) {
        res.status(500).send({message:"Error in getBookById controller!!!"})   
    }
}
export async function addBook(req,res) {
    try {
        const {title,description,published,viewed,genre,image}=req.body
        const newBook=new Books({title,description,published,viewed,genre,image})

        await newBook.save()
        res.status(201).json({message:"Book was created successfully"})
    } catch (error) {
        console.error("AddBook Error:", error);
        res.status(500).send({ message: "Server error", error: error.message });
    }
}
export async function updateBook(req,res) {
    try {
        const {title,description,published,viewed,genre,image}=req.body

        await Books.findByIdAndUpdate(req.params.id,{title,description,published,viewed,genre,image})
        res.status(201).json({message:"Book was updated successfully"})
    } catch (error) {
        res.status(500).send({message:"Error in updateBook controller!!!"})
    }
}
export async function deleteBook(req,res){
    try {
        const deleteBook=await Books.findByIdAndDelete(req.params.id)
        
        if (!deleteBook) {
          return  res.status(404).json({message:"Could not find the book with this id!!!"})
        }

        res.status(200).json({message:"Book deleted with success."})
    } catch (error) {
        res.status(500).json({message:"error in deleteBook controller!!!"})
    }
}