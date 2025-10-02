import { useState,useEffect } from "react"
import { useNavigate } from "react-router"

function ShowSearch({title}) {

  const navigate=useNavigate()
  const [matchingBooks,setMatchingBooks]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:5001/api/library`)
    .then(res=>res.json())
    .then(data=>setMatchingBooks(()=>data.filter((d)=>d.title.toLowerCase().includes(title))))
  },[title])

  return (
    <div className="absolute flex flex-col top-[70px] w-[250px] z-10 ">
      {matchingBooks.map((b)=>(
        <button 
        className="bg-[#eceeed] border border-solid border-black flex items-center p-1 "
        onClick={()=>{
          navigate(`/bookDetails/${b._id}`)
          location.reload()
        }}
        >
          <img src={b.image} alt="" className="size-10"/>
          <p className="m-auto">{b.title}</p>
        </button>
      ))}
    </div>
  )
}

export default ShowSearch