import React, {  useRef } from 'react'
import style from './style.module.css'
import { Link, useNavigate, } from 'react-router-dom'

export const logginProvide= React.createContext()

export const SignIn = () => {

const navigate = useNavigate()
const email = useRef()
const password = useRef()
const userLocalS = JSON.parse(localStorage.getItem('Users'));


function getUser(){
    if(password && email){
        let UserEmail =  userLocalS.filter((user)=>user.email.includes(email.current.value));
        let UserPass =  userLocalS.filter((user)=>user.Password.includes(password.current.value));
        let nowUser ;
        (function (){ UserEmail.map((use)=>{use.log='yes' ;nowUser=use})})() ;
      
        if(UserEmail.length >=1 && UserPass.length >= 1 && email.current.value !==""){
        localStorage.setItem('UserNow',JSON.stringify(nowUser))
        handleClick()
        }else{
            console.log('no')
        }
    }
}





function handleSubmit(e){
e.preventDefault()
getUser()
}

const handleClick = () => {
    navigate("/");}


    return (<>
    <nav><div className={style.navbar}><i className="fa-solid fa-plane mainc"></i>my dream place</div></nav>

    <div className={style.display}>
        <h1 className='mb-1'>signIn</h1>
        <form className='space-y-3 w-1/3' onSubmit={handleSubmit}>
        <div>
        <label>email address</label>
        <input type='email' name='email' ref={email} />
    </div>
    <div>
        <label>password</label>
        <input type='Password' ref={password}/>
    </div>
    <button className={style.btn} >sing in</button>
    <p>don't have an account? <span><Link className={style.mainColor}  to='/register'>Register</Link></span></p>
        </form>
    </div>  </>
)
}
