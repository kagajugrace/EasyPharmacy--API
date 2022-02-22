import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Mongoose  from "mongoose";
import cors from "cors"
import payRouter from "./src/routes/payroutes";

import userRouter from "./src/routes/userRouter";

import OrderRouter from "./src/routes/orderRoutes";

import drugRouter from "./src/routes/drugRoutes";

import cors from "cors";

import PharmacyRouter from "./src/routes/pharmacyRoutes"


dotenv.config("./.env");


const app = express();
app.use(cors())

app.use (cors())

app.use(bodyParser.json());


app.use("/pay",payRouter);

app.use("/user",userRouter);

app.use("/order",OrderRouter);

app.use("/drug",drugRouter);

app.use("/pharmacy",PharmacyRouter);



app.use("/", (req,res)=> res.status(200).json({
    message:"The  API doesn't exist"
})  );

const dbUrl=process.env.DATABASEURL;
Mongoose.connect(dbUrl).then (()=> console.log("Database connected successful"));
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

})
export default app;