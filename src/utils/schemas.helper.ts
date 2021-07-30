/**
 * Created by : Deyaa 
 *  
 * 
 */

 import mongoose from 'mongoose';

 const Schema = mongoose.Schema;
 
 const photoFileSchema = new Schema({
     filename: String, // i need to have the file name for server uses 
     path: String, // i need to have the file full path 
     size: Number, // the physical size on the desk 
     scalable: Boolean, // is it scaled 
     width: Number, // what is width 
     height:Number, // what is height 
     thumbnail: Boolean // if it thumbnail 
 }, { _id: false })
 
 
 
 export { photoFileSchema }