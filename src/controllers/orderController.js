import orderInfos from "../models/order";
import sendSms from "../helpers/sms"

class OrderController {

//create order in db

static async create(req,res) {
    //req.body.order = req.order._id;
    const order = await orderInfos.create(req.body);

    if(!order){
        return res.status(404).json({error:"Order not registered"})
    }

    return res
       .status(200)
       .json({message:"Order create successfully", data: order});
  }
  
  //get one order by id

  static async getOneOrder(req,res){
      //req.body.order = req.order._id;
      const order = await orderInfos.findById(req.params.id);

      if(!order){
        return res.status(404).json({error:"Order is not found"})
      }

  return res
       .status(200)
       .json({message:"Order is found successfully", data: order});
  }

  //get all orders
  static async getAllOrders(req,res){
 
    const orders = await orderInfos.find(); //return general data
    if(!orders){
      return res.status(404).json({error: "no orders registered"})
  }

  return res.status(200).json({message: "successfully retrieved orders", data: orders })
  }

  // get all orders by user id

  static async getAllOrderByUserId(req,res) {
    const order = await orderInfos.find({user:req.user.id});
    if(!order){
      return res.status(404).json({error:"not found"});
    }
    return res.status(200).json({message:" all orders by user id successfully viewed", data: order })
  }


  //get all orders by drug id
  static async getAllOrderByDrugId(req,res) {

    const orders = await orderInfos.find({drug:req.params.id});
    if (!orders) {
      return res.status(404).json({error: "Not found"});
    }
    return res.status(200).json({message: "All orders by drug id are successfully viewed", data: orders });
  }

  //send sms

   static async sendOrderSms(req,res) {
     const {id,status}=req.body
     const order = await
     orderInfos.findByIdAndUpdate(id,{status:status},{new:true})
     if(!order) {
       return res.status(404).json({error: " failed to update status"});
     }
     console.log(order)
     sendSms(order.user.firstname, order.status, order._id, order.user.phone)
     return res.status(200).json({ message : "ordered successfull" , data:order})
   }
  //delete one order by id

  static async deleteOneDrug(req,res){
      //req.body.order = req.order._id;
      const order = await orderInfos.findByIdAndDelete(req.params.id);

      if(!order){
        return res.status(404).json({error:"Order is not deleted"})
      }

      return res
      .status(200)
      .json({message:"Order is deleted successfully", data: order});
 }

  }
  

export default OrderController;