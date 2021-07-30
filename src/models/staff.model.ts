/**
 * Created by : Deyaa 
 * 
 * 
 */

 import mongoose from "mongoose";

 const StaffSchema = new mongoose.Schema({
    englishFullName: {
        type: String,
        required: true,
        trim: true,
      },
      arabicFullName: {
        type: String,
        trim: true,
      },
      primaryEmail: {
        type: String,
        unique: true,
        match: /.+\@.+\..+/,
        lowercase: true,
        trim: true,
      },
      mobileNumber: {
        type: String,
        unique: true,
        index: true,
      },
      deleted : false,
      openedSystem: [Date],
      closedSystem: [Date]

 });
 StaffSchema.path("primaryEmail").validate(async (primaryEmail) => {
    const emailCount = await mongoose.models.user.countDocuments({
      primaryEmail,
    });
    return !emailCount;
  }, "Email already exists");
  
  // Check if Email has the right syntax
  StaffSchema.path("primaryEmail").validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
  }, "The e-mail field cannot be empty || this not Email Format.");



 const Staff= mongoose.model('staff', StaffSchema);
export default Staff;