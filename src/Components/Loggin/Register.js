import React, { use, useEffect, useState } from 'react'
import style from './style.module.css'
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Home } from '../Home/Home';

export const Register = () => {
const [user,setuser] = useState([])
const [visible , setvisible] = useState(false)
const [rePassword,setrepassword]=useState(false)
const [usermassege,setusermassege] = useState(false)
var arrlocal=[];
const navigate = useNavigate();
const local = localStorage.getItem('Users') 
function adduser  (){
    // check if users exist in local 
    if( local){  
        arrlocal = JSON.parse(local)
        const filtered = arrlocal.filter((users) =>
            users.email.toLowerCase().includes(user.email.toLowerCase()));
        if(filtered.length>0){
            setusermassege(true)
            console.log(filtered)
            return false;
        }
    }

    arrlocal.push(user)
    localStorage.setItem('Users',JSON.stringify(arrlocal))
    return true;
}


let valueChange = (e)=>{
let {name , value} = e.target

setuser((x)=> {return{...x, [name] : value}} )
}
// *********\\
function displaySubmit(e){
e.preventDefault();
if (use.email !== JSON.parse(local)){
if(user.Password === user.rePassword){
var added=adduser();
if(added)
handleClick()

}else{
    setrepassword(true)
}}
else {
    alert("User is Existing")
}
}

const handleClick = () => {
    navigate("/");}


return (<>
    <nav><div className={style.navbar}><i className="fa-solid fa-plane mainc"></i>my dream place</div></nav>
    <main>
    <div className={style.display} >
        <h1>Register</h1>
    <form onSubmit={displaySubmit} >
        <div>
            <label htmlFor='email'>Email address</label>
            <input required id='email' type='email' name='email' onChange={valueChange} />
            <div style={{display: usermassege? 'block' : 'none' }}><p className='warning'>User already exist</p></div>
        </div>
        
        <div>
            <label htmlFor='Password'>Password</label>
            <input id='Password' required type={visible? 'text ' : 'Password'} name='Password' onChange={valueChange} />
            <FaEye className={style.faeye} onClick={()=>setvisible(!visible)}/>
        </div>
        <div>
            <label htmlFor='rePassword'>Confirm password</label>
            <input id='rePassword' required type={visible? 'text ' : 'Password'} name='rePassword' onChange={valueChange} />
            <FaEye className={style.faeye} onClick={()=>setvisible(!visible)} />
            </div><div style={{display: rePassword? 'block' : 'none' }}><p className='warning'>Repassword Not Valid</p></div>
            <button  className={style.btn} >Submit</button>
            <p>Don't have an account? <Link className={style.mainColor} to={'/signin'}>Loggin</Link></p>
        </form>
    </div>
</main>
</>
)
}
