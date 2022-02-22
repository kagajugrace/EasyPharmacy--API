import mongoose from "mongoose";
 const userSchema= new mongoose.Schema(
     {
 firstname:String,
 lastname:String,
password:{
type:String,
required:true,
},
 gender:{
     type:String,
     enum: [ "female", "male"],
 },
 address:{
     type:String,
     required:true,
 },
 role:{
     type:String,
     enum:["user", "admin","pharmacyadmin"],
 },

 pharmacyadmin:{
    pharmacyName:
    {
        type:String,
    },
   tinNumber:{
       type:String,
   },
   pharmacyAddress:{
      type:String,
   }
},

 phone:{
     type:String,
     required:true,
     unique: true,
 },
 pharmacyadmin:{
     pharmacyName:
     {
         type:String,
     },
    tinNumber:{
        type:String,
    },
    pharmacyAddress:{
       type:String,
    }
},
 email:{
     type:String,
     required:true,
 },
 age:{
     type:Number,
     required:false,
 }
 },
 {
     timestamps:true,
 }
 );
const User=mongoose.model('user',userSchema)
 export default User;








    