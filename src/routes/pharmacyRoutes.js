import express from "express";
import PharmacyController from "../controllers/pharmacyController";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";
import DataChecker from "../middlewares/datachecker";

const PharmacyRouter = express. Router();

PharmacyRouter.post("/register",DataChecker.isPharmacyExist, verifyToken, verifyAccess("admin"), PharmacyController.create);
PharmacyRouter.get("/one/:id", verifyToken,verifyAccess("admin"),PharmacyController.getOnePharmacy);
PharmacyRouter.get("/all",verifyToken, verifyAccess("admin"),PharmacyController.getAllPharmacies);
PharmacyRouter.get("/all/:name",verifyToken, verifyAccess("admin"),PharmacyController.getAllPharmacyByDrugName);
PharmacyRouter.delete("/one/:id", verifyToken, verifyAccess("admin"), PharmacyController.deleteOnePharmacy);

 
export default PharmacyRouter;
