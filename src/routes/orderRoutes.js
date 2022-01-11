import express from "express";
import OrderController from "../controllers/OrderController";
import verifyAccess from "../middlewares/verifyAccess"

const OrderRouter = express. Router();

OrderRouter.post("/register", verifyAccess("user"), OrderController.create);
OrderRouter.get("/:id",OrderController.getOneOrder);
OrderRouter.delete("/:id", verifyAccess("admin"), OrderController.deleteOneDrug);
 
export default OrderRouter;
