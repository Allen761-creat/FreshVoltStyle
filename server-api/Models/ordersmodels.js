import  { mongoose } from 'mongoose';
const {model,Schema,ObjectId}=mongoose
mongoose.pluralize(null);
const ordersschema=new Schema({
user:{
    type: ObjectId,
    required: true,
    ref:'users'
},
username:{
    type: String,
    required: true,
    ref:'user'
},
email:{
    type:String,
    required: true,
    ref:'user'
},
// phone: {
//     type: String,
//      required: true,
//       ref:'user'
//     },
oderitems:[
    {
       title:{
        type: String,
        required: true,
       },
       price:{
        type:Number,
        required: true
       },
       image:{
        type:String,
        required: true
       },
       qty:{
        type:Number,
        required: true
       },
       id:{
        type:ObjectId,
        required: true,
        ref:'products'

       }



    }
],
shippingadress:{
   
adress:{
    type:String,
    required: true
},
city:{
    type:String,
    required: true
},
postalCode:{
    type:String,
    required: true
},
country:{
    type:String,
    required: true
}
},
shippingprice:{
    type:Number,
   default:0,
},
totalprice:{
    type:Number,
    default:0,
},
subtotal:{
    type:Number,
    default:0,
},
isdeliverd:{
    type:Boolean,
    default:false,
    required: true
},
deliveryAt:{
    type: Date

},
},{
    timestamps:true
})

const ordersmodel = model('orders',ordersschema);
export default ordersmodel;