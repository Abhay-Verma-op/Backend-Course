// import { MongoClient } from "mongodb"

// // GoogleTest password of mongoAtlas WebAbhayVerma newpassword-abhay1234

// const url = "mongodb+srv://WebAbhayVerma:abhay1234@cluster0.iznwzd1.mongodb.net/?appName=Cluster0"
// // const url ="mongodb://WebAbhayVerma:abhay1234@cluster0-shard-00-00.iznwzd1.mongodb.net:27017,cluster0-shard-00-01.iznwzd1.mongodb.net:27017,cluster0-shard-00-02.iznwzd1.mongodb.net:27017/school?ssl=true&replicaSet=atlas-jp9abc-shard-0&authSource=admin&retryWrites=true&w=majority"
//  console.log(url)
// const database="school"
// const collection="student"
// const client=new MongoClient(url)
// client.connect().then(()=>{
//     console.log("....connect.....");
    
// })

// async function dbConnection(){
//     const db=client.db(database)
//     const collectResult=db.collection(collection)
//     const result=await collectResult.find().toArray()
//     console.log(result);
    
// }

// dbConnection()