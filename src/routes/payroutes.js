import express from "express";
import PaymentController from "../controllers/paymentcontroller";

const payRouter= express.Router();

payRouter.post("/payment",PaymentController.createPayment);
payRouter.get("/all", PaymentController.getAllPayment);
payRouter.get("/:id", PaymentController.getOnePayment);
payRouter.delete("/:id", PaymentController.deleteOnePayment);


export default payRouter;