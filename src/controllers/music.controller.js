import jwt, { decode } from 'jsonwebtoken'

import upload_file from '../services/storage.service.js';
import music_model from '../models/music.model.js';






async function create_music(req,res){
    // in req i got a file and in the body a json with the title

    // first check that does it have the token or not

    let decoded

    const token=await req.cookies.token

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }


    try{

        decoded=jwt.verify(token,process.env.JWT_SECRET);

        if(decoded.role!=='artist'){
            return res.status(401).json({
              success: false,
              message: "You don't have the access to create a music",
            });
        }

        console.log(decoded);



    }
    catch(error){
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
    }




    // 


    const {title}=req.body;
    const file=req.file;

    // we need to convert into the base64 as the imagekit accepts this only   and we use the multer so that the clean audio is in the buffer
    const result=await upload_file(file.buffer.toString('base64'))

    const new_music=await music_model.create({
        uri:result.url,
        title,
        artist:decoded.id

    })


    res.status(201).json({
        success:true,
        message:"new music created",
        music:{
            id:new_music._id,
            uri:new_music.uri,
            title:new_music.title,
            artist:new_music.artist
        }
    })








    // push this into the image kit get the uri create a new entry in the model with the url and the title and also the
    // user id

}


export default create_music;