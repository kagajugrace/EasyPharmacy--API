import express from "express";
import userController from "../controllers/userController";
import verifyAccess from "../middlewares/verifyAccess"

const userRouter=express.Router();

userRouter.post( "/register",verifyAccess("user"), userController.createUser);
userRouter.get("/all", userController.getAllUsers);
userRouter.get("/:id",userController.getOneUser);
userRouter.delete("/:id",verifyAccess("admin"), userController.deleteOneUser);
userRouter.patch("/:id",verifyAccess("admin"), userController.updateOneUser);


    


 export default userRouter;