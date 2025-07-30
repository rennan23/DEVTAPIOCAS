
import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/crontrollers/UserController";
import sessionController from "./app/crontrollers/sessionController";
import ProductController from "./app/crontrollers/ProductController";
import CategoryController from "./app/crontrollers/CategoryController";
import OrderController from "./app/crontrollers/OrderController";

import authMiddleware from "./app/middlewares/auth";

const upload = multer(multerConfig);
const routes = new Router();

routes.post("/users",UserController.store );

routes.post("/session",sessionController.store);

routes.use(authMiddleware);

routes.post("/products" ,upload.single("file"),ProductController.store);
routes.get("/products",ProductController.index);
routes.put("/products/:id" ,upload.single("file"),ProductController.update);

routes.post("/categories",upload.single("file"),CategoryController.store);
routes.get("/categories",CategoryController.index);
routes.put("/categories/:id" ,upload.single("file"),CategoryController.update);


routes.post("/orders",OrderController.store);
   routes.get("/orders",OrderController.index);
   routes.put("/orders/:id",OrderController.update)

export default routes;