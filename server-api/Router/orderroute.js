import express from 'express'
import  { deleteOrder, fetchalldOrders, fetchdeliverdOrders, fetchorderBYId, setDelivered } from '../Controllers/orders.js'
const router= express.Router()
import { CheckAdmin, requiredLoggedIn } from '../Middlewares/AuthMiddelware.js'

router.get("/:id",requiredLoggedIn)
router.get("/deliverd",requiredLoggedIn,CheckAdmin,fetchdeliverdOrders)
router.get("/pending",requiredLoggedIn,CheckAdmin,fetchalldOrders)
router.put("/",requiredLoggedIn,CheckAdmin,setDelivered)
router.delete("/:id",requiredLoggedIn,CheckAdmin,deleteOrder)
router.get("/singleorder/:id",requiredLoggedIn,CheckAdmin,fetchorderBYId)

export default router;

