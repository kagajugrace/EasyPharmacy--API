import express from "express";
import OrderController from "../controllers/OrderController";
import userController from "../controllers/userController";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";

const OrderRouter = express. Router();

OrderRouter.post("/register", verifyToken, verifyAccess("user"), OrderController.create);
OrderRouter.get("/one/:id", verifyToken,OrderController.getOneOrder);
OrderRouter.get("/all",verifyToken, verifyAccess("admin"),OrderController.getAllOrders);
OrderRouter.get("/all/:id",verifyToken, verifyAccess("admin"),OrderController.getAllOrderByDrugId);
OrderRouter.get("/one/:id", verifyToken, verifyAccess("admin"),OrderController.getAllOrderByUserId);
OrderRouter.delete("/one/:id", verifyToken, verifyAccess("admin"), OrderController.deleteOneDrug);
OrderRouter.patch("/status", verifyToken, verifyAccess("admin"), OrderController.sendOrderSms);
 
export default OrderRouter;
