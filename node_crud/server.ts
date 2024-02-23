import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import { Menu,MenuCategory } from "./types";

const menus:Menu[] = [];
const menu_category:MenuCategory[] = [];

const PORT ='3000';
const server =http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        const data = fs.readFileSync("index.html");
        res.write(data);
        res.end();
    }else if(url === "/script.js"){
        const data = fs.readFileSync('script.js')
        res.write(data);
        res.end();
    }else if(url === "/menu"){
        switch(method){
            case "GET":
                const data = fs.readFileSync("index.html");
                res.write(data);
                res.end();
            break;
            case "POST":
                let menu = "";
                req.on("data",(chunk)=>{
                    menu += chunk;
                });
                req.on("end",()=>{
                    const data = JSON.parse(menu)
                    menus.push(data);
                    res.write(JSON.stringify(menus))
                    res.end();
                });
            break;
            case "PUT":
            break;
            case "DELETE":
            break;
        }
    }else if(url === "/menu_category"){
        
    }
});

server.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})