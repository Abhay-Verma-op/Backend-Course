import { userList } from "../model/userModel.js"

export function handleUsers(req,resp){
    const userData=userList()
    // console.log(userData);
    
    resp.render('user',{users:userData})
}