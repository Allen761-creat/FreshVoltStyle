import mongoose, { model } from "mongoose";
mongoose.pluralize(null);
const userschema =new mongoose.Schema({

   username:{
type: 'string',
required: true,
   },
    
    email:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        default: '',
    },
    password:{
        type: String,
        required: true,
      
    },

    isAdmin:{
        type: Boolean,
        default: false,
        required: true
    },
    role:{
        type: [String],
        default: 'buyer',
        enum: ['buyer', 'seller','admin']
        },
    profilepic:{},
    address: {type: String, default: ""},
    phone: {type: String, default: ""},
    gender: {type: String, default: ""},
    city: {type: String, default: ""},
    shortdescription: {type: String, default: ""},

    isverified:{
        type: Boolean,
        default: true,
        required: true
    },    
    isBlocked:{
        type: Boolean,
        default: false,
    },
     resetpasswordcode:{}    
},{timestamp:true });


const usermodel=model('users', userschema);
export default usermodel;