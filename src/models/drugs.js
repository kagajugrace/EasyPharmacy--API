import mongoose from "mongoose"


const drugSchema = new mongoose.Schema(
    {
        pharmacyadmin:{
            type:mongoose.Schema.ObjectId,
            ref:"User"
        },
        price:String,
        name:String,
        description: String,
        ingredients:{
            type:String,
            required:true,
        },
        manufacturedDate:{
            type:String,
            required:true,
        },
        expiring:{
            type:String,
            required:true,
        },
        userId:String,
        ingredients:String,
        manufacturedDate:String,
        expiring:String,
        availableDrugs:String,
        status:{
            type:String,
            enum:["available","not available"]
        },
    },
    {
        timestamps: true,
    }
);

drugSchema.pre(/^find/, function (next){
    this.populate({
      path:"pharmacyadmin",
      select:"firstname email age address phone",
    });
    next();
  });   

const Drug = mongoose.model('Drug',drugSchema);
export default Drug