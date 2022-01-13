import express from "express";
import userController from "../controllers/userController";

import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";
import validator from "../middlewares/validator";

import DataChecker from "../middlewares/datachecker";

const userRouter=express.Router();

userRouter.post( "/register", DataChecker.isEmailExist, DataChecker.isPhoneExist,validator.newAccountRules(), validator.validateInput, userController.createUser);

userRouter.get("/all", userController.getAllUsers);
userRouter.get("/:id",userController.getOneUser);
userRouter.delete("/:id", verifyToken, verifyAccess("admin"), userController.deleteOneUser);
userRouter.patch("/:id", verifyToken, verifyAccess("admin"), userController.updateOneUser);
userRouter.post("/login", userController.userLogin)

 export default userRouter;