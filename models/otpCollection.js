let mongoose=require('mongoose');
var userOtpSchema =new mongoose.Schema({
  otpDetails :{
    email:String,
    otp:Number
  }
});
module.exports=mongoose.model("otpCollection",userOtpSchema);
