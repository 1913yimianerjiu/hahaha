const mongoose =require('mongoose')
const userSchema=mongoose.Schema({
    us:{type:String,required:true},
    age:{type:Number,default:0},
    ps:{type:String,required:true}
})
const model =mongoose.model('users',userSchema)

module.exports=model



