import mongoose from "mongoose";



 const userSchema= new mongoose.Schema(
     {

 Firstname:String,
 Lastname:String,
password:{
type:String,
required:true,
},
 gender:{
     type:String,
     enum: [ "female", "male"],
 },
 adress:{
     type:String,
     required:true,
 },
 role:{
     type:String,

     enum:["user", "admin","pharmacy-admin"],
 },
 phone:{
     type:String,
     required:true,
     unique: true,

 },
 email:{
     type:String,
     required:true,
 },

 age:{
     type:Number,
     required:true,
 }
 },
 {
     timestamps:true,
 }

 );
const User=mongoose.model('User',userSchema)
 
 export default User;
   
  

    