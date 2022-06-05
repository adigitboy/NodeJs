const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/'){
        res.write("Hello there hi");
        res.end();
    }
    if(req.url==='/api/course'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(300);
console.log("connecting");





