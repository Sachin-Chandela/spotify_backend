import jwt from "jsonwebtoken"

import album_model from "../models/album.model.js"

export async function create_album(req,res){


    const token=req.cookies.token;

    if(!token){
        console.log("No Token");
        
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }


    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        if(decoded.role!='artist'){
            console.log("you are not artist");
            return res.status(401).json({
                success:false,
                message:"Unauthorizes"
            })
        }

        const {title,musics}=req.body;


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
    catch(err){

        return res.status(401).json({
          success: false,
          message: "Something went wrong",
        });

    }

}


