import RenderBasedOnGenre from "./RenderBasedOnGenre"
import RenderBooks from "./RenderBooks"
import { useState,useEffect } from "react"

function Content() {
    const [allBooks,setAllBooks]=useState([])
    const [topViewed,setTopViewed]=useState([])

    function topViewedBooks(){
      fetch('http://localhost:5001/api/library/getTop5Books')
      .then(res=>res.json())
      .then(data=>setTopViewed(data))
    }
    function getAllBooks(){
      fetch('http://localhost:5001/api/library')
      .then(res=>res.json())
      .then(data=>setAllBooks(data))
    }
    useEffect(()=>{
        getAllBooks()
        topViewedBooks()
      },[])
      console.log("RENDERED: ",allBooks)
  return (
    <div>
        <RenderBooks books={topViewed} showHome={false}/>
        <RenderBasedOnGenre  books={allBooks} genre="Isekai"/>
        <RenderBasedOnGenre  books={allBooks} genre="Fantasy"/>
        <RenderBasedOnGenre  books={allBooks} genre="Reggresion"/>


    </div>
  )
}

export default Content