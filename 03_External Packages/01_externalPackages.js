const http = require("http");
http.createServer((request,response)=>{
    response.write("<h1> hii This is also the  a abhay kumar</h1>")
    response.end("Hello boy jnjnj kkk");

}).listen(4800);


// const http = require("http");  not used this making another server in same file 
http.createServer((request,response)=>{
    response.write("<h1> Other Server is okay</h1>")
    response.end("Hello boy jnjnj kkk");

}).listen(5800);
