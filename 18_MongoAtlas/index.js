import { MongoClient } from "mongodb"

// GoogleTest password of mongoAtlas WebAbhayVerma newpassword-abhay1234

// const url = "mongodb+srv://WebAbhayVerma:abhay1234@cluster0.iznwzd1.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster0"
 const url="mongodb+srv://WebAbhayVerma:abhay1234@cluster0.iznwzd1.mongodb.net/?appName=Cluster0"
const database="school"
const collection="student"
const client=new MongoClient(url)
client.connect().then(()=>{
    console.log("....connect.....");
    
})

async function dbConnection(){
    const db=client.db(database)
    const collectResult=db.collection(collection)
    const result=await collectResult.find().toArray()
    console.log(result);
    
}

dbConnection()

// import { MongoClient } from "mongodb"

// const url = "mongodb://WebAbhayVerma:abhay1234@cluster0-shard-00-00.iznwzd1.mongodb.net:27017,cluster0-shard-00-01.iznwzd1.mongodb.net:27017,cluster0-shard-00-02.iznwzd1.mongodb.net:27017/school?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority"

// const client = new MongoClient(url)

// async function dbConnection(){

//     try{

//         await client.connect()

//         console.log("✅ Connected Successfully")

//         const result = await client.db("school").collection("student").find().toArray()

//         console.log(result)

//     }

//     catch(err){

//         console.log(err)

//     }

// }

// dbConnection()