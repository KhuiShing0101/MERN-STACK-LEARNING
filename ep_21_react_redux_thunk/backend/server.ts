import express, { Request, Response } from 'express'
import fs from 'fs'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

interface Menu{
    name:string
    price:number
}

const menus:Menu[]= [];

let users:{email:string;password:string}[] =[];

    try{
        const userData = fs.readFileSync("./data/users.json","utf-8")
        users = JSON.parse(userData);
    }catch(error){
        users = []
    }

app.post('/register',(req:Request,res:Response)=>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).send("email and password are required");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);

    const newUser = {email,password:hash}
    users.push(newUser);

    fs.writeFileSync("./data/users.json",JSON.stringify(users,null,2));

    res.status(201).send({email});
})

app.post('/login',(req:Request,res:Response)=>{
    const {email,password} = req.body
        if(!email || !password){
            return res.status(400).send('please fill email and password')
        }

    const user = users.find((user)=>user.email === email);
        if(!user){
            return res.status(404).send('user not found')
        }

    const password_match = bcrypt.compareSync(password, user.password);
        if(!password_match){
            return res.status(401).send('Invalid credentials')
        }

    const token = jwt.sign({email},"secret_key",{expiresIn:"1h"})
    console.log(token);
    res.status(201).send({token}) 
    // res.cookie("token",token);
    // res.redirect("/");
})

app.post('/menu',(req:Request,res:Response)=>{
    const {name,price} = req.body
    if(!name || price === "undefied"){
        return res.status(400).send("please fill fill the name and price");
    }
    menus.push({name,price});
    res.status(200).send({menus})
})

app.listen(PORT,()=>console.log(`Server is listing on ${PORT}`))