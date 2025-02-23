import React, { useEffect, useState } from 'react'
import style from './nav.module.css'    
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { LuWallet } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { Link, useLocation} from 'react-router-dom'




const Navbbar = () => {
    const [userLogin,setuserLogin] =useState(JSON.parse(localStorage.getItem("UserNow")))
    const [login,setlogin] = useState(false)
    const location = useLocation()
    const nowLocation =location.pathname === "/search" 
    function LogOut(){
        setuserLogin((prevs)=>{prevs.log = 'no'})
        localStorage.removeItem("UserNow")
        setlogin(false)
    }
    useEffect(()=>{
    if(userLogin && userLogin.log === 'yes'){
        setlogin(true)
    }else{
        setlogin(false)
    }
},[login])



return ( <>
<nav className={nowLocation? style.bglinear : null }> 
    <div className={ style.container}>
        <div className='text-lg'><i className="fa-solid fa-plane mainc"></i>my dream place</div>
        <div className='group  md:hidden relative grid w-10 h-10 border-cgray border-solid border space-y-1 p-1'>
        <span className='block  group-hover:bg-cb  w-full bg-cgray h-1'></span>
        <span className='w-1/2 bg-cgray h-1'></span>
        <span className='w-3/4 bg-cgray group-hover:bg-cb h-1'></span>
        <div className={`${style.navMenu} group-hover:block `}>
            <ul>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>home</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>discover</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>activities</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>about</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>contact</a></li>
            </ul>
        </div>
        </div>
        
        <div className='hidden md:block'>
        <ul className={style.ul}>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>home</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>discover</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>activities</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>about</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>contact</a></li>
        </ul>
        </div>
        <div className='hidden md:block'>
    {login?  <div className={style.divicon}><HiOutlineBellAlert /> <div style={{width:'30px',position:'relative'}}><img src='./assets/Ellipse 2.svg' alt=''/>
    <div className={style.Dashboard}>
        <ul className={style.navBord}>
            <li className='flex justify-between'> <MdManageAccounts /> <Link>Manage account</Link>  </li>
            <li className='flex justify-between'> <GiAirplaneDeparture /> <Link to={'/mytrips'}>My trips</Link>     </li>
            <li className='flex justify-between'> <LuWallet />      <Link> Reward and wallet</Link>     </li>
            <li className='flex justify-between'> <IoIosLogOut /> <Link  onClick={LogOut}>Sign out</Link></li>
        </ul>
    </div>    
    </div></div>  : <button><Link style={{color:'white'}} to='/signin'>Login</Link></button>
        }

        </div></div>
        </nav> </>
)
}



export const  Navmemo = React.memo(Navbbar);