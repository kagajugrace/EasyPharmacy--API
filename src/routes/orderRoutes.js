import express from "express";
import OrderController from "../controllers/OrderController";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";

const OrderRouter = express. Router();

OrderRouter.post("/register", verifyToken, verifyAccess("user"), OrderController.create);
OrderRouter.get("/:id",OrderController.getOneOrder);
OrderRouter.delete("/:id", verifyToken, verifyAccess("admin"), OrderController.deleteOneDrug);
 
export default OrderRouter;
