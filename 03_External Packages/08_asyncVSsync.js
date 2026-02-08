
// console.log("apple1")
// setTimeout(()=>{
//     console.log("apple2")

// },3000);

// console.log("apple3")
// let a=20;
// let b=10

// setTimeout(()=>{
// a=100
// console.log(a+b)
// },2000)
// console.log(a+b)

// const { error } = require('console')
// const fs=require('fs')

// fs.readFile('text/peter.txt','utf-8',(error,data)=>{
    //     if(error){
        //         return false
        //     }
        //     console.log(data)
        // })
        // console.log("End script")


const fs=require('fs')
const data =fs.readFileSync("text/peter.txt",'utf-8',)
    console.log(data);
    
    console.log("end script")
