
import UserInfos from"../models/user";



class userController{
    // create a user
    static async createUser(req, res) {
        
        const user = await UserInfos.create(req.body);
        if (!user) {
          return res.status(404).json({ Error: "user note registed" })
        }
    
        return res.status(200).json({ message: "user created successeful", data: user });
    }
    
    // delete one user
    static async deleteOneUser(req, res) {
        const user = await UserInfos.findByIdAndDelete(req.params.id);
        if (!user) {
          return res.status(404).json({ Error: "user not found" })
        }
    
        return res.status(200).json({ message: "user delete", data: user });
    
    
    
    
    
      }
// get all users
static async getAllUsers(req, res) {
    const user = await UserInfos.find();
    if (!user) {
      return res.status(404).json({ Error: "user note retrieves well" })
    }

    return res.status(200).json({ message: " successeful retrieved user", data: user });


  }
  // get one user in db


  static async getOneUser(req, res) {
    const user = await UserInfos.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ Error: "user note found" })
    }

    return res.status(200).json({ message: "user found", data: user });



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



}
export default  userController; 
