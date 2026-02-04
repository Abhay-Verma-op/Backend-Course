const http = require("http");
http.createServer((request,response)=>{
    response.write("<h1>This is abhay kumar</h1>")
    response.end("Hello");

}).listen(4800);
