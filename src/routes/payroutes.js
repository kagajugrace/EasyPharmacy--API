import express from "express";
import PaymentController from "../controllers/paymentcontroller";

const payRouter= express.Router();

payRouter.post("/payment",PaymentController.createPayment);
payRouter.get("/all", PaymentController.getAllPayment);


export default payRouter;