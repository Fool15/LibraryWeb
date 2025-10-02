import {User} from '../models/lib.js'


export async function getUsers(req,res){
    try {
        const allUsers=await User.find()
        res.status(200).send(allUsers)
    } catch (error) {
        console.error("Error in getUsers controller!!!",error)
        res.status(500).json({message:"Error in getUsers controller!!!"})
    }
}

export async function createUser(req,res){
    try {
        const {username,password,role,email}=req.body
        const newUser=new User({username,password,role,email})

        await newUser.save()
        res.status(200).json({message:"User creaeted with success"})
    } catch (error) {
        console.error("Error in createUser controller!!!",error)
        res.status(505).json({message:"Error in createUser controller!!!"})
    }
}