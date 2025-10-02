import  express  from "express";
import { getAllBooks ,addBook,deleteBook,updateBook,getBookById,Top5Books} from "../controller/libController.js";
import { createUser,getUsers } from "../controller/userController.js";
const router=express.Router()

router.get("/",getAllBooks)
router.get("/getTop5Books",Top5Books)
router.get("/:id",getBookById)
router.post("/addBook",addBook)
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)

router.post('/users/createUser',createUser)
router.get('/users/getUsers',getUsers)



export default router