import Navbar from "./Navbar"
import Footer from "./Footer"
import { Home } from "lucide-react"
import { useNavigate } from "react-router"
import { use, useState } from "react"
function LoginPage() {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')

    function createUser(){
        if(email.length>=5&&password.length>=8){

            fetch(`http://localhost:5001/api/library//users/createUser`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username:username,password:password,role:"User",email:email})
            })
            localStorage.setItem("isLoggedIn","true")
        }
        alert("Fill the information")
    }

  return (
    <div className="flex flex-col justify-between bg-[#1B1B1E] h-[100vh]">
        <Navbar useUpload={false} useSearchBar={false} useSignUp={false} />

        <button className="bg-[#1B1B1E] absolute left-[220px] top-[147px] p-3 z-20 w-fit rounded-full hover:bg-[#96031A]
         transform transition-transform duration-200 hover:scale-105" onClick={()=>{navigate('/')}}><Home className=" bg-red size-8 text-[#FBFFFE]"/></button>

        <div className="bg-[#FBFFFE] w-[70%] m-auto flex flex-row  pr-10">
            <div className="bg-blue-50 h-[100%] w-[100%] flex justify-center content-center items-center">
                <div className="w-[350px] ">
                    <h1 className="font-medium text-4xl mb-5">Sign Up</h1>
                    <p className="text-lg">Get your free Babel Library card and borrow digital books from the nonprofit Internet Archive</p>
                </div>
            </div>
            <div className="pl-20 font-medium pt-20 pb-20 ">
                <p>Email: </p>
                <input type="text" className=" focus:outline-yellow-500   
                rounded-md border-solid border-[2px] w-[300px] pl-[10px] font-normal mb-8" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                <p>Username: </p>
                <input type="text" className=" focus:outline-yellow-500   
                rounded-md border-solid border-[2px] w-[300px] pl-[10px] font-normal mb-8"  value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                
                <p>Password: </p>
                <input type="password" className=" focus:outline-yellow-500   
                rounded-md border-solid border-[2px] w-[300px] pl-[10px] font-normal mb-8"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br />
                <button className="border border-solid border-black rounded-lg bg-yellow-500 p-1 pl-6 pr-6 ml-[90px]" onClick={()=>{
                    createUser()
                    navigate('/')
                    }}>Sign Up</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginPage