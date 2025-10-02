import {Search,User} from "lucide-react"
import { useNavigate } from "react-router"
import logo from '../../public/3805545.png'
import ShowSearch from "./ShowSearch"
import { useState } from "react"

const Navbar = ({useUpload,useSearchBar,useSignUp,loggedIn}) => {
  
  const navigate=useNavigate()
  const [bookTitle,setBookTitle]=useState("")
  const isLoggedIn=localStorage.getItem("isLoggedIn")
  console.log(isLoggedIn)
  
  return (
     <div className="mb-10">

        <div className=" flex items-center justify-between bg-[#96031A] pl-10 pr-10">

          <div className="flex items-center">
            <img src={logo} alt="tower" className=" size-24"/>
            <h1 className=" text-3xl text-gray-100 font-medium font-serif">Babel Library</h1>
          </div>

          <div className="flex gap-3 items-center">
            {useSearchBar==null?(
              <>
              <Search className="size-7" />

              <input 
              type="text" 
              placeholder="Search for the book title" 
              className="h-8 rounded-2xl pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0 bg-[#FBFFFE]"
              onChange={(e)=>{setBookTitle(e.target.value)}}
              value={bookTitle}
              />
              {bookTitle.length>0?(<ShowSearch title={bookTitle}/>):(<></>)}
              
              </>

            ):(<></>)}
          </div>

          <button className="text-xl border-none hover:text-[#FBFFFE] hover:bg-[#1B1B1E] font-medium p-3 rounded-2xl 
          transform transition-transform duration-200 hover:scale-105" onClick={()=>{navigate('/uploadBook')}} >{useUpload==null?"Upload Book":<></>}</button>
          {isLoggedIn=='true'?(
            <button className="text-xl border-none hover:text-[#FBFFFE] hover:bg-[#1B1B1E] font-medium p-3 rounded-full 
            transform transition-transform duration-200 hover:scale-105"><User/></button>
          ):(
            <button className="text-xl border-none hover:text-[#FBFFFE] hover:bg-[#1B1B1E] font-medium p-3 rounded-2xl 
            transform transition-transform duration-200 hover:scale-105" onClick={()=>{navigate('/loginPage')}}>{useSignUp==null?"Sign Up":<></>}</button>
          )}

        </div>
    </div>
  )
}

export default Navbar