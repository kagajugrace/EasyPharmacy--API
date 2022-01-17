import mongoose from "mongoose"


const drugSchema = new mongoose.Schema(
    {
        pharmacyadmin:{
            type:mongoose.Schema.ObjectId,
            ref:"User"
        },

        pharmacy:{
            type:mongoose.Schema.ObjectId,
            ref:"Pharmacy"
        },

        name:String,
        description: String,
        ingredients:String,
        manufacturedDate:String,
        expiring:String,
        availableDrugs:Number,
        price: String,
        status:{
            type:String,
            enum:["available","not available"]
        },
    },
    {
        timestamps: true,
    }
);

// drugSchema.pre(/^find/, function (next){
//     this.populate({
//       path:"pharmacyadmin",
//       select:"firstname email  phone",
//     }).populate({
//         path: "pharmacy",
        
//       });
//     next();
//   });  

drugSchema.pre(/^find/, function (next){
    this.populate({
      path:"pharmacyadmin",
      select:"firstname email  phone",
    }).populate({
        path: "pharmacy",
        
        
      });
    next();
  });  

const Drug = mongoose.model('Drug',drugSchema);
export default Drug