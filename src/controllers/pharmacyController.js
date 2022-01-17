import pharmacyInfos from "../models/pharmacy";
import drugInfos from "../models/drugs";


class PharmacyController {

//create pharmacy in db

static async create(req,res) {
    
    const pharmacy = await pharmacyInfos.create(req.body);

    if(!pharmacy){
        return res.status(404).json({error:"Pharmacy not registered"})
    }

    return res
       .status(200)
       .json({message:"Pharmacy create successfully", data: pharmacy});
  }
  
  //get one pharmacy by id

  static async getOnePharmacy(req,res){
      
      const pharmacy = await pharmacyInfos.findById(req.params.id);

      if(!pharmacy){
        return res.status(404).json({error:"Pharmacy is not found"})
      }

  return res
       .status(200)
       .json({message:"Pharmacy is found successfully", data: pharmacy});
  }

  //get all pharmacy
  static async getAllPharmacies(req,res){
 
    const pharmacies = await pharmacyInfos.find(); //return general data
    if(!pharmacies){
      return res.status(404).json({error: "no Pharmacies registered"})
  }

  return res.status(200).json({message: "successfully retrieved Pharmacies", data: pharmacies })
  }

  //get all pharmacy by drug name
  static async getAllPharmacyByDrugName(req,res) {

    const Drug = await drugInfos.findOne({name:req.params.name})


    const pharmacies = await pharmacyInfos.find({drug:Drug._id});

    // const pharmacies = await pharmacyInfos.find({drug:req.params.name});
    if (!pharmacies) {
      return res.status(404).json({error: "Not found"});
    }
    return res.status(200).json({message: "All pharmacies by drug name are successfully viewed", data: pharmacies });
  }

 

  //delete one pharmacy by id

  static async deleteOnePharmacy(req,res){
      
      const pharmacy = await pharmacyInfos.findByIdAndDelete(req.params.id);

      if(!pharmacy){
        return res.status(404).json({error:"Pharmacy is not deleted"})
      }

      return res
      .status(200)
      .json({message:"Pharmacy is deleted successfully", data: pharmacy});
 }

  }
  

export default PharmacyController;