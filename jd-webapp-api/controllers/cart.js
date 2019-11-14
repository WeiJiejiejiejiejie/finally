const express = require("express");
const router = express.Router();
const orderModel = require('../models/shopsInf')
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Headers","Content-Type");
    if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
    else next();
})

router.get("/",(req,res)=>{
    res.json(orderModel.getOrders())
})
module.exports = router;




// const express = require("express")
// const router = express.Router()
// const orderModel = require('../models/orderModel')
//
//
// router.get("/",(req,res)=>{
//     // { orders:orderArr} 绑定到order.ejs模块上<%%>
//     res.render("order",{ orders:orderModel.getOrders()})
// })
//
//
// module.exports = router;
