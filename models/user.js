const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  username :{
    type: String,
    required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password:{
        type: String,
        required: true,
      },
      profilePicture:{
        type:String,
        default:'',
      },
      Authors:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
      },
           
},{timestamps : true})

module.exports=mongoose.model('User',userSchema,'users');