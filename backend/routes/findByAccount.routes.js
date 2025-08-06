const express=require("express");
const router=express.Router();
const controller=require("../controller/controller");
const customersSchema=require("../model/customer.model");

router.post("/",(req,res)=>{
controller.findByAccount(req,res,customersSchema);
}
);

module.exports=router;