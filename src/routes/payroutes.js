import express from "express";
import PaymentController from "../controllers/paymentcontroller";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";

const payRouter= express.Router();


payRouter.post("/payment", verifyToken, verifyAccess("admin"), PaymentController.createPayment);
payRouter.get("/all", verifyToken, verifyAccess("admin"), PaymentController.getAllPayment);
payRouter.get("/:id", PaymentController.getOnePayment);
payRouter.delete("/:id", verifyToken, verifyAccess("admin"), PaymentController.deleteOnePayment);



export default payRouter;