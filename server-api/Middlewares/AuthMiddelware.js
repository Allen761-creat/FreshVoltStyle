

import jwt from'jsonwebtoken'
import * as config from "../Configuration/config.js";
import usermodel from '../Models/authenticationmodel.js';



export const  requiredLoggedIn = async(req,res,next)=>{
try {
    const token = req.headers.authorization
    
    const decode=jwt.verify(token,config.SECERT_KEY)
    if(!decode){
        return res.json({message:"Token is not valid"})
    }
      req.user= decode 
      
    next()
    
} catch (error) {   
    res.json({message:"Invalid token",
        error: error.message
    })
}
}


export const CheckAdmin =async (req, res, next) => {
  try {
  const user = await usermodel.findById(req.user.id)
   const check =   user.isAdmin

    if (check) {
       
        next();                              
    }
    else {
      res.json({ success: false, message: "You are not authorized to access this route" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Occurred" });
    
  }
}