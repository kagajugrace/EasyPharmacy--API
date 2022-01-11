import express from "express";
import PaymentController from "../controllers/paymentcontroller";
import verifyAccess from "../middlewares/verifyAccess"

const payRouter= express.Router();

payRouter.post("/payment", verifyAccess("admin"), PaymentController.createPayment);
payRouter.get("/all", verifyAccess("admin"), PaymentController.getAllPayment);


export default payRouter;