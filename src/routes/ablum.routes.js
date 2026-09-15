import { Router } from "express";

import express from "express"
import { create_album } from "../controllers/album.controller.js";
import { authArtist } from "../middlewares/auth.Artist.middleware.js";


const router=Router();


router.use(express.json());


router.post('/create',authArtist,create_album);

export default router;