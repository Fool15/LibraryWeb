import Navbar from './Navbar'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { Eye ,Trash,Home,PenBox} from 'lucide-react'
import { useNavigate } from 'react-router'

function BookDetails() {

    const {id}=useParams()
    const [book,setBook]=useState([])
    const [viewes,setViewes]=useState(0)

    const navigate=useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:5001/api/library/${id}`)
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])

    useEffect(()=>{
        if (book && typeof book.viewed === "number") {
            const newViews = book.viewed + 1;
            setViewes(newViews);
            UpdateBookDetails(newViews);
        } else {
            console.warn("Invalid viewed value:", book.viewed);  // Debug
        }
     
    },[book])

    function removeBook(id){
        fetch(`http://localhost:5001/api/library/${id}`,{
            method:"DELETE"
        })
        .then(()=>console.log("Removed the book successfully"))
    }

    function UpdateBookDetails(viewes){
        fetch(`http://localhost:5001/api/library/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({viewed:viewes})
        })
    }
    console.log(book)
   

  return (
    <div >
        <Navbar />
        <div className='relative bg-[#1B1B1E] flex justify-center flex-col items-center border-2 border-solid border-[#6D676E] w-[80%] m-auto pt-8 pb-8 gap-4'>
            
            <button className='bg-[#1B1B1E] w-14 h-14 rounded-full hover:bg-[#96031A] flex justify-center items-center 
            absolute left-4 top-4' onClick={()=>{navigate('/')}}><Home className='text-white size-8' /></button>

            <img src={book.image} alt={book.title} className='w-[224px] h-[280px] border-2 border-solid border-[#6D676E]' />
            
            <p className='text-white font-mono underline'>Title: {book.title}</p>

            <div className='w-[75%]'>
                <p className='text-white font-mono pb-8'>Description: {book.description}</p>
                <p className='text-white font-mono pb-8'>Published: {book.published}</p>
                <p className='text-white font-mono pb-8'>Genre: {book.genre}</p>
            </div>

            <div className='absolute bottom-4 right-4 flex items-center gap-6'>
                <div className='flex flex-col text-center'>
                <Eye className='text-white size-8' />
                <p className='text-white font-mono text-base'>{book.viewed != 0 ? book.viewed :"0" }</p>
                </div>
                
                <button className='bg-[#1B1B1E] w-14 h-14 rounded-full hover:bg-[#96031A] flex justify-center items-center' onClick={()=>{
                    navigate(`/updateBook/${book._id}`)
                }}>
                <PenBox className='text-white size-8' />
                </button>

                <button className='bg-[#1B1B1E] w-14 h-14 rounded-full hover:bg-[#96031A] flex justify-center items-center' onClick={()=>{
                    removeBook(book._id)
                    navigate('/')
                }}>
                <Trash className='text-white size-8' />
                </button>
            </div>
        </div>


    </div>
  )
}

export default BookDetails