const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","instructor","student"]
    },
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses"
    }],
    img:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    courseProgess:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CoursesProgress"
    }],
    token:{
        type:String
    },
    expiresIn:{
        type:Date
    },
    tag:{
        type:String,
        required:true
    }
})

module.exports = mongoose.Model("User",UserSchema);