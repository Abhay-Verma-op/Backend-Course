import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const dbName="school"

const url="mongodb://localhost:27017"
const client =new MongoClient(url)

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')
client.connect().then((connection)=>{
    const db=connection.db(dbName)
    app.get("/api",async(req,resp)=>{
        const collection=db.collection("students")
        const students=await collection.find().toArray()
        resp.send(students)
    })
    app.get("/ui",async(req,resp)=>{
        const collection=db.collection("students")
        const result=await collection.find().toArray()
        resp.render('students',{result})
    })

    app.get('/add',(req,resp)=>{
        resp.render('user-added')
    })
    app.post('/user-added',async(req,resp)=>{
        // console.log(req.body);
        const collection=db.collection("students")

        const result=await collection.insertOne(req.body)
        console.log(result);
        
        resp.send("Data Saved")
    })
    app.post('/add-student-api',async(req,resp)=>{
        console.log(req.body);
        const {name,age,email}=req.body;
        if(!name || !age || !email){
            resp.send({message:"operation failed",success:false})
            return false
        }
         const collection=db.collection("students")
        const result=await collection.insertOne(req.body)
        // resp.send({"message":"success"})
        // resp.send({"message":req.body})
        resp.send({message:"Data stored",success:true , result:result})
    })
    app.delete('/delete/:id',async(req,resp)=>{
        console.log(req.params.id)
        const collection=db.collection('students')
        const result=await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.send({
                message:"Student Data Deleted",
                success:true
            })
         } else{
            resp.send({
                message:"Student Data not Deleted try afater sometime",
                success:false
            })
        }
        // resp.send("working")
    })
    app.get('/ui/delete/:id',async(req,resp)=>{
        console.log(req.params.id)
        const collection=db.collection('students')
        const result=await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.send("<h1>Student Record Deleted</h1>")

         } else{
         resp.send("<h1>Student Record not Deleted</h1>")
        }
        // resp.send("working")
    })

    app.get('/ui/students/:id',async(req,resp)=>{
        const id=req.params.id
        console.log(id);
        const collection=db.collection('students')
        const result=await collection.findOne({_id: new ObjectId(req.params.id)})
        resp.render( 'update-student',{result})
    })
    app.get('/students/:id',async(req,resp)=>{
        const id=req.params.id
        console.log(id);
        const collection=db.collection('students')
        const result=await collection.findOne({_id: new ObjectId(req.params.id)})
        resp.send({
            message:"data fetched",
            success:true,
            result:result
        })
    })
})

   
app.listen(3200)