import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Mongoose  from "mongoose";

dotenv.config("./.env");


const app = express();

app.use(bodyParser.json());
app.use("/", (req,res)=> res.status(200).json({
    message:"The tour API doesn't exist"
})  );

const dbUrl=process.env.DATABASEURL;
Mongoose.connect(dbUrl).then ( () => console.log("Database connected successful"))
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)

})
export default app;