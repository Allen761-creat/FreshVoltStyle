import express from 'express';
const app = express();
import * as config from  "./Configuration/config.js";
const port = config.PORT || 3000;






// --------------------------------IMPORT IN MIDDLEWARES------------------------------------
// cors is for api package to use in browser
import cors from 'cors';
app.use(cors());
import morgan from 'morgan';
app.use(morgan("dev"));
// -------------------------------------postman body parse hamesha midles wrae ka pehla ayaga-------------------------------------

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());




// ----------------------------------------Rotues Middleware --------------------------------



import productrouter from './Router/productrouter.js'
app.use("/api/v1/products", productrouter);
import userrouter from './Router/userroute.js';
app.use('/api/v1/users' , userrouter);
import adminrouter from './Router/adminroute.js';
app.use('/api/v1/admin' , adminrouter);
import orderrouter from './Router/orderroute.js';
app.use('/api/v1/orders' , orderrouter);
// import striperouter from './Router/striperoute.js';
// app.use('/api/v1/checkoutsession' , striperouter);

//------------------------------------- Multer middleware for file upload ------------------------------------


import path from 'path';
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ---------------------------------------TEST API-------------------------------------------------

app.get('/',(req,res)=>{
    res.status(200).json({
        message: "Welcome to Saman's API"
    })
})


// ---------------------------------------express port set-------------------------------------------------
app.listen(port,()=>{
    console.log(`Express Server is running on port ${port}`);
});



// ---------------------------------------- dbconfiguration --------------------------------------------
import DBConfig from './Configuration/dbconfig.js';
DBConfig()


