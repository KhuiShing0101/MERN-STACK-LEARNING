import express,{ Request, Response } from 'express';
import cors from 'cors'

const PORT = 5000;

const app  = express();
app.use(cors());

const porducts = [
    {id:1,name:"Mac M3",price:5000},
    {id:2,name:"Mac M2",price:3000},
    {id:3,name:"Mac M1",price:2000},
]
app.get('/',(req:Request,res:Response)=>{
    res.send(porducts)
})

app.listen(PORT,()=>console.log(`server running on ${PORT}`))