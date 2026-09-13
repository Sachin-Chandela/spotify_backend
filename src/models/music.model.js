import mongoose, { Schema } from "mongoose";


const music_schema=new Schema({
    uri:{
        type:String,
        required:true,
        unique:true
    },

    title:{
        type:String,
        required:true
    },

    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user_auth",
        required:true
    }



})


const music_model=mongoose.model("music",music_schema);


export default(music_model);


