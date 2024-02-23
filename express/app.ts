import express, { Request, Response, json } from 'express'
import fs from 'fs'

const PORT = 5000;
const app = express();

app.use([express.json(),express.text()]);

app.get('/',(req:Request,res:Response)=>{
    const data = fs.readFileSync('text.txt')
    res.send(data);
})

app.post('/',(req:Request,res:Response)=>{
    const req_data = req.body
    fs.writeFileSync("text.txt",req_data)
    res.send('file created!!')
})

app.put('/',(req:Request,res:Response)=>{
    const req_data = `\ ${req.body}`
    fs.appendFileSync("text.txt",req_data)
    res.send('file updated')
})


app.post('/obj',(req:Request,res:Response)=>{
    const req_json = req.body
    const json_to_string = JSON.stringify(req_json)
    fs.writeFileSync("test.json",json_to_string)
    res.send('file created!!')
})

app.put('/obj',(req:Request,res:Response)=>{
    const req_js_obj = req.body
    const db_js_obj = JSON.parse(fs.readFileSync("test.json").toString())
    const new_js_obj = [...db_js_obj,req_js_obj]
    const new_obj_string = JSON.stringify(new_js_obj)
    fs.writeFileSync("test.json",new_obj_string)
    res.send("file updated !!")
})

app.delete('/',(req:Request,res:Response)=>{
    const {name} = req.query
    fs.unlink(name as string,(error)=>{
        console.log(error);
    })
    res.send(`This method is ${req.method}`)
})

app.listen(PORT,()=>`server is listenning on ${PORT}`);