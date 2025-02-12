import React from 'react'
import footer from './footer.module.css'
import { useLocation } from 'react-router-dom'

export const Footter = () => {
    const location = useLocation()
    const nowLocation =location.pathname === "/product" 
    const CheckLocation= location.pathname === '/checkout'
return (<>
{CheckLocation === false ? 
<footer className={`${nowLocation=== true} bg-cgray : null`} style={{marginBottom:'0'}}>
        <div className={footer.container}>
<div className={footer.calcwidth}>
    <div><i className="fa-solid fa-plane mainc"></i>my dream place</div>
    <p>your next goto companion for travel</p>
</div>
<div className={footer.calcwidth}>
    <h4>company</h4>
    <ul >
        <li>about</li>
        <li>jobs</li>
        <li>newsroom</li>
        <li>advertising</li>
        <li>contact us</li>
    </ul>
</div>
<div className={footer.calcwidth}>
    <h4>explore</h4>
    <ul>
        <li>australia</li>
        <li>new zealand</li>
        <li>united states america (USA)</li>
        <li>greece</li>
        <li>maldives</li>
        <li>singapore</li>
    </ul>
        <span>see more</span>
</div>
<div className={footer.calcwidth}>
    <h4>terms and policies</h4>
    <ul>
        <li>privacy policy</li>
        <li>term of use</li>
        <li>acessibility</li>
        <li>reward system policy</li>
    </ul>
</div>
<div className={footer.calcwidth}>
    <h4>help</h4>
    <ul>
        <li>support</li>
        <li>cancel your bookings</li>
        <li>use coupon</li>
        <li>refund policies</li>
        <li>international travel document</li>
    </ul>
</div></div>
<div style={{marginBottom: '0'}} className={footer.copy}><div style={{margin:'auto',width:'80%'}}>&copy; my dream place 2022</div></div>
</footer> : null}
</>
    
    
)
}
