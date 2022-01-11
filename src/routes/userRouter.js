import express from "express";
import userController from "../controllers/userController";

const userRouter=express.Router();

userRouter.post( "/register", userController.createUser);
userRouter.get("/all", userController.getAllUsers);
userRouter.get("/:id",userController.getOneUser);
userRouter.delete("/:id",userController.deleteOneUser);
userRouter.patch("/:id",userController.updateOneUser);
userRouter.post("/login", userController.userLogin)


    


 export default userRouter;