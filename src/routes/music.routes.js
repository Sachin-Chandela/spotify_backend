import { Router } from "express";
import express from 'express';

import create_music from "../controllers/music.controller.js";

import multer from "multer";


const router =Router();



router.use(express.json());

const upload=multer({
    storage:multer.memoryStorage()
})



router.post('/upload',upload.single("music"),create_music);



export default router;

