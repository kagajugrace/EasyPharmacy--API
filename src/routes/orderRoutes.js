import express from "express";
import OrderController from "../controllers/orderController";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";

const OrderRouter = express. Router();

OrderRouter.post("/register", verifyToken, verifyAccess("user"), OrderController.create);
OrderRouter.get("/one/:id", verifyToken,OrderController.getOneOrder);
OrderRouter.get("/all",verifyToken, verifyAccess("pharmacyadmin"),OrderController.getAllOrders);
OrderRouter.get("/all/:id",verifyToken, verifyAccess("pharmacyadmin"),OrderController.getAllOrderByDrugId);
OrderRouter.get("/one/:id", verifyToken, verifyAccess("pharmacyadmin"),OrderController.getAllOrderByUserId);
OrderRouter.delete("/one/:id", verifyToken, verifyAccess("pharmacyadmin"), OrderController.deleteOneDrug);
OrderRouter.patch("/status", verifyToken, verifyAccess("pharmacyadmin"), OrderController.sendOrderSms);
 
export default OrderRouter;
