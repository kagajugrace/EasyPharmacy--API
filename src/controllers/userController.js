
import UserInfos from"../models/user";
import bcrypt from "bcrypt"
 import TokenAuth from "../helpers/tokenAuth";
 import sendSms from "../helpers/sms";



class userController{
    // create a user
    static async createUser(req, res) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const user = await UserInfos.create(req.body);
      if (!user) {
        return res.status(404).json({ Error: "user not registed" })
      }
  
      return res.status(200).json({ message: "user created successfully", data: user });
  
    }
    
    // delete one user
    static async deleteOneUser(req, res) {
        const user = await UserInfos.findByIdAndDelete(req.params.id);
        if (!user) {
          return res.status(404).json({ Error: "user not found" })
        }
    
        return res.status(200).json({ message: "user deleted successfully", data: user });
    
    
    
    
    
      }
// get all users
static async getAllUsers(req, res) {
    const user = await UserInfos.find();
    if (!user) {
      return res.status(404).json({ Error: "user not retrieved well" })
    }

    return res.status(200).json({ message: " successfully retrieved user", data: user });


  }
   
  // get one user in db


  static async getOneUser(req, res) {
    const user = await UserInfos.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ Error: "user not found" })
    }

    return res.status(200).json({ message: "user found successfully", data: user });



  }  
  static async updateOneUser(req,res){
    
   const user = await UserInfos.findByIdAndUpdate
   (req.params.id , req.body,{new:true});

     if(!user){
        return res.status(404).json({error:"user  is not updated"})     }
     return res
     .status(200)
     .json({message:" user updated successfully", data: user});
  }
  //  login
  static async userLogin(req, res) {
    
    const user = await UserInfos.findOne({$or:[{email:req.body.email},{ phone:req.body.phone}]});
  console.log(user)

    if (!user) {
      return res.status(404).json({ Error: "user not found kindly register first" });
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      user.password = null;

      const token = TokenAuth.tokenGenerator({ user:user});

      return res.status(200).json({ message: "successfully login in", token: token });

    }
    return res.status(400).json({ Error: "invalid email or password" })


  
  }



}
export default  userController; 
