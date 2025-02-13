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

export const ProductDetail = () => {
  const { Destinat } = useContext(DateApi);
  const [hotelDetails, sethotelDetails] = useState();
 
  const [description, setdescription] = useState();
  const [loading, setLoading] = useState(false);
  const [randomImg, setradnomImg]=useState()
  // const i = Math.floor(Math.random()*randomImg.length)

  useEffect(() => {
     hotelData(Destinat)
    console.log("kkk22");
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

  // if(hotelDetails.rooms)
  // {
  //     const photos =  Object.values(hotelDetails.rooms) 
  //     const randomRoom = Math.floor(Math.random()*photos.photos.length)
  //     setradnomImg(randomRoom)
  //     console.log(randomImg)
  // }
  // console.log(randomImg)
  // console.log([...Object.values(hotelDetails.rooms)]);
  // console.log(photos[0].photos[0].url_640x200);
  console.log(randomImg)
  return (
    <div>
      {loading ? "Loading...." : null}
      {hotelDetails && description
        ? <main className=" ">
            <section>
              <div
                style={{
                  backgroundImage: "linear-gradient( #f4f4f4, #ffffff)"
                }}
              >
                <div className="flex justify-between gap-3 w-[80%] m-auto py-5 ">
                  <figure className="w-2/3 rounded overflow-hidden ">
                    <img
                      src={randomImg[0].url_640x200}
                      className="h-full"
                      alt=""
                    />
                  </figure>
                  {randomImg? <div className="w-1/3 flex flex-col gap-2 ">
                    <figure className=" rounded overflow-hidden">
                      <img className="h-full" src={randomImg[Math.floor(Math.random()*randomImg.length)].url_max300} alt="" />
                    </figure>
                    <figure className="rounded overflow-hidden">
                      <img className="h-full" src={randomImg[Math.floor(Math.random()*randomImg.length)].url_max750} alt="" />
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

            <section>
              <div className="pt-5 w-[80%] m-auto">
                <ul className="flex  gap-2">
                  <li className=" border-b-t border-b-2 hover:border-b-cb">
                    Overview
                  </li>
                  <li className=" border-b-t border-b-2 hover:border-b-cb">
                    <a href="#rooms">Room</a>
                  </li>
                </ul>
              </div>
              {/*\\\\\\\\\\\\\\\ About && iFrame /////////////*/}
              <div className="bg-cgray pb-10 ">
                <div className="w-[80%] m-auto ">
                  <div className="flex justify-between  gap-3 py-10  ">
                    <div className="w-2/3">
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
                          </span>Lorem ipsum road, {hotelDetails.address}
                        </div>

                        <div className="bg-[#ffffff]">
                          <div className="p-10 ">
                            <h3>Overview</h3>
                            <div className="text-[#4f4f4f]">
                              {description.map(des =>
                                <p
                                  key={des.descriptiontype_id}
                                  className="mb-3"
                                >
                                  {des.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <hr className="text-[#4f4f4f]" />
                          <div className="p-10">
                            <h3 className="mb-3">Top facilities</h3>
                            <div className="flex gap-5 text-[#4f4f4f] text-xs">
                              <ul>
                                <li className="flex">
                                  <div
                                    className={`${style.transform} text-cb mr-2`}
                                  >
                                    <IoMdWifi />
                                  </div>Free wifi
                                </li>
                                <li className="flex">
                                  <div
                                    className={`${style.transform} text-cb mr-2`}
                                  >
                                    <MdAir />
                                  </div>Air Conditioning
                                </li>
                                <li className="flex">
                                  <div
                                    className={`${style.transform} text-cb mr-2`}
                                  >
                                    <MdOutlineDirectionsCar />
                                  </div>Parking available
                                </li>
                              </ul>
                              <ul>
                                <li className="flex">
                                  <div
                                    className={`${style.transform} text-cb mr-2`}
                                  >
                                    <MdOutlineBusinessCenter />
                                  </div>Business Services
                                </li>
                                <li className="flex">
                                  <div
                                    className={`${style.transform} text-cb mr-2`}
                                  >
                                    <GiWaterPolo />
                                  </div>Swimming pool
                                </li>
                                <li className="flex">
                                  <div
                                    className={`${style.transform} text-cb mr-2`}
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
                    <div className="w-1/3">
                      <div className="mb-4">
                        <iframe
                          className="w-full"
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
                    
                    <div className="w-1/3 rounded overflow-hidden">
                      <figure>
                        <img src={randomImg[1].url_max300? randomImg[1].url_max300: 'assets/header.png' } />
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
                        <button className="w-full">Reserve suite</button>
                      </div>
                    </div>
                    <div className="w-1/3 rounded overflow-hidden">
                      <figure>
                        <img src={randomImg[0].url_max300? randomImg[0].url_max300: 'assets/header.png' } />
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
                        <button className="w-full">Reserve suite</button>
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
