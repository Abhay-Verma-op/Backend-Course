import express from "express";
import { MongoClient } from "mongodb";

const dbName="school"

const url="mongodb://localhost:27017"
const client =new MongoClient(url)

// async function dbConnection(){
//    await client.connect()
//    const db=client.db(dbName);
//    const collection=db.collection('students')
//    const result= await collection.find().toArray()

// //    Data on terminal

//    console.log(result);
   
// }
// dbConnection()
const app=express()
app.set('view engine','ejs')
// Data On UI

app.get('/',async(req,resp)=>{
     await client.connect()
   const db=client.db(dbName);
   const collection=db.collection('students')
   const result= await collection.find().toArray()

//    Data on terminal

   console.log(result);
   
   resp.render('students',{result})
})

app.listen(3200)