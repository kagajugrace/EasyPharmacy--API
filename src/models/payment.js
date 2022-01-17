import mongoose from "mongoose";

const paymentSchema= new mongoose.Schema({
    paymentName:String,
    accountNumber:String,
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },

    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive",
    },

},
);

// paymentSchema.pre(/^find/ , function (next){
//     this.populate({
//         path: "user",
//         select:"lastName email address"
//     });
//     next();
// })

const Payment = mongoose.model('Payment',paymentSchema);

export default Payment;