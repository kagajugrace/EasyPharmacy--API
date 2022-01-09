import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    userId:{
        type:String,
        ref:"User"
    },
    drugId:{
       type:String,
    },
    status:{
        type:String,
        enum:["pending","ordered","not ordered"],
        pending:["pending"],
    },
 },
  {
    timestamp:true,
  }
);

      

const Order = mongoose.model("Order", orderSchema);

export default Order;

