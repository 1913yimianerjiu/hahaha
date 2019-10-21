const express=require('express')
const router=express.Router()
const Mail=require('../utils/mail')
const UserModel=require('../db/model/userModel')
const jwt=require('../utils/jwt')
let codes={}


// 验证邮箱是否存在
router.get('/checkMail',(req,res)=>{
    let {us}=req.query

    UserModel.find({us})
    .then((data)=>{
        if(data.length){
            res.send({err:0,msg:'邮箱可用'})
        }else{
            res.send({err:-1,msg:'邮箱不可用'})
        }       
    })
    .catch((err)=>{
        console.log(err,'no ok')  
    })
})
// 发送验证码
router.get('/sendMail',(req,res)=>{
    let {mail}=req.query
    let code=parseInt(Math.random()*10000)
    codes[mail]=code

//    回调方式
    Mail.send(mail,code)
    .then(()=>{
        res.send({err:0,msg:'send ok'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'send no ok'})
    })
})

// 注册接口
router.get('/reg',(req,res,next)=>{
    let {us,code}=req.query
    console.log(us,code,codes,codes[us])
    if(Number(code)===Number(codes[us])){
        next()
    }else{
        res.send({err:-1,msg:'验证码错误'})
}

},(req,res)=>{
    let {us,ps}=req.query
    UserModel.insertMany({us,ps})
    .then((data)=>{
        console.log(data,'ok')
        res.send({err:0,msg:'send ok'})               
    })
    .catch((err)=>{
        console.log(err,'no ok')  
        res.send({err:-1,msg:'send no ok'})
    })
})


/**
 * @api {get} /admin/user/login  用户登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} us 用户账号
 * @apiParam {String} ps 用户密码.
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg.
 * @apiSuccess {String} token  token.
*/
 


 /**
 * @api {get} /admin/user/reg  用户注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {String} us 用户账号
 * @apiParam {String} ps 用户密码.
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg.
 */

 /**
 * @api {get} /admin/user/sendMail  验证码
 * @apiName sendMail
 * @apiGroup User
 *
 * @apiParam {String} us 用户账号
 * @apiParam {String} ps 用户密码.
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg.
 */

/**
 * @api {get} /admin/user/checkMail  验证邮箱是否存在
 * @apiName checkMail
 * @apiGroup User
 *
 * @apiParam {String} us 用户账号
 * @apiParam {String} ps 用户密码.
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg.
 */ 
 

/**
 * @api {get} /admin/food/getFoods     获取全部商品信息  
 * @apiName getFoods
 * @apiGroup Food
 *
 * @apiParam {String} name 名字
 * @apiParam {String} price 价格
 * @apiParam {String} imPath 图片
 * @apiParam {String} foodType 类型
 * @apiParam {String}  desc   简介
 * 
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg.
 */ 
 

 /**
 * @api {get} /admin/food/getFoodsByPage    分页+分类  
 * @apiName getFoodsByPage
 * @apiGroup Food
 *
 * @apiParam {String} name 名字
 * @apiParam {String} price 价格
 * @apiParam {String} imPath 图片
 * @apiParam {String} foodType 类型
 * @apiParam {String}  desc   简介
 * 
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg
 * @apiSuccess {String} count  数量
 */
 
 
 /**
 * @api {get} /admin/food/addFood    添加商品  
 * @apiName addFood
 * @apiGroup Food
 *
 * @apiParam {String} name 名字
 * @apiParam {String} price 价格
 * @apiParam {String} imPath 图片
 * @apiParam {String} foodType 类型
 * @apiParam {String}  desc   简介
 * 
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg
 */ 
 
 
 /**
* @api {get} /admin/food/delFood    删除商品 
 * @apiName delFood
 * @apiGroup Food
 *
 * @apiParam {String} name 名字
 * @apiParam {String} price 价格
 * @apiParam {String} imPath 图片
 * @apiParam {String} foodType 类型
 * @apiParam {String}  desc   简介
 * @apiParam {String}  _id   _id
 * 
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg
 */
 
 /**
 * @api {get} /admin/food/getFoodByKw    关键字查询 
 * @apiName getFoodByKw
 * @apiGroup Food
 *
 * @apiParam {String} name 名字
 * @apiParam {String} price 价格
 * @apiParam {String} foodType 类型
 * @apiParam {String}  desc   简介
 * @apiParam {String}  _id   _id
 * 
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg
 * @apiSuccess {String} list  data
 * 
 */
  
 
 /**
 * @api {get} /admin/food/updateFood    修改商品
 * @apiName updateFood
 * @apiGroup Food
 *
 * @apiParam {String} name 名字
 * @apiParam {String} price 价格
 *  @apiParam {String} imPath 图片
 * @apiParam {String} foodType 类型
 * @apiParam {String}  desc   简介
 * @apiParam {String}  _id   _id
 * 
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg  msg
 * 
 */









// 登录接口
router.get('/login',(req,res)=>{
let {us,ps}=req.query
UserModel.findOne({us,ps})
.then((data)=>{
    if(data){
       let token=jwt.createToken({uid:data._id},7*24*60*60)
       res.send({err:0,msg:'login ok',token:token}) 
    }else{
        res.send({err:-2,msg:'login no ok'}) 
    }
})
.catch((err)=>{
    res.send({err:-1,msg:'内部错误'})                                               
})
})



module.exports=router



