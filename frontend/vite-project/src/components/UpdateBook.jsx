import Navbar from "./Navbar"
import { useEffect,useState } from "react"
import { Home } from "lucide-react"
import { useNavigate ,useParams } from "react-router"

function UpdateBook() {

    const {id}=useParams()

    const [imageSRC,setImageSRC]=useState("")
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [publishment,setPublishment]=useState(0)
    const [genre,setGenre]=useState("")

    const [book,setBook]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:5001/api/library/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setBook(data)
            setImageSRC(`${data.image}`)
            setTitle(data.title)
            setDescription(data.description)
            setPublishment(data.published)
            setGenre(data.genre)
        })
    },[])

    function UpdateBookDetails(){
        fetch(`http://localhost:5001/api/library/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title:title,description:description,published:publishment,genre:genre,image:imageSRC})
        })
    }

  return (
    
    <div >
     
        <Navbar useUpload={false} useSearchBar={false} />

        
        <button className="bg-[#1B1B1E] absolute right-64 top-[200px] p-3 z-20 w-fit rounded-full hover:bg-[#96031A]
         transform transition-transform duration-200 hover:scale-105" onClick={()=>{navigate('/')}}><Home className=" bg-red size-8 text-[#FBFFFE]"/></button>
        
        <h1 className="absolute left-[40%] text-white top-[25%] font-serif font-semibold">Make your changes and then press submit</h1>
       

        <div className="bg-[#1B1B1E] text-[#FBFFFE] m-auto w-[70%] p-10 rounded-lg mt-20">
            
            <p>Title: </p>
            <input type="text" className="text-black w-[220px] h-6 rounded-md mb-7 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0" placeholder="Enter the books published" 
            value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

            <p>Description:</p>
            <textarea style={{resize:"none"}} className="text-black w-[220px] h-[120px] rounded-md mb-5 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0" placeholder="Enter the books description" 
            value={description} onChange={(e)=>{setDescription(e.target.value)}}/> 

            <p>Year of Publishment: </p>
            <input type="number" placeholder="Enter the books published" className="text-black w-[220px] h-6 rounded-md mb-5 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0" 
            value={publishment} onChange={(e)=>{setPublishment(e.target.value)}}/>

            <p>Genre of the book: </p>
            <input type="text" placeholder="Enter the books Genre" className="text-black w-[220px] h-6 rounded-md mb-5 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0"
             value={genre} onChange={(e)=>{setGenre(e.target.value)}}/>

            <p>Link address: </p>
            <input type="text" placeholder="Enter the books image Link" value={imageSRC} onChange={(e)=>{setImageSRC(e.target.value)}}
             className="text-black w-[220px] h-6 rounded-md mb-5 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0"/>
            <br />

            <button className="bg-[#FAA916] w-[220px] rounded-md text-black font-medium p-1" onClick={()=>{
                UpdateBookDetails()
                navigate('/')
                }}>Submit</button>

            <div className=" text-[#FBFFFE] absolute right-[350px] top-[33vh]">
                <p className="mb-4 text-xl font-serif">Preview: </p>
                <img src={imageSRC==""?null:imageSRC} alt="image" className="border-2 border-solid border-black w-[200px] h-[253px] mb-4 "/>
                <p>{title==''?"---------":title}</p>
            </div>


        </div>
        <div className="w-[100%] bg-[#96031A] h-5 mt-[55px]"></div>
    </div>
    
  )
}

export default UpdateBook