import mongoose from "mongoose";
const {model,Schema,ObjectId}=mongoose
mongoose.pluralize(null);

const productSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true,
    trim:true
  },
  subtitle:{
    type:String,
    required:true,
    trim:true
  },
  brand:{
    type:String,
    required:true,
    
  },
  description:{
   type:String,
   required:true,
  },
  image:[{}],
  price:{
    type:Number,
    required:true,
    
  },
  category:{
type:String,
required:true,
  },
  rating:{
    type:Number,
    required:true,
  },
  stock:{
    type:Number,
    default:0
    
  },
  instock:{
    type:Boolean,
    default:true,
  },
  review:[],
  numberofreviews:{
    type:Number,
    default:0
  },
  // user:{
  //   type:ObjectId,
  //   ref:'User',
  //   required:true
  // },
  onsale:{
    type:Boolean,
    default:0,
  },
discount:{
    type:Number,
    default:0
  },
  sold:{
    type:Boolean,
    default:0,
  },
  isproductnew:{
    type:Boolean,
    default:false
  },

},{timestamps:true});

const productmodel=model('products',productSchema );
export default productmodel;


