import 'express-async-errors'
import express from "express";
import { appDataSource } from "./data-source";
import routes from "./router";
import { middlewareError } from "./middlewares/erros";

appDataSource.initialize().then(() => {
	const app = express();
	app.use(express.json());

	app.use(routes);

	app.use(middlewareError);

	app.listen(process.env.PORT, () => {
		console.log("app runnig");
	});
});
