import mongoose from 'mongoose'
import { MONGODB_CLOUD } from './config.js';


const DBConfig =()=>{
mongoose.connect(MONGODB_CLOUD)
.then((conn)=>{
console.log(`EXPRESS is Connected to ${conn.connection.host}`);
})
.catch((err)=>{
    console.log('Error connecting to mongodb' +err.message);
})
}
export default DBConfig
