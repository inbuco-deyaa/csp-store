/**
 * Created by : Deyaa 
 * 
 * 
 */

 import mongoose from "mongoose";

 const OrderSchema = new mongoose.Schema({
      products: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        }],
        salesTransaction: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "salesTransaction",
        }, 
        barcodeOrder : String,
        total:String

 });
 


const Order= mongoose.model('order', OrderSchema);
export default Order;