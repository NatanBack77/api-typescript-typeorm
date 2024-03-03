import  express  from "express";
import { appDataSource } from "./data-source";
import routes from "./router";

 appDataSource.initialize().then(()=>{
    const app = express()
    app.use(express.json())
   
    app.use(routes)
    app.listen(process.env.PORT)
 })