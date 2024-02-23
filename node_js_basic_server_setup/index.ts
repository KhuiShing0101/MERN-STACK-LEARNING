import fs from "fs";
import http from "http";

const server = http.createServer((req,res)=>{
    // console.log("hello",req.method);
    const jsObj = {id:"1",name:"2"};
    const data = fs.readFileSync("index.html");
    res.writeHead(233,"ook",{"content-type":"application/JSON"});
    res.write(JSON.stringify(jsObj));
    res.end();
})

server.listen(3000,()=>console.log('restarted server'))