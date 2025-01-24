import usermodel from "../Models/authenticationmodel.js";
import bcrypt from "bcryptjs";
import validator from "email-validator";
import * as config from "../Configuration/config.js";
import UserandresponeToken from "../Helpers/userandtokenresponse.js";
import { nanoid } from "nanoid/non-secure";
import jwt from "jsonwebtoken";
import exp from "constants";
// import EmailTemplate from "../Helpers/EmailTempelate.js";

export const presignup = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.json({ error: "Email  are required" });
    }
    if (!password) {
      return res.json({ error: " password are required" });
    }

    // --------------------------------------------Validate Email----------------------------------------
    if (!validator.validate(email)) {
      return res.json({
        success: false,
        error: "Invalid email format",
      });
    }
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!regex.test(password)) {
      return res.json({
        success: false,
        error:"Password should contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
      });
    }

    const userexist = await usermodel.findOne({ email });
    if (userexist) {
      return res.json({
        error: "Email already exist",
       
      });
    }

    //------------------------------------ generating tokken with the help of email or password then send email------------------------------
    const token = jwt.sign({ email, password }, config.SECERT_KEY, {
      expiresIn: "1h",
    });

    // -----------------------------------------------aws-----------------------------------------------
    // config.AWSSES.sendEmail(
    //   EmailTemplate(
    //     email,
    //     `
    //    <h2>Verify your email</h2>
    //    <h3>Click on the link below to verify your email</h3>
    //    <a href="${config.CLIENT_URL}/auth/verify/${token}">Verify your account</a>
    //    `
    //   ),

    //   (err, data) => {
    //     if (err) {
    //       console.log("Error sending email:", err);
    //       return res.json({
    //         error: "Error sending email",
    //       });
    //     } else {
    //       console.log("Email sent successfully:", data);
    //       return res.json({
    //         success: true,
    //         data,
    //         message:
    //           "Please check your email for the account verification link",
    //       });
        // }
      // }
    // );
// --------------------------just for backend check remove after aws proceesss-----------------------
res.json({
  success: true,
  message: "Please check your email for the account verification link",
  token,
})
  } catch (error) {
    res.json({
      status: "fail",
      error:  "Something went wrong",
      message:error.message
     
    });
  }
};
export const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
export const signup = async (req, res) => {
  const authtoken = req.body.token;
  const { email, password } = jwt.verify(authtoken, config.SECERT_KEY);
  try {
    const emailexist = await usermodel.findOne({ email });
    if (emailexist) {
      return res.json({
        sucess: false,
        error: "Email already exists",
      });
    }
    const hashPassword = await hashedPassword(password);
    const user = new usermodel({
      email,
      password: hashPassword,
      username: nanoid(8),
    });
    await user.save();
    UserandresponeToken(req, res, user);
  } catch (error) {
    res.json({
      sucess: false,
      error: "Failed to register user",
      error,
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.json({ error: "Email  are required" });
    }
    if (!password) {
      return res.json({ error: " password are required" });
    }

    // --------------------------------------------Validate Email----------------------------------------
    if (!validator.validate(email)) {
      return res.json({
        success: false,
        error: "Invalid email format",
      });
    }
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!regex.test(password)) {
      return res.json({
        success: false,
        error:
          "Password should contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
      });
    }
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        error: "User not found",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({
        success: false,
        error: "Wrong password",
      });
    }
    // user isBlocked check
 
    if (user.isBlocked === true) {
      return res.json({
        success: false,
        error: "User is blocked",
      });
    }
    UserandresponeToken(req, res, user);
    console.log("you are login");
  } catch (error) {
    res.json({
      success: false,
      error: "Failed to authenticate user",
     
    });
  }
};
export const forgetpassword = async (req, res) => {

  const {email} = req.body;
try {
  const user = await usermodel.findOne({ email });

if (!email) {
  return res.json({ error: "Email  are required" });
}

if (!user) {

  return res.json({
    success: false,
    error: "User not found",
  });
};

const resetpasswordcode = nanoid(8)
// yah per jo document nikal kr aya ha us resetpassscode wali value ma ma apni reset code wali value us ka equall kr di
user.resetpasswordcode = resetpasswordcode
user.save()


const token = jwt.sign({ resetpasswordcode }, config.SECERT_KEY , { expiresIn: '1h' })

  // -----------------------------------------------aws-----------------------------------------------
    // config.AWSSES.sendEmail(
    //   EmailTemplate(
    //     email,
    //     `
    //    <h2>Forget Password Link </h2>
    //    <h3>Click on the link below </h3>
    //    <a href="${config.CLIENT_URL}/auth/acessaccount/${token}">Verify your account</a>
    //    `
    //   ),

    //   (err, data) => {
    //     if (err) {
    //       console.log("Error sending email:", err);
    //       return res.json({
    //         error: "somethine went wrong", ",
    //       });
    //     } else {
    //       console.log("Email sent successfully:", data);
    //       return res.json({
    //         success: true,
    //         data,
    //         message:
    //           "Please check your email for the Forget passsword  link",
    //       });
        // }
      // }
    // );
// --------------------------just for backend check remove after aws proceesss-----------------------




res.json({
  success: true,
  message: "Reset password code sent to your email",
  token,
})
} catch (error) {
  res.json({
    success: false,
    error: "Failed to reset password",
    message:error.message,
})
}
}
export const accessAccount =async (req, res) => {
         
try {
const {resetpasswordcode} = jwt.verify( req.body.token,config.SECERT_KEY,)
  const user = await usermodel.findOneAndUpdate(
    {resetpasswordcode},    /* ya per hm resetpasword ki madad sa user nikal rha ha    */
    {resetpasswordcode:""}   /* find one uper kr liya ha update krna ki bari ha        */
  )
  if (!user) {
    return res.json({ error: "Invalid reset password code" });

  }
  UserandresponeToken(req,res,user)
} 
catch (err){
  res.json({
    success: false,
    error: "Token expired or invalid",
    message:err.message,
  })
}
}
export const resetpassword =async (req, res) => {
 try {
  const { password,token } = req.body;
  const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
if (!regex.test(password)) {
  return res.json({
    success: false,
    error:"Password should contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
  });
}
  const {id}  = jwt.verify(token,config.SECERT_KEY,{ expiresIn: '1h' })
  const user =await usermodel.findById(id)
  if(!user){
    return res.json({ error: "User not found" });
  }
  const newPassword = await hashedPassword(password);
  user.password = newPassword;
  await user.save()
  UserandresponeToken(req,res,user)
 } catch (error) {
   res.json({ error: "Token expired or invalid",
    message:error.message,
   })
 }
}


// protected Routes

export const fetchedloggedIn = async (req, res,) =>{
 

  try {
    const User = await usermodel.findById(req.user.id)
    console.log(User)
    if(!User)
    {
      return res.json({error:"you must be logged In",
        data:User
      })
    }
    User.password = undefined;
    User.resetpasswordcode = undefined;
    res.json({success:true,data:User})
  } catch (error) {
    res.json({error:"Failed to fetch user"})
    
  }

}

export const updateprofile =async (req,res)=>{

 try {
  const user = await usermodel.findByIdAndUpdate(req.user.id,req.body,{new :true});
  user.password =undefined;
  user.resetpasswordcode = undefined;
  res.send(user)
 } catch (error) {
  res.json({ error: "Failed to update user" });
 }
}

export const uploadimage =async (req,res)=>{


  try {
   const user = await usermodel.findById(req.user.id);
   console.log(req.file.filename)
   user.profilepic = "/uploads/" + req.file.filename
   await user.save();
   user.password =undefined;
   user.resetpasswordcode = undefined;
   res.send(user)
  } catch (error) {
   res.json({
     error: "Failed to update user",
     message:error.message
    });
  }
}

export const deleteimg =async (req, res) => {
  try {
   const user = await usermodel.findById(req.user.id);
   user.profilepic = "";
   await user.save();
   user.password =undefined;
   user.resetpasswordcode = undefined;
   res.send(user)
  } catch (error) {
   res.json({
     error: "Failed to delete user image",
     message:error.message
    });
  }
}

export const changePassword =async (req,res)=>{
 try {
  const{ oldpassword,changePassword } = req.body;
  const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
if (!regex.test(changePassword)) {
  return res.json({
    success: false,
    error:"Password should contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
  });
}

  const User = await usermodel.findById(req.user.id)
  console.log(User)
  if (!User) {
    return res.json({ error: "User not found" });
  }
  const match = await bcrypt.compare(oldpassword, User.password);
  if (!match) {
    return res.json({ error: "Old password does not match" });
  }
  const passsword = await hashedPassword(changePassword);
  User.password  =passsword ;
  console.log(passsword)
  await User.save();
  UserandresponeToken(req, res, User);
 } catch (error) {
  res.json({ error: "Failed to change password" 
    , errorMessage: error.message
  });
  
 }
  

  
}
