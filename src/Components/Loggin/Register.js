import React, { use, useEffect, useState } from 'react'
import style from './style.module.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import { FaRegTimesCircle } from "react-icons/fa";



const ValidEmail= /^[a-z]\w{3,}@\w{3,8}.\w{3,}/;
const ValidPass = /^[A-Z]\d{6,10}/

export const Register = () => {
const [user,setuser] = useState([])
const [visible , setvisible] = useState(false)
const [rePassword,setrepassword]=useState(false)
const [usermassege,setusermassege] = useState(false)
var arrlocal=[];
const navigate = useNavigate();
const local = localStorage.getItem('Users') 

const [regex,setregex] = useState({
  
})

// Add Users to LocalStorg
function adduser  (){
    // check if users exist in local 
    if( local){  
        arrlocal = JSON.parse(local)
        const filtered = arrlocal.filter((users) =>
            users.email.toLowerCase().includes(user.email.toLowerCase()));
        if(filtered.length>0){
            setusermassege(true)
            return false;
        }
    }   
    arrlocal.push(user)
    localStorage.setItem('Users',JSON.stringify(arrlocal))
    return true;
}

useEffect(()=>{
   if(ValidEmail.test(user.email)){
    setregex((prevs)=>({...prevs, email : true}))
    if(ValidPass.test(user.Password)){
        setregex((prevs)=>({...prevs, Password : true}))
    }else{
        setregex((prevs)=>({...prevs, Password : false}))
    }
   }else{
    setregex((prevs)=>({...prevs, email : false}))
    } 
},[user])

//get Values Input
let valueChange = (e)=>{
    let {name , value} = e.target
    setuser((x)=> {return{...x, [name] : value}} )
}

// *********\\
function displaySubmit(e){
    e.preventDefault();
    //Checked 
if(regex.email&&regex.Password){
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
}}

const handleClick = () => {
    navigate("/");}


return (<>
    <nav><div className={style.navbar}><i className="fa-solid fa-plane mainc"></i>my dream place</div></nav>
    <main>
    <div className={style.display} >
        <h1 className='mb-1'>Register</h1>
    <form className='space-y-3 w-1/3' onSubmit={displaySubmit} >
        <div>
            <label htmlFor='email'>Email address</label>
            <input className=' relative'  required id='email' type='email' name='email' onChange={valueChange} />
          {(user.email===undefined || user.email==='')? null: regex.email?  <span className='absolute translate-x-2'><FcApproval /></span>:
            <span style={{color:'red'}} className='absolute translate-x-2'><FaRegTimesCircle /></span>}
          
        </div>
            <div style={{display: usermassege? 'block' : 'none' }}><p className='warning'>User already exist</p></div>
        {/*   ............Passsword InPut.......... */}
        <div>
            <label htmlFor='Password'>Password</label>
            <input id='Password' required type={visible? 'text ' : 'Password'} name='Password' onChange={valueChange} />
           {(user.Password===undefined || user.Password==='')? null :  !visible? <FaEye className={style.faeye} onClick={()=>setvisible(!visible)}/>:<FaEyeSlash className={style.faeye} onClick={()=>setvisible(!visible)}/> } 
            {(user.Password===undefined || user.Password==='')? null: regex.Password?  (<span className='absolute translate-x-2'><FcApproval /></span>):
           ( <span style={{color:'red'}} className='absolute translate-x-2'><FaRegTimesCircle /></span>
           && <p style={{color:'red',width:'100%'}} className={ regex.Password? "hidden" : "block" }>password must start with uppercase and the number+6</p>)}
        </div>
        <div>
            <label htmlFor='rePassword'>Confirm password</label>
            <input id='rePassword' required type={visible? 'text ' : 'Password'} name='rePassword' onChange={valueChange} />
            </div><div style={{display: rePassword? 'block' : 'none' }}><p className='warning'>Repassword Not Valid</p></div>
            <button  className={style.btn} >Submit</button>
            <p>Don't have an account? <Link className={style.mainColor} to={'/signin'}>Loggin</Link></p>
        </form>
    </div>
</main>
</>
)
}
