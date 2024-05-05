import  express ,{NextFunction, Request,Response} from "express";
import { appDataSource } from "./data-source";
import routes from "./router";

 appDataSource.initialize().then(()=>{
    const app = express()
    app.use(express.json())
   
    app.use(routes)

    app.use( async(error:Error,req:Request,res:Response,next:NextFunction)=>{
     console.log(error)
     return res.json("Você caiu no middleware de error")
    })
    
    app.listen(process.env.PORT,()=>{
      console.log("app runnig")
    })
 })