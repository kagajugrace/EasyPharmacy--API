import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    drug:{
       type:mongoose.Schema.ObjectId,
       ref:"Drug"
    },
    payment:{
      type:mongoose.Schema.ObjectId,
      ref:"payment"
    },
    paymentStatus:{
     type:String,
     enum:["pending" , "cancelled", "accepted"],
     default: "pending",
     },
    location:String,
    status:{
        type:String,
        enum:["ordered","not ordered"],
        default:"not ordered"
    },
 },
  {
    timestamp:true,
  }
);

   orderSchema.pre(/^find/, function (next){
     this.populate({
       path:"user",
       select:"firstname  email age address phone",
     }).populate({
       path: "drug",
     });
     next();
   });   

const Order = mongoose.model("Order", orderSchema);

export default Order;

