import React, { useEffect, useState } from "react";
import { AiFillSecurityScan } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { GiLockedHeart } from "react-icons/gi";
import { GoAlert } from "react-icons/go";
import { RiSecurePaymentFill } from "react-icons/ri";
import style from './style.module.css'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const regex = {
  firstName: /^[a-zA-Z]{4,10}/i,
  lastName: /^[a-zA-Z]{4,10}/i,
  Phone: /\d{10,13}/,
  Checked: /[on]/,
  nameCard: /\w{10,20}/i,
  Debit:/\d{16}/,
  securityCode: /\d{3}/,
  zipCode: /\d{6}/
};

export const Checkout = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date()
  const mounth = date.getMonth() 
  const year = date.getFullYear();
  const years = Array.from(new Array(20), (val, index) => index + year);
  const [user, setuser] = useState();
  const [checkedIcon,setcheckedIcon]=useState(false)
  const [check,setcheck] = useState()
  const [successed,setsuccessed]=useState(false)
  const navgate = useNavigate()

  const userChecked = JSON.parse(localStorage.getItem("UserNow"))
  const Users = JSON.parse(localStorage.getItem('Users'))
  const trip = userChecked.trips[userChecked.trips?.length-1]



  const getuser = (e) => {
    const { name, value } = e.target;
    setuser((prev) => ({ ...prev, [name]: value }));
    
  };


  useEffect(()=>{
    if(user){
      if(regex.nameCard.test(user.namecard)&&regex.Debit.test(user.debit)&&regex.securityCode.test(user.security_code)&&regex.zipCode.test(user.zip_code)){
        setcheckedIcon(true)
    }else{
      setcheckedIcon(false)
    }  }
  },[user,check,checkedIcon])
  
  
  const getphone = (e) => {
    setuser((prev) => ({ ...prev, phone: e }));
  };

  const bottonChecked=()=>{
    const UpdateUsers =Users.map((user)=> (user.email.includes(userChecked.email)? user = userChecked : user) )
    localStorage.setItem('Users',JSON.stringify(UpdateUsers))
    
    
    
    
    if(check==='on'){
    setsuccessed(true)
    }
  }
  



  return (
    <div>
      <main className=" bg-cgray py-10">
        <section className="relative md:w-[80%] md:m-auto">
          <h2 className="mb-2">Secure your reservation</h2>
          <div className={`warning mb-5`}>
            <div className="warnicon">
              <GoAlert />
            </div>
            <p>
              Check the latest COVID-19 restrictions before you travel.
              <span>Learn more</span>
            </p>
          </div>
          <section className="md:flex gap-3">
            <div className="md:w-2/3 ">
              <div className="mb-4 rounded overflow-hidden">
                <div
                  style={{ color: "white" }}
                  className="flex bg-cb p-4 gap-2"
                >
                  <div>
                    <AiFillSecurityScan />
                  </div>
                  <h4>Room1</h4>
                  <p>2 adults, 1 double bed and 1 twin bed, Non-smoking</p>
                </div>
                <form style={{ backgroundColor: "white" }} className="p-4">
                  <div className="flex gap-6 mb-2">
                    <div className="relative">
                      <label htmlFor="first">First name</label>
                      <input
                        id="first"
                        name="firstName"
                        onChange={getuser}
                        type="text"
                      />
                      {user? ((regex.firstName.test(user.firstName)&& user.firstName)?
                      <span className='absolute top-0 translate-y-full'><FcApproval /></span>:null):null}
                    </div>
                    <div className="relative">
                      <label htmlFor="last">Last name</label>
                      <input
                        id="last"
                        type="text"
                        name="lastName"
                        onChange={getuser}
                      />
                      {user? ((regex.lastName.test(user.lastName)&&user.lastName)?
                      <span className='absolute top-0 translate-y-full'><FcApproval /></span>:null):null}
                    </div>
                  </div>
                  <div className="mb-2 relative">
                    <label>Mobile number</label>
                    <PhoneInput country={"us"} onChange={getphone} />
                    {user? ((regex.Phone.test(user.phone))?
                      <span className='absolute top-0 translate-y-full'><FcApproval /></span>:null):null}
                  </div>
                  <div className="flex gap-1">
                    <input
                      className="max-w-fit"
                      type="checkbox"
                      name="checked"
                      id="check"
                      onChange={getuser}
                    />
                    <label htmlFor="check">
                      Receive text alerts about this trip.
                    </label>
                  </div>
                </form>
              </div>
              <div className="mb-4 rounded overflow-hidden">
                <div
                  style={{ color: "white" }}
                  className="bg-cb gap-2 flex p-4"
                >
                  <div>
                    <RiSecurePaymentFill />
                  </div>
                  <h4>Payment options</h4>
                </div>
                <div style={{ backgroundColor: "white" }} className="p-4">
                  <h5 className="mb-2">Debit/Credit Card</h5>
                  <div>
                    <div className="flex gap-2 mb-2">
                      <figure className="w-14">
                        <img
                          className="translate-y-2"
                          src="assets/icon/image 6.svg"
                          alt="masterCard"
                        />
                      </figure>
                      <figure className="w-14">
                        <img
                          className="translate-y-2"
                          src="assets/icon/image 7.svg"
                          alt="visa"
                        />
                      </figure>
                      <figure className="w-14 order-4">
                        <img
                          className="translate-y-3"
                          src="assets/icon/image 8.svg"
                          alt="americanExpress"
                        />
                      </figure>
                      <figure className="w-14">
                        <img src="assets/icon/image 10.svg" alt="discover" />
                      </figure>
                    </div>
                    
                    <div className="max-w-[50%] mb-2 relative">
                    <label htmlFor="card">Name on card</label>
                      <input
                        id="card"
                        type="text"
                        name="namecard"
                        onChange={getuser}
                      />{user? ((regex.nameCard.test(user.namecard))?
                        <span className='absolute top-0 translate-y-full'><FcApproval /></span>:null):null}
                    </div>
                    
                    <div className="max-w-[50%] mb-2 relative">
                    <label htmlFor="debit">Debit/Credit card number</label>
                      <input
                        id="debit"
                        type="text"
                        name="debit"
                        onChange={getuser}
                      />
                      {user? ((regex.Debit.test(user.debit))?
                      <span className='absolute top-0 translate-y-full'><FcApproval /></span>:null):null}
                    </div>

                    <div className="mb-2">
                      <label>Expiration Date</label>
                      <select name="month" defaultValue={monthNames[mounth]}>
                        {monthNames.map((month, i) => (
                          <option key={i} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <select>
                        {years.map((year, index) => (
                          <option key={`year${index}`} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex gap-5">
                      <div className="relative">
                        <label htmlFor="security_code">Security Code</label>
                        <input
                          id="security_code"
                          type="number"
                          name="security_code"
                          onChange={getuser}
                          
                        />
                        {user? ((regex.securityCode.test(user.security_code)&&user.security_code.length === 3)?
                      <span className='absolute top-0 translate-y-full'><FcApproval /></span>:null):null}
                      </div>
                      <div className="relative">
                        <label htmlFor="zip_code">Billing Zip code</label>
                        <input
                          id="zip_code"
                          type="number"
                          name="zip_code"
                          onChange={getuser}
                        />
                        {user? ((regex.zipCode.test(user.zip_code)&& user.zip_code.length ===6)?
                      <span className='absolute top-0 translate-y-full'><FcApproval /></span>:null):null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded overflow-hidden">
                <h4 className="p-4 bg-[#F2C94C]">
                  Important information about your booking
                </h4>
                <div className="p-4" style={{ backgroundColor: "white" }}>
                  <ol className="p-2 " start={1}>
                    <li className="mb-2">
                      <p>
                        This rate is non-refundable. If you change or cancel
                        your booking you will not get a refund or credit to use
                        for a future stay.
                      </p>
                    </li>
                    <li className="mb-2">
                      <p>Stay extensions will require a new reservation.</p>
                    </li>
                    <li className="mb-2">
                      <p>Front desk staff will greet guests on arrival</p>
                    </li>
                    <li className="mb-2">
                      <p>
                        No refunds will be issued for late check-in or early
                        check-out.
                      </p>
                    </li>
                  </ol>
                  <p className="m-2">
                    By clicking the button below, I acknowledge that I have
                    reviewed the <span>Privacy Statement</span> and have reviewd
                    and accept the <span>Rules and Restrictions</span> and{" "}
                    <span>Terms of Use.</span>
                  </p>
                  <button onClick={bottonChecked} className="mb-2">Complete Booking</button>
                  <div className="flex gap-1">
                   {!checkedIcon?<GiLockedHeart />: <input
                      className="max-w-fit"
                      type="checkbox"
                      name="LOCK"
                      onSelect={console.log('yup')}
                      onChange={(e)=>setcheck(e.target.value)}
                      id="lock"
                    />}
                   
                    
                    
                    <label htmlFor="lock">
                      We use secure transmission and encrypted storage to
                      protect your personal information
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 md:m-0 text-[1.1vw] w-1/2 m-auto py-5 ">
              <div
                style={{ backgroundColor: "white" }}
                className="mb-3 rounded "
              >
                <figure>
                  <img alt="hotel" src={Object.values(trip.hotelPhoto)} />
                </figure>
                <div className="p-4">
                  <h3 className="mb-1">{trip.name}</h3>
                  <div></div>
                  <span className="mb-1">Non refundable</span>
                  <p className="mb-1">Check in:{trip.checkIn}</p>
                  <p className="mb-1">Check out:{trip.checkOut}</p>
                  <p className="mb-1">{trip.night} night stay</p>
                </div>
              </div>

              <div
                style={{ backgroundColor: "white" }}
                className="rounded overflow-hidden"
              >
                <h3 className="bg-[#85E0AB] p-4">Price Details</h3>
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <p>{trip.bed} room X {trip.night} nights</p>
                    <span> $ {(trip.night * Math.floor(trip.gross)).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2 pb-2 border-b-2 border-cgray">
                    <p>Tax and service fees</p>
                    <span>$ {trip.tax}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p>Total</p>
                    <span>${(trip.tax + trip.night * Math.floor(trip.gross)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
           {/*////////////// Popup ////////////////*/}
        {successed?
                          <div className={`absolute w-full h-full top-0 ${style.popup} `}>
                          <div className="text-center bg-cgray w-1/2 m-auto p-5 rounded">
                            <div className=" "><img src="assets/image 11.png" alt="Booking_Successful" /></div>
                            <h2>Booking Successful</h2>
                            <p>Congratulations your reservation has been made. You will be notified 2 days prior the date.</p>
                            <button onClick={()=>navgate('/mytrips')}>View Trip</button>
                          </div>
                        </div>
                          :null    
      }
      
                    {/*////////////// EndPopup ////////////////*/}
        </section>
       
      </main>
      
       
    </div>
  );
};
