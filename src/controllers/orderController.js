import orderInfos from "../models/order";

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

  static async getOneOrder(req,res,){
      //req.body.order = req.order._id;
      const order = await orderInfos.findById(req.params.id);

      if(!order){
        return res.status(404).json({error:"Order is not found"})
      }

  return res
       .status(200)
       .json({message:"Order is found successfully", data: order});
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