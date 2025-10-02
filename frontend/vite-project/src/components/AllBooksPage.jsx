import Navbar from "./Navbar"
import Footer from "./Footer"

import { useState,useEffect } from "react"
import RenderBooks from "./RenderBooks"


function AllBooksPage() {

  const [allBooks,setAllBooks]=useState([])
  
  function getAllBooks(){
    fetch('http://localhost:5001/api/library')
    .then(res=>res.json())
    .then(data=>setAllBooks(data))
  }

  useEffect(()=>{
    getAllBooks()
  },[])

  return (
    <div className="flex flex-col justify-between">
        <Navbar/>
        <RenderBooks books={allBooks} h1Tag="All Books" showHome={true} showViewAll={false}/>
        <Footer/>
    </div>
  )
}

export default AllBooksPage