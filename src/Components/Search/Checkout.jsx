import React from 'react'
import { AiFillSecurityScan } from 'react-icons/ai'
import { GoAlert } from 'react-icons/go'
import { RiSecurePaymentFill } from 'react-icons/ri'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export const Checkout = () => {
  const monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(20),(val, index) => index + year);


return (<>
  <main className=' bg-cgray py-10'>
    <section className='md:w-[80%] md:m-auto'>
      <h2 className='mb-2'>Secure your reservation</h2>
      <div className={`warning mb-5`}><div className='warnicon'><GoAlert/></div><p>Check the latest COVID-19 restrictions before you travel. <span>Learn more</span> </p></div>

    <section className='md:flex gap-3'>
      <div className='md:w-2/3 '>
        <div className='mb-4 rounded overflow-hidden'>
          <div style={{color:'white'}} className='flex bg-cb p-2 gap-2'><div><AiFillSecurityScan/></div> <h4>Room1</h4> <p>2 adults, 1 double bed and 1 twin bed, Non-smoking</p></div>
          <form style={{backgroundColor:'white'}} className='p-4'>
          <div  className='flex gap-2 mb-2'>
            <div>
              <label htmlFor='first'>First name</label>
              <input id='first' type='text' />
            </div>
            <div>
              <label htmlFor='last'>Last name</label>
              <input id='last' type='text' />
            </div>
          </div>
          <div className='mb-2'>
            <label>Mobile number</label>
            <PhoneInput country={'us'}/>
          </div>
          <div className='flex gap-1'>
            <input className='max-w-fit' type="checkbox" name="" id="check" />
            <label htmlFor='check'>Receive text alerts about this trip.</label>
            </div>
          </form>
        </div>  
        <div className='mb-4 rounded overflow-hidden'>
        <div style={{color:'white'}} className='bg-cb gap-2 flex p-4'>
          <div><RiSecurePaymentFill /></div>
          <h4>Payment options</h4>
        </div>
          <div style={{backgroundColor:'white'}} className='p-4'>
            <h5 className='mb-2'>Debit/Credit Card</h5>
            <div>
              <div className='flex gap-2 mb-2'>
                <figure className='w-14'>                
                  <img className='translate-y-2'  src='assets/icon/image 6.svg' />
                </figure>
                <figure className='w-14'>                
                  <img className='translate-y-2'  src='assets/icon/image 7.svg' />
                </figure>
                <figure className='w-14 order-4'>                
                  <img  className='translate-y-3' src='assets/icon/image 8.svg' />
                </figure>
                <figure className='w-14'>                
                  <img  src='assets/icon/image 10.svg' />
                </figure>
              </div>
              <label htmlFor='card'>Name on card</label>
              <div className='w-1/2 mb-2'><input id='card' type="text" /> <span></span></div>
              <label htmlFor='card'>Debit/Credit card number</label>
              <div className='w-1/2 mb-2'><input id='card' type="text" /> <span></span></div>
              
              <div className='mb-2'>
              <label>Expiration Date</label>
                <select name='month'>
                  {monthNames.map((month,i)=>(<option key={i} value={month} >{month}</option>))}
                </select>
                <select>
                  {years.map((year, index) => (<option key={`year${index}`} value={year}>{year}</option>))}
                </select>
              </div>
              <div className='flex gap-2'>
              <div>
                <label htmlFor="security_code">Security Code</label>
                <input id='security_code' type="number" />
              </div>
              <div>
                <label htmlFor="zip_code">Billing Zip code</label>
                <input id='zip_code' type="number" />
              </div>
              </div>
            </div>
          
          </div>
        </div> 
        <div className='rounded overflow-hidden'>
          <h4 className='p-4 bg-[#F2C94C]'>Important information about your booking</h4>
          <div className='p-4' style={{backgroundColor:'white'}}>
            <ol className='p-2 ' start={1}>
              <li className='mb-2'><p>This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.</p></li>
              <li className='mb-2'><p>Stay extensions will require a new reservation.</p></li>
              <li className='mb-2'><p>Front desk staff will greet guests on arrival</p></li>
              <li className='mb-2'><p>No refunds will be issued for late check-in or early check-out.</p></li>
            
            </ol>
            <p className='m-2'>By clicking the button below, I acknowledge that I have reviewed the <span>Privacy Statement</span>  and have reviewd and accept the  <span>Rules and Restrictions</span> and <span>Terms of Use.</span></p>
            <button className='mb-2'>Complete Booking</button>
            <div className='flex gap-1'>
              <input className='max-w-fit' type="checkbox" name="LOCK" id="lock" />
              <label htmlFor="lock">We use secure transmission and encrypted storage to protect your personal information</label>
            </div>
          </div>
        </div>
        
      </div>
      <div className='md:w-1/3' >  
        <div style={{backgroundColor:'white'}} className='mb-3 rounded '>
            <figure><img  src="assets/header.png"/></figure>
            <div className='p-4'>
            <h3 className='mb-1'>Lakeside Motel Warefront</h3> 
            <div></div>
            <span className='mb-1'>Non refundable</span>  
            <p className='mb-1'>Check in:</p>       
            <p className='mb-1'>Check out:</p>
            <p className='mb-1'>2 night stay</p>       
            </div>
        </div>

        <div style={{backgroundColor:'white'}} className='rounded overflow-hidden'>
          <h3 className='bg-[#85E0AB] p-4'>Price Details</h3>
          <div className='p-4' >
            <div className="flex justify-between mb-2"><p>1 room X 2 nights</p><span>$ 120.32</span></div>
            <div className="flex justify-between mb-2 pb-2 border-b-2 border-cgray"><p>Tax and service fees</p><span>$ 8.32</span></div>
            <div className="flex justify-between mb-2"><p>Total</p><span>$130</span></div>
          </div>
        </div>
      </div>  
      
    </section>    
    </section>
  </main>


  
  
  
  
  </>
  )
}
