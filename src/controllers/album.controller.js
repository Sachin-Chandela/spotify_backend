import jwt from "jsonwebtoken"

import album_model from "../models/album.model.js"

export async function create_album(req,res){


    

    const {title,musics}=req.body;
    const decoded=req.user;


    const new_album=await album_model.create({
        title:title,
        musics:musics,
        artist:decoded.id
    })


    res.status(201).json({
        success:true,
        message:"album created successfully",
        album:new_album
    })

}


