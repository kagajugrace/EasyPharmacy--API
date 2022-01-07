import  express  from "express";
import DrugController from "../controllers/drugController";


const drugRouter = express. Router();
drugRouter.post("/register",DrugController.create);
drugRouter.get("/all",DrugController.getAllDrugs);
drugRouter.get("/one/:id",DrugController.getOneDrug);
drugRouter.delete("/one/:id",DrugController.deleteOneDrug);
export default drugRouter;