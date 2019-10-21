const mongoose =require('mongoose')
const foodSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,default:0},
    imgPath:{type:String,required:true},
    foodType:{type:String,required:true},
    desc:{type:String,required:'真香'}
})
const model =mongoose.model('foods',foodSchema)

module.exports=model