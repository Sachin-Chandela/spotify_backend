import express from 'express'


import { Router } from 'express'
// import register_user from '../controllers/auth.controller.js';
// import signIn_user from '../controllers/auth.controller.js';

import { signIn_user,register_user } from '../controllers/auth.controller.js';
const router=Router();


router.post('/register',register_user);
router.post('/login',signIn_user);




export default router;