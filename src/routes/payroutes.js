import express from "express";
import PaymentController from "../controllers/paymentcontroller";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";

const payRouter= express.Router();


payRouter.post("/payment", verifyToken, verifyAccess("user"), PaymentController.createPayment);
payRouter.get("/all", verifyToken, verifyAccess("pharmacyadmin"), PaymentController.getAllPayment);
payRouter.get("/:id",verifyToken, verifyAccess("pharmacyadmin"), PaymentController.getOnePayment);
payRouter.delete("/:id", verifyToken, verifyAccess("pharmacyadmin"), PaymentController.deleteOnePayment);



export default payRouter;