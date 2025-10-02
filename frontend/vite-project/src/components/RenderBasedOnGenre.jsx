import { useNavigate } from "react-router"
import { useState,useEffect } from "react"

function RenderBasedOnGenre({books,genre}) {

    const [sortedBooks,setSortedBooks]=useState([])
    const navigate=useNavigate()
    
    useEffect(()=>{
      setSortedBooks(()=>books.filter((b)=>b.genre==genre))
    }, [books, genre])

    console.log("SORTED BOOOOOOOOOOOOOOOOOOKS: ",sortedBooks)

  return (
    <>
      <h1 className="text-3xl font-serif underline relative left-[193px] mb-6 w-fit">{genre}</h1>
      <div className='grid grid-cols-[200px_200px_200px_200px_200px] justify-center gap-10 bg-[#1B1B1E] w-fit m-auto p-4 mb-[100px]'>
      
          {sortedBooks.length==0?(<h1 className="text-white">Loading....</h1>):(
                sortedBooks.map((b,index)=>(

              <div key={index} className=' border-2 border-solid border-black w-[200px] h-[300px] text-lg flex flex-col 
              justify-around p-1 transform transition-transform duration-300 hover:scale-105 bg-[#FBFFFE] rounded-xl 
              hover:shadow-[0_4px_12px_rgba(139,92,246,0.5)] '>

                <img src={b.image} alt="lotm cover" className="w-[160px] h-[213px] m-auto"/>
                  <button className="mb-4 hover:bg-[#FAA916] w-[160px] m-auto rounded-2xl transform transition-transform duration-300 
                  hover:scale-105 border-2 border-solid hover:border-black font-medium" onClick={()=>{navigate(`/bookDetails/${b._id}`)}}>Read Now</button>     
              </div>
          )))
          }
      
      </div>
    </>
  )
}

export default RenderBasedOnGenre