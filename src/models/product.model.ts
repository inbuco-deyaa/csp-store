/**
 * Created by : Deyaa
 *
 *
 */
 import mongoose from "mongoose";
 import { photoFileSchema } from "../utils/schemas.helper";
 
 const ProductSchema: mongoose.Schema = new mongoose.Schema({
  UPC: {
    type: String,
    required: true,
    unique:true
  },
  SKU: {
    type: String,
    required: true,
    unique:true,
  },
  englishTitle: {
    type: String,
    required: true,
  },
  arabicTitle: {
    type: String,
    required: true,
  },
  englishShortDesc: {
    type: String,
    required: true,
  },
  arabicShortDesc: {
    type: String,
    required: true,
  },
  englishLongDesc: {
    type: String,
    required: true,
  },
  arabicLongDesc: {
    type: String,
    required: true,
  },
  photo: {
    type: [photoFileSchema],
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
  subCategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
  stocked: {
    type: Number,
    required: true
    
  },
  price: {
    type: String,
    required: true
    
  }
 });
 
 // Add timestamp
 UserSchema.plugin(require("mongoose-delete"));
 UserSchema.plugin(require("mongoose-timestamp"));
 
 // indexing (all string fields)
 UserSchema.index({ "$**": "text" });
 
 const Product = mongoose.model("product", ProductSchema);
 export default Product;
 