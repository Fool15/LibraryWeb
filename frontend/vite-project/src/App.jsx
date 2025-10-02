import { Route,Routes } from "react-router"
import HomePage from "./HomePage"
import UploadBook from "./components/UploadBook"
import BookDetails from "./components/BookDetails"
import UpdateBook from "./components/UpdateBook"
import LoginPage from "./components/LoginPage"
import AllBooksPage from "./components/AllBooksPage"
function App() {

  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/allBooks" element={<AllBooksPage/>}/>
        <Route path="/loginPage" element={<LoginPage/>}/>
        <Route path="/uploadBook" element={<UploadBook/>}/>
        <Route path="/bookDetails/:id" element={<BookDetails/>}/>
        <Route path="/updateBook/:id" element={<UpdateBook/>}/>
    </Routes>
  )
}

export default App
