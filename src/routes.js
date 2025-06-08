
import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import authMiddleware from "./app/middlewares/auth";

import UserController from "./app/crontrollers/UserController";
import sessionController from "./app/crontrollers/sessionController";
import ProductController from "./app/crontrollers/ProductController";
import CategoryController from "./app/crontrollers/CategoryController";
import OrderController from "./app/crontrollers/OrderController";



const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users",UserController.store );
routes.post("/session",sessionController.store);

routes.use(authMiddleware);

routes.post("/products" ,upload.single("file"),ProductController.store);
routes.get("/products",ProductController.index);

routes.post("/categories",CategoryController.store);
routes.get("/categories",CategoryController.index);


routes.post("/orders",OrderController.store)
   

export default routes;