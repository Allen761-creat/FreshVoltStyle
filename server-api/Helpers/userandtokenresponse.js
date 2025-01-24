import jwt from "jsonwebtoken";
import * as config from "../Configuration/config.js";
import usermodel from "../Models/authenticationmodel.js";

const UserandresponeToken =  (req, res, user) => {
  try {
    const token = jwt.sign({ id: user._id }, config.SECERT_KEY, {
      expiresIn: "1h",
    });
    const refreshtoken = jwt.sign({ id: user._id }, config.SECERT_KEY , {
      expiresIn: "1w",
    });
    user.password = undefined;
    user.resetpassword = undefined;
    res.json({
     
      user ,
      token,
      refreshtoken,
      message:'you are logged in successfully',
     
     
  });
  } catch (error) {
    res.json({
      error,
      success: false,
      message: "Failed to authenticate user",
    });
  }
};

export default UserandresponeToken;