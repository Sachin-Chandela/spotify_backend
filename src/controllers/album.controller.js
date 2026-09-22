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



export async function view_album(req,res){

    const artist=req.user;

    try{

        const albums=await album_model.find({artist:artist.id}).populate("musics");

        return res.status(200).json({
            success:true,
            message:"all albums found",
            ablums:albums
        })

    }
    catch(err){
        return res.status(401).json({
          success: false,
          message: "Error"
        }); 
    }
    




}





