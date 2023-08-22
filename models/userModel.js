const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"],
        index:true,
    },
    lastName:{
        type:String,
    
    },
    surname:{
        type:String,
        required:[true, "Surname is required"],
        
    },
    email:{
        type:String,
        required:[true, "Password is required"],
        unique:true,
    },
    mobile:{
        type:String,
        required:[true, "Mobile number is requied"],
        unique:true,
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
},{
    timestamps : true,
}
);

//Export the model
module.exports = mongoose.model('User', userSchema);