import { Router, Request, Response } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";
import { ApiError, BadRequestError } from "./helpers/api-errors";

const routes = Router();

routes.get("/",async (req: Request, res: Response) => {
	throw new BadRequestError("você caiu");
});
routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);
routes.post("room/:idRoom/create", new RoomController().createVideo);
routes.post("/room/:idRoom/subject", new RoomController().roomSubject);
export default routes;
