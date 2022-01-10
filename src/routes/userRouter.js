import express from "express";
import userController from "../controllers/userController";

import DataChecker from "../middlewares/datachecker";

const userRouter=express.Router();

userRouter.post( "/register", DataChecker.isEmailExist, DataChecker.isPhoneExist, userController.createUser);
userRouter.get("/all", userController.getAllUsers);
userRouter.get("/:id",userController.getOneUser);
userRouter.delete("/:id",userController.deleteOneUser);
userRouter.patch("/:id",userController.updateOneUser);


    


 export default userRouter;