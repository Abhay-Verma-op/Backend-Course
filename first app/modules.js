
// const fs=require('fs');
// const os =require('os');

// fs.writeFileSync("dummy.txt","Trying With Modules")

// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.cpus())

const {log}=require("console");

console.log("abc")
console.log(process.cwd());
console.log(process.pid);

log("custom log")