const express = require('express');
const {register, login, myProfile, logout}= require('../controller/userController');
const userRouter = express.Router();
const auth = require('../middleware/auth');

userRouter.post('/register', register);
userRouter.post('/login',login);
// authenticated routes

userRouter.get('/myProfile',auth.isAuthenticated , myProfile);
userRouter.post('/logout',auth.isAuthenticated , logout);

module.exports = userRouter;