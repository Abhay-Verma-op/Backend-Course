export default  function login(){
    return `
        <form action="/submit" method="post">
        <input type="text" placeholder ="enter name"/>
        <input type="password" placeholder ="enter password"/>
        <button>Login</button>
        </form>
 <a href='/'>Go To home</a>

        `
}