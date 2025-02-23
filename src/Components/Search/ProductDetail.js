import React, { useState, useEffect, useContext } from "react";
import style from "../Search/style.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdWifi } from "react-icons/io";
import { MdAir } from "react-icons/md";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiWaterPolo } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { HotelDetails, Description } from "../api/HotelDetails";
import { DateApi } from "../main/Layout";
import { GoAlert } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const ProductDetail = () => {
  const navigate = useNavigate()
const { Destinat } = useContext(DateApi);
const [hotelDetails, sethotelDetails] = useState();
const [description, setdescription] = useState();
const [loading, setLoading] = useState(false);
const [randomImg, setradnomImg]=useState()
const [userTrips,setuserTrips] =useState(JSON.parse(localStorage.getItem("UserNow")))
  useEffect(() => {
    hotelData(Destinat)
  }, []);

  const hotelData = async prams => {
    setLoading(true);
    try {
      const details = await HotelDetails(prams);
      sethotelDetails(details);
      const photo = Object.values(details.rooms)
      setradnomImg(photo[0].photos)
      const Des = await Description(prams);
      setdescription(Des.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const SetDetailsinLocalS=(e)=>{
    const night = Number(hotelDetails.departure_date.split("-").splice(2))-Number(hotelDetails.arrival_date.split("-").splice(2))
    const hotelTrips={
      name:hotelDetails.hotel_name,
      checkIn : hotelDetails.arrival_date,
      checkOut: hotelDetails.departure_date,
      hotelPhoto:hotelDetails.rawData.photoUrls,
      reView:hotelDetails.review_nr,
      gross:hotelDetails.product_price_breakdown.gross_amount_per_night.value || 0,
      tax:hotelDetails.product_price_breakdown.included_taxes_and_charges_amount.value || 0,
      strikethrough:hotelDetails.product_price_breakdown.strikethrough_amount_per_night?.value || 0,
      night,
      bed:e,
    };

    if(userTrips.trips && (!userTrips.trips.includes(hotelTrips)) ){
      userTrips.trips.push(hotelTrips)
      localStorage.setItem('UserNow',JSON.stringify(userTrips))
      if(userTrips.trips){
        navgat()
      }
      console.log('yes', userTrips)
    }else{
      const arrayTrips=[]
      arrayTrips.push(hotelTrips)
      setuserTrips((prevs)=>({...prevs,trips : arrayTrips}))
      localStorage.setItem("UserNow",JSON.stringify(userTrips))
      if(userTrips.trips){
        navgat()
      }
      
      console.log('no',userTrips)
    }
    }
    //
    const navgat= ()=> navigate('/checkout');

  return (
    <div>
      {loading ? "Loading...." : null}
      {hotelDetails && description
        ? <main>
            <section>
              <div
                style={{
                  backgroundImage: "linear-gradient( #f4f4f4, #ffffff)"
                }}
              >
                <div className="flex justify-between gap-3 md:w-[80%] md:m-auto py-5 ">
                  <figure className="w-2/3  lg:max-h-96 rounded overflow-hidden ">
                    <img
                      src={randomImg[0].url_640x200}
                      className="h-full"
                      alt="MainRoom"
                    />
                  </figure>
                  {randomImg? <div className="w-1/3 lg:max-h-96 flex flex-col gap-2 ">
                    <figure className=" rounded overflow-hidden max-h-48">
                      <img className="h-full" src={randomImg[Math.floor(Math.random()*randomImg.length)].url_max300} alt="room" />
                    </figure>
                    <figure className="rounded overflow-hidden max-h-48">
                      <img className="h-full" src={randomImg[Math.floor(Math.random()*randomImg.length)].url_max750} alt="room" />
                    </figure>
                  </div> :<div className="w-1/3 flex flex-col gap-2 ">
                    <figure className="">
                      <img className="h-full" src="assets/header.png" alt="" />
                    </figure>
                    <figure className="">
                      <img className="h-full" src="assets/header.png" alt="" />
                    </figure>
                  </div> }
                  
                </div>
              </div>
            </section>

            <section >
              <div className="pt-5 md:w-[80%] md:m-auto">
                <ul className="flex  gap-2 px-5 md:px-5">
                  <li className=" border-b-t border-b-2 hover:border-b-cb">
                    Overview
                  </li>
                  <li className=" border-b-t border-b-2 hover:border-b-cb">
                    <a href="#rooms">Room</a>
                  </li>
                </ul>
              </div>
              {/*\\\\\\\\\\\\\\\ About && iFrame /////////////*/}
              <div className="bg-cgray pb-10 p-10 md:p-0 ">
                <div className="md:w-[80%] md:m-auto ">
                  <div className="md:flex md:justify-between  gap-3 py-10  ">
                    <div className="md:w-2/3 mb-5">
                      <h2>
                        {hotelDetails.hotel_name}
                      </h2>
                      <div>
                        <span className="nospan">
                          4.5({hotelDetails.review_nr} review)
                        </span>
                      </div>
                      <div>
                        <div className="pb-5">
                          <span>
                            <IoLocationOutline />
                          </span>{hotelDetails.address}
                        </div>

                        <div className="bg-[#ffffff]">
                          <div className="p-10 ">
                            <h3>Overview</h3>
                            <div className="text-[#4f4f4f]">
                              {description.map(des =>
                                <p
                                  key={des.descriptiontype_id}
                                  className="mb-3 text-[1.5vw]"
                                >
                                  {des.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <hr className="bg-[#4f4f4f]" />
                          <div className="p-10">
                            <h3 className="mb-3">Top facilities</h3>
                            <div className="flex gap-5 text-[#4f4f4f] text-xs">
                              <ul>
                                <li className="flex">
                                  <div
                                    className= 'text-cb mr-2'
                                  >
                                    <IoMdWifi />
                                  </div>Free wifi
                                </li>
                                <li className="flex">
                                  <div
                                    className='text-cb mr-2'
                                  >
                                    <MdAir />
                                  </div>Air Conditioning
                                </li>
                                <li className="flex">
                                  <div
                                    className='text-cb mr-2'
                                  >
                                    <MdOutlineDirectionsCar />
                                  </div>Parking available
                                </li>
                              </ul>
                              <ul>
                                <li className="flex">
                                  <div
                                    className='text-cb mr-2'
                                  >
                                    <MdOutlineBusinessCenter />
                                  </div>Business Services
                                </li>
                                <li className="flex">
                                  <div
                                    className='text-cb mr-2'
                                  >
                                    <GiWaterPolo />
                                  </div>Swimming pool
                                </li>
                                <li className="flex">
                                  <div
                                    className='text-cb mr-2'
                                  >
                                    <AiOutlineLike />
                                  </div>Top rated in area
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3 rounded overflow-hidden">
                      <div className="mb-4">
                        <iframe
                          className="w-full"
                          title="map"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27324.16694425045!2d29.815603199999998!3d31.1230464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1738860135565!5m2!1sen!2seg"
                        />
                      </div>
                      <div>
                        <h3 className="my-2">Explore the area</h3>
                        <div>
                          <ul className="text-[#4f4f4f] text-xs">
                            <li className="flex mb-1 justify-between">
                              <div className="flex">
                                <div className={style.transform}>
                                  <PiAirplaneTiltFill />
                                </div>Hotel Penselvenyia
                              </div>
                              <span className="nospan">2min drive</span>
                            </li>
                            <li className="flex mb-1 justify-between">
                              <div className="flex">
                                <div className={style.transform}>
                                  <IoLocationOutline />
                                </div>Travis Bakery store house
                              </div>
                              <span className="nospan">10min drive</span>
                            </li>
                            <li className="flex mb-1 justify-between">
                              <div className="flex">
                                <div className={style.transform}>
                                  <IoLocationOutline />
                                </div>Olivia Johnson Garden
                              </div>
                              <span className="nospan">15min drive</span>
                            </li>
                            <li className="flex mb-1 justify-between">
                              <div className="flex">
                                <div className={style.transform}>
                                  <IoLocationOutline />
                                </div>Norman Opera Circus
                              </div>
                              <span className="nospan">18min drive</span>
                            </li>
                            <li className="flex mb-1 justify-between">
                              <div className="flex">
                                <div className={style.transform}>
                                  <IoLocationOutline />
                                </div>Rockdeset hotel
                              </div>
                              <span className="nospan">32min drive</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* /////////////RooMS////////           */}
                  <h2 className="mb-5">Available rooms</h2>
                  <div id="rooms" className="flex justify-end gap-2">
                    
                    <div className="w-1/3 rounded ">
                      <figure className="max-h-24 lg:max-h-40 overflow-hidden">
                        <img alt="room2" src={randomImg[1].url_max300? randomImg[1].url_max300: 'assets/header.png' } />
                      </figure>
                      <div className="p-2 bg-[#fff]">
                        <h4>Standard twin ben, Multiple beds</h4>
                        <ul>
                          <li className="flex my-1 text-xs text-[#4f4f4f] ">
                            <div className={style.transform}>
                              <MdOutlineBusinessCenter />
                            </div>{" "}
                            300 sq ft
                          </li>
                          <li className="flex my-1 text-xs text-[#4f4f4f] ">
                            <div className={style.transform}>
                              <GiWaterPolo />
                            </div>Sleeps 3
                          </li>
                          <li className="flex my-1 text-xs text-[#4f4f4f] ">
                            <div className={style.transform}>
                              <AiOutlineLike />
                            </div>1 double bed and 1 twin bed
                          </li>
                        </ul>
                        <button onClick={()=>SetDetailsinLocalS(2)} className="w-full">Reserve suite</button>
                      </div>
                    </div>
                    <div className="w-1/3 rounded ">
                      <figure className="max-h-24 lg:max-h-40 overflow-hidden">
                        <img  alt="room1" src={randomImg[0].url_max300? randomImg[0].url_max300: 'assets/header.png' } />
                      </figure>
                      <div className="p-2 bg-[#fff]">
                        <h4>Standard twin ben, 1 Queen bed</h4>
                        <ul>
                          <li className="flex my-1 text-xs text-[#4f4f4f] ">
                            <div className={style.transform}>
                              <MdOutlineBusinessCenter />
                            </div>{" "}
                            300 sq ft
                          </li>
                          <li className="flex my-1 text-xs text-[#4f4f4f] ">
                            <div className={style.transform}>
                              <GiWaterPolo />
                            </div>Sleeps 3
                          </li>
                          <li className="flex my-1 text-xs text-[#4f4f4f] ">
                            <div className={style.transform}>
                              <AiOutlineLike />
                            </div>1 double bed and 1 twin bed
                          </li>
                        </ul>
                        <button onClick={()=>SetDetailsinLocalS(1)} className="w-full">Reserve suite</button>
                      </div>
                    </div>
                  </div>
              <div className={`warning my-10`}><div className='warnicon'><GoAlert/></div><p>Check the latest COVID-19 restrictions before you travel. <span>Learn more</span> </p></div>
                </div>
              </div>
            </section>
          </main>
        : "loading@2"}
    </div>
  );
};
