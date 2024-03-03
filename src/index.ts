import  express  from "express";
import { appDataSource } from "./data-source";


 appDataSource.initialize().then(()=>{
    const app = express()
    app.use(express.json())
    app.get('/', (req,res )=>{
        res.json('hello world')
    })
    app.listen(process.env.PORT)
 })