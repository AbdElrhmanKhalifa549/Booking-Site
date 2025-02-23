import React from 'react'
import { GoAlert } from 'react-icons/go'
import style from '../Home.module.css'
import { useNavigate } from 'react-router-dom'

export const MyTrips = () => {

    const userChecked = JSON.parse(localStorage.getItem("UserNow"))
    const Users = JSON.parse(localStorage.getItem('Users'))
    const getTrips = Users.filter((user)=>user.email.includes(userChecked.email))
    const {trips} =getTrips[0]
    console.log(userChecked)
    const navgator = useNavigate()
  return ( <>
    {trips? <main className='bg-cgray'>
     <div className='py-10 w-[80%] m-auto'>
        <div className='mb-2 py-5 w-[90%] m-auto '>
        <h2 className='my-5'>MyTrips</h2>
        {trips.map((item,i)=><div className={`${style.cardContainer} shadow`} key={i}>
            <figure><img src={Object.values(item.hotelPhoto)} alt=''/></figure>
            <div className='grid justify-between h-full'>
                    <div >
                        <h3 className='mb-2'>{item.name}</h3>
                        <p><span></span>{item.reView}review</p>
                    </div>
                    <div className='mt-auto'>
                        <h5 className='mb-2' >Non refundable</h5>
                        <p className='mb-2'>checkIn:{item.checkIn} </p>
                        <p className='mb-2'>checkOut:{item.checkOut}</p>
                        <p>{item.night} night stay</p>
                    </div>
                
            </div>
            <div className='mt-auto text-end '>
                <span className='nospan'><small style={{ color: "#EB5757" }}><del>${Math.floor(item.strikethrough)}</del></small>  ${Math.floor(item.gross)}</span>
                <p>Includes taxes and fees</p>
                <button onClick={()=>navgator('/product')} >View trip details</button>
            </div>
        </div>)} 
        
        </div>
         <div className={`warning mb-5`}><div className='warnicon'><GoAlert/></div><p>Check the latest COVID-19 restrictions before you travel. <span>Learn more</span> </p></div>
    </div>
    </main>: <h1 className='text-center ' >No Trips Yet</h1>}
    
</>    )
}
