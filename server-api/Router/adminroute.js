import express from 'express'
import { addproducts, blockandunblock, deleteProduct, deleteUser, fetchuserbyid, fetchusers } from '../Controllers/admin.js'
import { CheckAdmin, requiredLoggedIn } from '../Middlewares/AuthMiddelware.js'
const router= express.Router()
import {upload} from '../Configuration/multerconfig.js'
// requiredLoggedIn,CheckAdmin,
router.get('/users',requiredLoggedIn,CheckAdmin ,fetchusers)
router.put('/status',requiredLoggedIn,CheckAdmin,blockandunblock)
router.post('/deleteuser',requiredLoggedIn,CheckAdmin,deleteUser)
router.get('/user/:id',requiredLoggedIn,CheckAdmin,fetchuserbyid)
router.post('/deleteproduct',requiredLoggedIn,CheckAdmin,deleteProduct)
router.post('/addproduct',upload.array('image', 4),requiredLoggedIn,CheckAdmin,addproducts)

export default router