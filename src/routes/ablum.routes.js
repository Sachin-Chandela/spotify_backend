import { Router } from "express";

import express from "express"
import { create_album } from "../controllers/album.controller.js";


const router=Router();


router.use(express.json());


router.post('/create',create_album);

export default router;