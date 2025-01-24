import express from 'express'
import *as prod from '../Controllers/productcontroller.js'
const router= express.Router()



router.route('/').get(prod.fetchproducts)
router.get('/:id', prod.fetchproductBYID)
export default router;