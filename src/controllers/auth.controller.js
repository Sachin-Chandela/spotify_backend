import { Router } from "express";
// import mongoose from "mongoose";

import user_model from "../models/user.auth.model.js";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// const router=Router();



// router.use(express.json());

// make here the function the async  which takes the req,res and return the result

export async function register_user(req,res){

    const {username,email,password,role='user'}=req.body;

    console.log(username,email,password,role);

    // check if username or email exists then return the false

    const isuserexists=await user_model.findOne({
        $or:[
            {username},
            {email},
        ]
    });

    if(isuserexists){
        return res.status(409).json({
            success:false,
            message:"User Already Exists",
        })
    }

    try{

        // console.log("hello");

        const hash=await bcrypt.hash(password,10);
        // console.log("hello");
        const new_user=await user_model.create({
            username,
            email,
            password:hash,
            role
        })
        // console.log("hello");
        res.status(201).json({
            success:true,
            message:"user craeted",
            new_user
        })

        // token will be generated at the time of the login only
    }
    catch(error){
        return res.status(409).json({
            success:false,
            message:"Enter Valid Password"
        })
    }

    // generate the token now
}


export async function signIn_user(req,res){

    const { username, email, password, role = "user" } = req.body;

    // user can enter the username or the email only i need to check on the both

    const user=await user_model.findOne({
        $or:[
            {username},
            {email}
        ]
    })


    if(!user){
        return res.status(401).json({
            success:false,
            message:"User Not Exists"
        })
    }

    // console.log("user found")
    // console.log("body:-",req.body);
    const isValidPass=await bcrypt.compare(password,user.password);

    // console.log("I am IN");
    if(!isValidPass){

        return res.status(401).json({
          success: false,
          message: "Incorrect Credentials",
        });

    }

    // console.log("hello");

    const token=jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET)


    // console.log("hello");

    res.cookie("token",token);

    return res.status(201).json({
        success:true,
        message:"Sign In Complete"
    })



}



// module.exports={register_user,signIn_user};

// export default register_user;