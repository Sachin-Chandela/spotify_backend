import mongoose, { Schema } from "mongoose";





const album_schema=new Schema({
    title:{
        type:"String",
        required:true,
    },
    
    musics:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"music",
    }],

    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user_auth",
        required:true,
    }
})


const album_model=mongoose.model("album",album_schema);


export default album_model;