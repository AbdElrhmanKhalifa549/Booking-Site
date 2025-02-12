import React, { useEffect, useState } from 'react'
import style from './nav.module.css'
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { LuWallet } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { Link, useLocation} from 'react-router-dom'




const Navbbar = () => {

    const [login,setlogin] = useState(false)
    const location = useLocation()
    const nowLocation =location.pathname === "/search" 

function LogOut(){
    localStorage.removeItem('Isloggin')
    setlogin(false)
}
useEffect(()=>{
    if(localStorage.getItem('Isloggin')){
        setlogin(true)
    }else{
        setlogin(false)
    }
},[login])



return ( <>
<nav className={`${nowLocation? style.bglinear : null }`}> 
    <div className={ style.container}>
        <div><i className="fa-solid fa-plane mainc"></i>my dream place</div>
        <div>
        <ul className={style.ul}>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>home</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>discover</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>activities</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>about</a></li>
            <li><a style={nowLocation? {color:'white'}: null } href='/'>contact</a></li>
        </ul>
        </div>
        <div>
    {login?  <div className={style.divicon}><HiOutlineBellAlert /> <div style={{width:'30px',position:'relative'}}><img src='./assets/Ellipse 2.svg' alt=''/>
    <div className={style.Dashboard}>
        <ul className={style.navBord}>
            <li> <MdManageAccounts /> <Link>Manage account</Link>  </li>
            <li> <GiAirplaneDeparture /> <Link>My trips</Link>     </li>
            <li> <LuWallet />      <Link> Reward and wallet</Link>     </li>
            <li> <IoIosLogOut /> <Link  onClick={LogOut}>Sign out</Link></li>
        </ul>
    </div>    
    </div></div>  : <button><Link style={{color:'white'}} to='/signin'>Login</Link></button>
        }

        </div></div> 
        </nav> </>
)
}



export const  Navmemo = React.memo(Navbbar);