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
   
  

    