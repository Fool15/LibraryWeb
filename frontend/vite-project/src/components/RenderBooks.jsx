import { useNavigate } from "react-router"
import { Book,Home } from "lucide-react"

function RenderBooks({books,h1Tag,showViewAll,showHome}) {
    console.log("THE BOOKS: ",books.image)

    const navigate=useNavigate()
  return (
    <>
      <h1 className="text-3xl font-serif underline relative left-[193px] mb-6 w-fit">{h1Tag!=null?h1Tag:"Popular"}</h1>
      <div className='grid grid-cols-[200px_200px_200px_200px_200px] justify-center gap-10 bg-[#1B1B1E] w-fit m-auto p-4 mb-[100px]'>
      
          {books.length==0?(<h1>Loading....</h1>):(
                books.map((b,index)=>(

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
      {showViewAll!=false?(
        <button className="border-solid border-[2px] border-black bg-[#96031A] p-1 text-lg 
        flex items-center w-36 justify-center rounded-lg text-gray-200 absolute right-[170px] top-[150px] transform 
        transition-transform duration-300 hover:scale-105" onClick={()=>{navigate('/allBooks')}}><Book/>View All </button>
      ):(<></>)}

      {showHome!=false?(
        <button className="bg-[#1B1B1E] absolute right-[163px] top-[186px] p-3 z-20 w-fit rounded-full hover:bg-[#96031A]
        transform transition-transform duration-200 hover:scale-105" onClick={()=>{navigate('/')}}><Home className=" bg-red size-8 text-[#FBFFFE]"/></button>
      ):(<></>)}

       

      
    </>
  )
}

export default RenderBooks