// const http=require('http')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"content-type" : "text/html"})
//     console.log(req.url);
//     if(req.url=='/'){

//         resp.write(`
//             <form action="/submit" method="post">
//             <input type="text" placeholder=" enter name " name="name"/>
//             <input type="email" placeholder=" enter email " name="email"/>
//             <button>Submit</button>
//             </form>
//             `)
//             }
//             else if(req.url=='/submit'){
//                 resp.write("<h1>Data Submitted</h1>")
//             }
//     resp.end()
// }).listen(3200)

const http =require('http')
const fs=require('fs')
const queryString=require('querystring')
// const { error } = require('console')


http.createServer((req,resp)=>{
fs.readFile('html/form.html', 'utf-8',(error,data)=>{
    if(error){
        resp.writeHead(500,{"content-type":"text/plain"})
        resp.end('Internal server error')
        return;
        
    }
    
    resp.writeHead(200,{"content-type":"text/html"})

 if(req.url=='/'){

        resp.write(data)
            }
            else if(req.url=='/submit'){
                let databody=[]
                req.on('data',(chunk)=>{
                    databody.push(chunk);
                })
                req.on('end',()=>{
                    let rawdata=Buffer.concat(databody).toString()
                    let readableData=queryString.parse(rawdata)
                    // console.log(readableData)
                    // resp.write(readableData) not works
                    let dataString="My Name is " + readableData.name + " and my email is "+ readableData.email
                    // fs.writeFileSync('text/' + readableData.name + ".txt", dataString)
                    // console.log("file created")
                //   console.log(dataString)
fs.writeFile('text/' + readableData.name + ".txt", dataString,'utf-8', (error)=>{
    if(error){
        resp.end("Internal server error")
        return false;
    }
    else{
        console.log("File Created")
    }
})
                })
              
                resp.write("<h1>Data Submitted </h1>")
            }
             
            resp.end()

})


}).listen(3500)