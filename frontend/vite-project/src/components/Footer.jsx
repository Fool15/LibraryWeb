import { Instagram,Facebook } from "lucide-react"
function Footer() {
  return (
    <div className=" bg-[#96031A] pl-20 pr-10 pt-5 pb-5 mt-10 grid grid-cols-3 text-center">
        <div className="flex items-center justify-center">
            <img src="3805545.png" alt="tower" className=" size-24"/>
            <h1 className=" text-2xl text-gray-100 font-light font-serif ">Babel Library</h1>
        </div>    
        <div className="text-xl ">
            <p className="text-gray-300 underline mb-2"> Contact:</p>
            <p className="text-orange-400">- Rruga e Dijes 12, Tirana</p>
            <p className="text-orange-400">- 📞 +355 42 123 456</p>
            <p className="text-orange-400">- 📧 contact@library.al</p>
        </div> 

        <div className="flex  flex-col items-center">
            <p className="text-xl mb-4 text-gray-300 underline">Follow Us: </p>

            <div className="flex gap-2 mb-4">
                <Instagram className="text-purple-800 "/>
                <p className="text-purple-300">Instagram</p>
            </div>
            <div className="flex gap-2">
                <Facebook className="text-blue-600 "/>
                <p className="text-blue-300">Facebook</p>
            </div>
        </div>

     
    </div>
  )
}

export default Footer