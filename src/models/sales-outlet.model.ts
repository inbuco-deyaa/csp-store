/**
 * Created by : Deyaa 
 * 
 * 
 */

 import mongoose from "mongoose";

 const SalseOutletSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
        trim: true,
      },
      mobileNumber: {
        type: String,
        unique: true,
        index: true,
      }

 });
 


const SalseOutlet= mongoose.model('salseOutlet', SalseOutletSchema);
export default SalseOutlet;