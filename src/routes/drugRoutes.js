import  express  from "express";
import DrugController from "../controllers/drugController";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";

// drugRouter.post(
//     "/create drug",
//     verifyAccess("admin"),
// )


const drugRouter = express. Router();
drugRouter.post("/register", verifyToken, verifyAccess("pharmacyadmin"), DrugController.create);
drugRouter.get("/all", DrugController.getAllDrugs);
drugRouter.patch("/one/:id", verifyToken, verifyAccess("pharmacyadmin"), DrugController.updateOneDrug);
drugRouter.get("/one/:id", DrugController.getOneDrug);
drugRouter.delete("/one/:id", verifyToken, verifyAccess("pharmacyadmin"), DrugController.deleteOneDrug);
drugRouter.get("/all/:name", DrugController.getAllDrugsByPharmacyName);
export default drugRouter;