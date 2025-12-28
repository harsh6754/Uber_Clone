const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req,res,next)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {fullname,email,password} = req.body;
        const isUserExist = await userModel.findOne({email});
        if(isUserExist){
            return res.status(400).json({error:'User with this email already exists'});
        }
        
        const hashedPassword = await userModel.hashPassword(password);
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });
        
        const token = user.generateAuthToken();
        res.status(200).json({token,user});
    } catch(err) {
        res.status(500).json({error: err.message});
    }
}

module.exports.loginUser = async(req,res,next)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {email,password} = req.body;
        const user = await userModel.findOne({email}).select('+password');
        if(!user){
            return res.status(501).json({error:'Invalid email and password'});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({error:'Invalid email and password'});
        }
        const token = user.generateAuthToken();
        res.cookie('token',token);
        res.status(200).json({token,user});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({token});
    res.status(200).json({message: 'Logged out successfully'});
}