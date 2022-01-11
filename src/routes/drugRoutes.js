import  express  from "express";
import DrugController from "../controllers/drugController";
import verifyAccess from "../middlewares/verifyAccess"

// drugRouter.post(
//     "/create drug",
//     verifyAccess("admin"),
// )


const drugRouter = express. Router();
drugRouter.post("/register", verifyAccess("admin"), DrugController.create);
drugRouter.get("/all", DrugController.getAllDrugs);
drugRouter.patch("/one/:id", verifyAccess("admin"), DrugController.updateOneDrug);
drugRouter.get("/one/:id", DrugController.getOneDrug);
drugRouter.delete("/one/:id", verifyAccess("admin"), DrugController.deleteOneDrug);
export default drugRouter;