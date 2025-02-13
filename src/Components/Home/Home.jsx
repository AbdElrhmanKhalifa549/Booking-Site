import React from 'react'
import  img from './index.js'
import style from './Home.module.css'
import { GoAlert } from "react-icons/go";
import { SearchBar } from '../Search/SearchBar.js';




export const Home = () => {
return(<>
    <main className=' mainContainer'>
        <header className='flex  mb-5'>
            <div className={style.header}>
            <div className={style.layer}>
                <h1>Enjoy Your Dream Vacation</h1>
                <p style={{color:"white"}}>Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</p>
            </div>
            <SearchBar/>
            </div>
            
        </header>
        {/* //////////////////////////////////// */}
            <div className={`warning mb-5`}><div className='warnicon'><GoAlert/></div><p>Check the latest COVID-19 restrictions before you travel. <span>Learn more</span> </p></div>
        {/* //////////////////////////////////// */}
        <section className='mb-5'>
        <h2 className='mb-2'>Enjoy your dream vacation</h2>
        <p className='mb-2'>Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us</p>
        <div className='container'>
            <div className='w-img mb'>
                <figure ><img src={img.img1} alt="Australia" /></figure>
                <h4>Australia</h4>
                <p>2246 properties</p>
                </div>
            <div className='w-img'>
                <figure ><img src={img.img2} alt="Japan" /></figure>
                <h4>Japan</h4>
                <p>1278 properties</p>
                </div>
            <div className='w-img'>
                <figure ><img src={img.img3} alt="New Zealand" /></figure>
                <h4>New Zealand</h4>
                <p>480 properties</p>
                </div>
            <div className='w-img'>
                <figure><img src={img.img4} alt="Greece" /></figure>
                <h4>Greece</h4>
                <p>320 properties</p>
                </div>
            </div>
        </section>
        <section className='mb-5'>
            <h2 className='mb-2'>Get inspiration for your next trip</h2>
            <div className='container'>
            <div className={style.img3w} style={{backgroundImage:`url("${img.header}")`,backgroundSize:'Cover',backgroundPosition:'Center Center'}}>
                <div className={style.minlayer}>
                    <h4>Sydeny’s 10 most fashionable 5 star hotels</h4>
                    <p style={{color:"white"}}>Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</p>
                </div>
                </div>
            <div className={style.img3w} style={{backgroundImage:`url("${img.img6}")`,backgroundSize:'Cover',backgroundPosition:'Center Center'}}>
                <div className={style.minlayer}>
                    <h4>Top cities for Vegan Travellers</h4>
                    <p style={{color:"white"}}>Top sites where you do not have to worry about being a vegan. Our tourist guide is here...</p>
                </div>
                </div>
            <div className={style.img3w} style={{backgroundImage:`url("${img.img7}")`,backgroundSize:'Cover',backgroundPosition:'Center Center'}}>
                <div className={style.minlayer}>
                    <h4>World’s top destinations during and post covid timeline</h4>
                    <p style={{color:"white"}}>Pandemic is still intact and will be here for a longer time. Here’s where your next destination...</p>
                </div>
                </div>
                </div>
        </section >
        <section className='mb-5'>
        <h2 className='mb-2'>Enjoy your dream vacation</h2>
        <div className='container'>
            <div className='w-img'>
                <figure ><img src={img.img8} alt="Lakeside Motel Warefront" /></figure>
                <h4>Lakeside Motel Warefront</h4>
                <p>2246 properties</p>
                </div>
            <div className='w-img'>
                <figure ><img src={img.img9} alt="Recce Graham resort" /></figure>
                <h4>Recce Graham resort</h4>
                <p>1278 properties</p>
                </div>
            <div className='w-img'>
                <figure ><img src={img.img10} alt="Fireside Dinners" /></figure>
                <h4>Fireside Dinners</h4>
                <p>480 properties</p>
                </div>
            <div className='w-img'>
                <figure><img src={img.img11} alt="Oculous Inn Stay" /></figure>
                <h4>Oculous Inn Stay</h4>
                <p>320 properties</p>
                </div>
            </div>
        </section>
        <section className='textCenter mb-5'>
        <figure className='mb-5'><img src={img.img12} alt="" /></figure>
        <h2 className='mb-2'>Explore the world with My Dream place</h2>
        <span>Discover new places and experiences</span>
            </section>   

            {/* //////\\\\\ */}
    
    </main>
</>)
}
