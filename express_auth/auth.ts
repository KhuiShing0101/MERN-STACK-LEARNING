import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const checkAuth = (req:Request,res:Response,next:NextFunction) =>{
    console.log(req.cookies);
    const token = req.cookies.token;

    if(!token){
        return res.status(401).redirect("/sign-in")
    }

    jwt.verify(token,"secret_key",(err)=>{
        if(err){
            return res.status(401).send("Unauthorized");
        }

        next();
    })
}

export default checkAuth;