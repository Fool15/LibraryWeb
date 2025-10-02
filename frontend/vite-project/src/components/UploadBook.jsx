import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect,useState } from "react"
import { Home } from "lucide-react"
import { useNavigate } from "react-router"
function UploadBook() {
    const [imageSRC,setImageSRC]=useState("")
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [publishment,setPublishment]=useState(0)
    const [genre,setGenre]=useState("")
    const [viewes,setViewes]=useState(0)

    const navigate=useNavigate()

    function SetBookDetails(){
        fetch('http://localhost:5001/api/library/addBook',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title:title,description:description,published:publishment,genre:genre,image:imageSRC,viewed:viewes})
        })
        .then(data=>{data.json()
            setImageSRC("")
            setTitle("")
            setDescription("")
            setPublishment(0)
            setGenre("")
        })
    }
    return (
    
    <div className=" bg-[url('22-Best-Book-Covers-of-2020.png')] bg-cover h-[100vh]">
     
        <Navbar useUpload={false} useSearchBar={false} />

        
        <button className="bg-[#1B1B1E] absolute right-64 top-[200px] p-3 z-20 w-fit rounded-full hover:bg-[#96031A]
         transform transition-transform duration-200 hover:scale-105" onClick={()=>{navigate('/')}}><Home className=" bg-red size-8 text-[#FBFFFE]"/></button>
        
        <div className="bg-[#1B1B1E] text-[#FBFFFE] m-auto w-[70%] p-10 rounded-lg mt-20">
            <p>Title: </p>
            <input type="text" className="text-black w-[220px] h-6 rounded-md mb-7 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0" placeholder="Enter the books published" 
            value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

            <p>Description:</p>
            <textarea style={{resize:"none"}} className="text-black w-[220px] h-[100px] rounded-md mb-7 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0" placeholder="Enter the books description" 
            value={description} onChange={(e)=>{setDescription(e.target.value)}}/> 

            <p>Year of Publishment: </p>
            <input type="number" placeholder="Enter the books published" className="text-black w-[220px] h-6 rounded-md mb-5 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0" 
            value={publishment} onChange={(e)=>{setPublishment(e.target.value)}}/>

   
            <p>Choose The Genre:</p>
            <select id="fruits" name="fruits"  
            value={genre}
            onChange={(e)=>{
                console.log("THE GENRE: ",e.target.value)
                setGenre(e.target.value)
            }} 
            className="text-black w-[220px] h-6 rounded-md mb-5 pl-2 focus:outline 
             focus:outline-gray-700 focus:outline-offset-0"
             >
                  <option value="" disabled>
                        -- Select Genre --
                </option>

                <option value="Isekai">Isekai</option>
                <option value="Reggresion">Reggresion</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>

            </select>

            <p>Link address: </p>
            <input type="text" placeholder="Enter the books image Link" value={imageSRC} onChange={(e)=>{setImageSRC(e.target.value)}}
             className="text-black w-[220px] h-6 rounded-md mb-5 pl-2 focus:outline  focus:outline-gray-700 focus:outline-offset-0"/>
            <br />

            <button className="bg-[#FAA916] w-[220px] rounded-md text-black font-medium p-1" onClick={()=>{SetBookDetails()}}>Submit</button>

            <div className=" text-[#FBFFFE] absolute right-[350px] top-[33vh]">
                <p className="mb-4 text-xl font-serif">Preview: </p>
                <img src={imageSRC==""?null:imageSRC} alt="image" className="border-2 border-solid border-black w-[200px] h-[253px] mb-4 "/>
                <p>{title==''?"---------":title}</p>
            </div>


        </div>
        <div className="w-[100%] bg-[#96031A] h-5 mt-[67px]"></div>
    </div>
    
  )
}

export default UploadBook