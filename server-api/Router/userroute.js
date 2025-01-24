import express from 'express'
import { accessAccount, changePassword, deleteimg, fetchedloggedIn,  forgetpassword, login, presignup, resetpassword, signup, updateprofile, uploadimage,   } from '../Controllers/usercontroller.js';
import { requiredLoggedIn } from '../Middlewares/AuthMiddelware.js';
import {upload} from '../Configuration/multerconfig.js'
const router =express.Router();



router.post("/presignup", presignup)
router.post("/signup",signup)
router.post("/login",login)
router.post("/forgetpassword",forgetpassword)
router.post("/acessaccount",accessAccount)
router.post("/resetpassword",resetpassword)


// protected Routes
router.get("/fetchloggedIn",requiredLoggedIn ,fetchedloggedIn)
// router.get("/fetchedprofile/:username",fetchprofile)
router.post("/changepassword",requiredLoggedIn,changePassword)
router.put("/updateprofile",requiredLoggedIn,updateprofile)
router.post("/uploadImage",upload.single('file'), requiredLoggedIn,uploadimage)
router.delete("/deleteimg", requiredLoggedIn,deleteimg)





export default router;