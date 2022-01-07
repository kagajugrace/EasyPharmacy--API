import express from "express";
import OrderController from "../controllers/OrderController";


const OrderRouter = express. Router();
OrderRouter.post("/register",OrderController.create);
OrderRouter.get("/:id",OrderController.getOneOrder);
OrderRouter.delete("/:id",OrderController.deleteOneDrug);
 
export default OrderRouter;
