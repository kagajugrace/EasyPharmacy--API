import mongoose from "mongoose"


const pharmacySchema = new mongoose.Schema(
    {
        drug:[{
            type:mongoose.Schema.ObjectId,
            ref:"Drug"
        }],

        name:String,
        address: String,
        tin:Number,


    },
    {
        timestamps: true,
    }
);

pharmacySchema.pre(/^find/, function (next){
    this.populate({
      path:"drug",
      select:"name price expiring availableDrugs",
    });
    next();
  });   

const Pharmacy = mongoose.model('Pharmacy',pharmacySchema);
export default Pharmacy