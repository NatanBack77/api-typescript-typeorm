import { Router , Request,Response} from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";



const routes = Router();

routes.get('/',async (req:Request,res:Response)=>{
   throw new Error("você caiu")
   await res.json({msg:"hello world"})
})
routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);
routes.post("room/:idRoom/create", new RoomController().createVideo);
routes.post("/room/:idRoom/subject", new RoomController().roomSubject);
export default routes;
