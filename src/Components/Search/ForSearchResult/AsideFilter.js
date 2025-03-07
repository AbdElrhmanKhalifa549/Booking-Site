import React, { useEffect, useState } from "react";
import style from "../style.module.css";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
export const AsideFilter = ({setinputSearch,setminprice,setmaxprice,budget,setbudget,inputSearch,setpropertyClass}) => {
  const [click,setclick]= useState(false)
  
  useEffect(
    () => {
      minandmax();
    },
    [budget]
  );

  const minandmax = () => {
    switch (budget) {
      case "verylow":
        setminprice(1);
        setmaxprice(200);
        break;
      case "low":
        setminprice(200);
        setmaxprice(500);
        break;
      case "economy":
        setminprice(500);
        setmaxprice(1000);
        break;
      case "high":
        setminprice(1000);
        setmaxprice(2000);
        break;
      case "veryhigh":
        setminprice(2000);
        setmaxprice(5000);
        break;
      default:
        return budget;
    }
  };


  return (
      <aside className={ click ? `relative transition`: `relative left-0 -translate-x-[110%] transition md:translate-x-0 `}>
        <div onClick={()=>setclick(!click)} className="md:hidden top-96 cursor-pointer sticky p-2 bg-cb right-0 translate-x-full text-[white] rounded-e-md" >Aside</div>
        <div className="Bgw">
          <h3 className="mb">Search by property name</h3>
          <div className="reltaive">
            <CiSearch className="reactIcon" />
            <input
              type="text"
              className="white"
              onChange={e => setinputSearch(e.target.value)}
              placeholder="eg. Beach westpalm"
              value={inputSearch}
            />{
              inputSearch===""? null:
            <span onClick={()=>setinputSearch("")} className='absolute right -translate-x-[10%] translate-y-[10%] cursor-pointer'>X</span>
            }
          </div>
        </div>
        <h3 className="mb p-5">Filter by</h3>
        <div className="border border-cgray mb">
          <h4 className="Bgw mb">Your budget per day</h4>
          <div className="p-5 space-y-2">
            <div className="flex">
              <input
                className="wd20"
                onChange={e => setbudget(e.target.id)}
                id="verylow"
                type="radio"
                name="price"
              />
              <label htmlFor="verylow"> $ 0 - $ 200</label>
            </div>
            <div className="flex">
              <input
                className="wd20"
                onChange={e => setbudget(e.target.id)}
                id="low"
                type="radio"
                name="price"
              />
              <label htmlFor="low"> $ 200 - $ 500</label>
            </div>
            <div className="flex">
              <input
                className="wd20"
                onChange={e => setbudget(e.target.id)}
                id="economy"
                type="radio"
                name="price"
              />
              <label htmlFor="economy"> $ 500 - $ 1,000</label>
            </div>
            <div className="flex">
              <input
                className="wd20"
                onChange={e => setbudget(e.target.id)}
                id="high"
                type="radio"
                name="price"
              />
              <label htmlFor="high"> $ 1,000 - $ 2,000</label>
            </div>
            <div className="flex">
              <input
                className="wd20"
                onChange={e => setbudget(e.target.id)}
                id="veryhigh"
                type="radio"
                name="price"
              />
              <label htmlFor="veryhigh"> $ 2,000 - $ 5,000</label>
            </div>
            <div className="flex">
              <label htmlFor="range">Set your own budget</label>
              <input
                id="range"
                onChange={e => setbudget(e.target.id)}
                className="wd20"
                type="range"
                min="0"
                max="2"
              />
            </div>
            <div className={style.borederD}>
              <div className="flex">
                <div className={style.borederD}>Min budget</div>
                <div className={style.borederD}>Max budget</div>
              </div>
              <p>Press Enter to filter</p>
            </div>
          </div>
        </div>
        <div className="border border-cgray mb">
          <h4 className="Bgw">Rating</h4>
          <div>
            <h5 style={{ padding: "15px" }}>Show only ratings more than</h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="border border-cgray mb"
                onClick={()=>setpropertyClass(1)}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:'pointer'
                }}
              >
                1 <FaStar className="gold" />{" "}
              </div>
              <div
                className="border border-cgray mb"
                onClick={()=>setpropertyClass(2)}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:'pointer'
                }}
              >
                2 <FaStar className="gold" />{" "}
              </div>
              <div
                className="border border-cgray mb"
                onClick={()=>setpropertyClass(3)}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:'pointer'
                }}
              >
                3 <FaStar className="gold" />{" "}
              </div>
              <div
                className="border border-cgray mb"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:'pointer'
                }} onClick={()=>setpropertyClass(4)}
              >
                4 <FaStar className="gold" />{" "}
              </div>
              <div
                className="border border-cgray mb"
                onClick={()=>setpropertyClass(5)}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:'pointer'
                }}
              >
                5 <FaStar className="gold" />
              </div>
            </div>
          </div>
          <div />
        </div>
      </aside>
  );
};
