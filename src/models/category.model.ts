/**
 * Created by : Deyaa 
 * 
 * 
 */

 import mongoose from "mongoose";

 const CategorySchema = new mongoose.Schema({
    Categorytype: {
        type: String,
        required: true,
        enum: ['category' ,'subCategory' ]
    },
    categoryName : String,
    subCategoryName : String


 })

 const Category = mongoose.model('category', CategorySchema);
export default Category;