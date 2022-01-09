import PaymentInfos from "../models/payment";

class PaymentController{

    //Create user in db

    static async createPayment(req,res){
        const payment= await PaymentInfos.create(req.body);
        console.log(payment);

        if (!payment){
            return res.status(404).json({error:"Payment not registered"})
        }

        return res.status(200).json({message:"Payment created successfully", data: payment});
    }

    static async getAllPayment(req,res){
        const payments= await PaymentInfos.find();

        if (!payments){
            return res.status(404).json({error:"Payments not retrieved"})
        }

        return res.status(200).json({message:"Get Payments successfully", data: payments});
    }

}

export default PaymentController;