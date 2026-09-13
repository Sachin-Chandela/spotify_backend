import mongoose, { Schema } from "mongoose";



const user_schema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    minLength: 6,
    required: true,
  },

  role:{
    type:String,
    enum:['user','artist'],
    default:'user',
  }

});

const user_model=mongoose.model("user_auth",user_schema);

export default user_model;