import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import checkAuth from './auth'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended : true}))
app.use(cookieParser())

    let users:{email:string; password:string}[] = [];

    try{
        const userData = fs.readFileSync("./data/users.json","utf-8")
        users = JSON.parse(userData);
    }catch(error){
        users = []
    }

    app.post('/sign-up',(req:Request,res:Response)=>{
        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).send("email and password are required");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);

        const new_user = {email,password:hash}
        users.push(new_user);

        fs.writeFileSync("./data/users.json",JSON.stringify(users,null,2));

        res.status(201).send('user register successfull');
    })

    app.post('/sign-in',(req:Request,res:Response)=>{
        console.log("here");
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

        const token = jwt.sign({email},"secret_key",{expiresIn:"1hr"}) 
        res.cookie("token",token);
        res.redirect("/");
    })

    app.post('/log-out',()=>{})

    app.get('/data',checkAuth,(req:Request,res:Response)=>{
        res.sendFile(__dirname + '/data/app-data.json');
    })

    app.get('/',(req:Request,res:Response)=>{
        res.sendFile(__dirname + '/index.html')
    })

app.listen(PORT,()=>console.log(`Server is listing on ${PORT}`))