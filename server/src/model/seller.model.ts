import { boolean } from "joi";
import mongoose, { Schema } from "mongoose";

const SellerSchema = new mongoose.Schema({
  seller_account: {
    type: Map,
    of: new Schema({
      shop_name: {
        type: String,
        trim: true,
        required: true,
      },
      business_category: {
        type: String,
        enum: ["INDIVIDUAL", "BUSINESS_ENTITY", "COMPANY"],
      },
      AM_first_and_last_name: {
        type: String,
        trim: true,
        required: true,
      },
      AM_phone_number: {
        type: String,
        required: true,
      },
      AM_additional_phone_number: {
        type: String,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    }),
    required: true
  },
  
});


// IF business information is not filled on log in, return 
