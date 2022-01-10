import mongoose from "mongoose"


const drugSchema = new mongoose.Schema(
    {
        name:String,
        description: String,
        ingredients:String,
        manufacturedDate:{
            type:String,
            required:true,
        },
        expiring:{
            type:String,
            required:true,
        },
        userId:String,
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
const drug = mongoose.model('Drug',drugSchema);
export default drug