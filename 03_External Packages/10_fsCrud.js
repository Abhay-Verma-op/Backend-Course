const fs = require("fs"); // Create the file

// fs.writeFileSync('files/banana.txt',"This is a fruit")

// fs.unlinkSync('files/banana.txt')  // To delete the files from txt

// const data=fs.readFileSync("files/apple.txt" ,'utf-8')

// console.log(data)

// fs.appendFileSync('files/apple.txt', " and this is good for health") // Update the file

//  const data=fs.readFileSync("files/apple.txt" ,'utf-8') // Read the file

//  console.log(data)

/*1️⃣ process
process is a global object in Node.js.
It gives information about the current running program.
2️⃣ process.argv
argv = argument vector
It is an array that stores command line arguments.*/

// console.log(process.argv[2])

const operation=process.argv[2]
if(operation=="write"){
    const name=process.argv[3]
    const content=process.argv[4]
    const fullname='files/'+name+".txt"
    // console.log(operation,name,content)
    fs.writeFileSync(fullname,content)

}
else if(operation=="read"){
    const name=process.argv[3]
    // const content=process.argv[4]
    const fullname='files/'+name+".txt"
    // console.log(operation,name,content)
   const data= fs.readFileSync(fullname, 'utf-8')
   console.log(data);
   

}

else if(operation=="update"){
    const name=process.argv[3]
    const content=process.argv[4]
    const fullname='files/'+ name + ".txt"
    // console.log(operation,name,content)
   const data= fs.appendFileSync(fullname, content)
   console.log(data);
   

}
else if(operation=="delete"){
    const name=process.argv[3]
    // const content=process.argv[4]
    const fullname='files/'+ name + ".txt"
    // console.log(operation,name,content)
 fs.unlinkSync(fullname)
//    console.log(data);
   

}

else{
    console.log("Operation not found")
}