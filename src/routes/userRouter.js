import express from "express";
import userController from "../controllers/userController";
import validator from "../middlewares/validator";

import DataChecker from "../middlewares/datachecker";

const userRouter=express.Router();
userRouter.post( "/register", DataChecker.isEmailExist, DataChecker.isPhoneExist,validator.newAccountRules(), validator.validateInput, userController.createUser);

userRouter.get("/all", userController.getAllUsers);
userRouter.get("/:id",userController.getOneUser);
userRouter.delete("/:id",userController.deleteOneUser);
userRouter.patch("/:id",userController.updateOneUser);


    


 export default userRouter;