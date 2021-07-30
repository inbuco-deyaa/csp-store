/**
 * Created by : Deyaa 
 * 
 * 
 */

 import mongoose from "mongoose";

 const SalesTransactionSchema = new mongoose.Schema({
      customer: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "customer",
        },
        salesOutlet: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "salesOutlet",
        },
        staff: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "staff",
        },
        transactionDataTime:Date


 });
 


const SalseOutlet= mongoose.model('SalesTransaction', SalesTransactionSchema);
export default SalseOutlet;