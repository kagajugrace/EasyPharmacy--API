import UserInfos from "../models/user";

class DataChecker{

    //check if user email exist
    static async isEmailExist(req,res,next){
        const user = await UserInfos.findOne({email: req.body.email});
        if(!user){
            return next();
        }
        return res.status(401).json({error:"email already exist"})
    }

    //check if user phone exist

    static async isPhoneExist(req,res,next){
        const user = await UserInfos.findOne({phone: req.body.phone});
        if(!user){
            return next();
        }
        return res.status(401).json({error:"Phone already exist"})
    }
}

export default DataChecker;