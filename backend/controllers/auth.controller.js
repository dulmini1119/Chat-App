import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';


export const signup = async (req,res) =>{
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({message:"Password and Confirm Password does not match."});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({message:"Username already exists."});
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //profilepicture
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }else{
            res.status(400).json({message:"Something went wrong."});
        }
        

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export const login = async (req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const ifPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !ifPasswordCorrect){
            return res.status(400).json({message:"Invalid username or password."});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
            });

    } catch (error) {
      console.log("Error in login controller", error.message);
      res.status(500).json({error: "Internal Server Error"});
    }
};

export const logout = (req,res)=>{
   try {
    res.status("jwt","",{maxAge:0});
    res.status(200).json({message:"Logged out successfully."});
    
   } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({error: "Internal Server Error"});
   }
};