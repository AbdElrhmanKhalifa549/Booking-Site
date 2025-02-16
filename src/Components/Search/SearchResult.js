import React, { useCallback, useContext, useEffect, useState } from "react";
import { DateApi } from "../main/Layout";
import { SearchBar } from "./SearchBar";

import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

import { DestinationApi } from "../api/DestinationApi";
import { GoAlert } from "react-icons/go";
import { AsideFilter } from "./ForSearchResult/AsideFilter";
import { Pagination } from "./ForSearchResult/Pagination";
import { SearchHotel, Sort } from "../api/SearchHotel";

export const SearchResult = () => {
  const navigator = useNavigate();

  const { Destinat, setDestinat } = useContext(DateApi);
  const [currentPage, setcurrentPage] = useState(1);

  const [inputSearch, setinputSearch] = useState("");
  const [minprice, setminprice] = useState("");
  const [maxprice, setmaxprice] = useState("");
  const [budget, setbudget] = useState("");

  const [hotels, sethotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [titleSearch, settitleSearch] = useState();

  const [sortinput, setsortinput] = useState([]);

  const paginationpage = useCallback(
    () => {
      setDestinat(prves => ({ ...prves, page_number: currentPage }));
    },
    [currentPage]
  );
  //
  useEffect(
    () => {
      if (!localStorage.getItem("dest")) {
        DestinationApi();
      }
      paginationpage();
       handleSearch(Destinat);
    },
    [Destinat.sort]
  );

  const getSortkey = e => {
    const x = sortinput.find(item => item.title === e.target.value);
    if (x) {
      setDestinat(prevs => ({ ...prevs, sort: x.id }));
    }
  };

  const handleSearch = useCallback(
    async params => {
      setLoading(true);
      try {
        const hotelresponse = await SearchHotel(params);
        sethotels(hotelresponse.data.hotels);
        const [title] = hotelresponse.data.meta;
        settitleSearch(title);

        const Sortby = await Sort(params);
        setsortinput(Sortby.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [Destinat]
  );

  function Product(id) {
    setDestinat(prevs => ({ ...prevs, hotel_id: id }));
    navigator("/product");
  }

  return (
    <div>
      {loading
        ? <div className={style.BgLoader}>
            <span className={style.loader} />
          </div>
        : null}
      {hotels.length >= 1
        ? <div className={" mb-5"}>
            <SearchBar />

            <main style={{ width: "80%", margin: "auto" }}>
              <div className={style.displayGrid}>
                <AsideFilter
                  inputSearch={inputSearch}
                  setinputSearch={setinputSearch}
                  setminprice={setminprice}
                  setmaxprice={setmaxprice}
                  budget={budget}
                  setbudget={setbudget}
                />

                <section>
                  <div className={style.displayGridSort}>
                    <h2>
                      <strong>{Destinat.city_name}</strong> :{" "}
                      {titleSearch.title} search results found
                    </h2>
                    <input
                      list="sort"
                      type="text"
                      onChange={getSortkey}
                      placeholder="Sort by"
                    />
                    <datalist id="sort">
                      {sortinput.map(ele =>
                        <option key={ele.id} value={ele.title}>
                          {ele.title}
                        </option>
                      )}
                    </datalist>
                  </div>

                  {hotels
                    .filter(
                      item =>
                        (inputSearch === ""
                          ? item
                          : item.property.name
                              .toLowerCase()
                              .includes(inputSearch.toLowerCase())) &&
                        (budget === ""
                          ? item
                          : item.property.priceBreakdown.grossPrice.value >=
                              minprice &&
                            item.property.priceBreakdown.grossPrice.value <=
                              maxprice)
                    )
                    .map(hotel =>
                      <div key={hotel.hotel_id} className={style.cardContainer}>
                        
                          <figure className="h-full">
                            <img className="h-full" src={hotel.property.photoUrls} alt="Hotel" />
                          </figure>
                        
                        <div className="grid justify-between">
                          <h3>
                            {hotel.property.name}
                          </h3>
                          <div style={{ display: "flex" }}>
                            <span className={style.fontSize}>
                              4.5({hotel.property.reviewCount}review)
                            </span>
                          </div>
                          <div className="grid justify-between">
                            <h5 className={style.fontSize}>
                              Live a little and celbrate with champagne
                            </h5>
                            <p className={style.fontSize}>
                              {hotel.accessibilityLabel}
                            </p>
                            <button className="w-fit"
                              onClick={() => {
                                Product(hotel.hotel_id);
                              }}
                            >
                              See availability
                            </button>
                          </div>
                        </div>
                        <div className={style.col}>
                          <h4 className={style.bgr}>
                            Book now and receive 15% off
                          </h4>
                          <span className={`${style.bgg} nospan`}> 5% off</span>
                          {hotel.property.priceBreakdown.grossPrice.value !==
                          undefined
                            ? <div style={{ alignSelf: "end" }}>
                                <div style={{ textAlign: "end" }}>
                                  {hotel.property.priceBreakdown
                                    .strikethroughPrice
                                    ? <small>
                                        <del style={{ color: "#EB5757" }}>
                                          ${Math.floor(
                                            hotel.property.priceBreakdown
                                              .strikethroughPrice.value
                                          )}
                                        </del>
                                      </small>
                                    : null}{" "}
                                  ${Math.floor(
                                    hotel.property.priceBreakdown.grossPrice
                                      .value
                                  )}
                                </div>
                                <p className={style.fontSize}>
                                  Includes taxes and fees
                                </p>
                              </div>
                            : null}
                        </div>
                        <div />
                      </div>
                    )}

                  {titleSearch.title
                    ? <Pagination
                        currentPage={currentPage}
                        setcurrentPage={setcurrentPage}
                        titleSearch={titleSearch}
                      />
                    : `<>>>>>${titleSearch.title}`}
                </section>
              </div>
              <div className={`warning mb-5`}>
                <div className="warnicon">
                  <GoAlert />
                </div>
                <p>
                  Check the latest COVID-19 restrictions before you travel.{" "}
                  <span>Learn more</span>{" "}
                </p>
              </div>
            </main>
          </div>
        : "....."}
      {/* <main >
          <div className={style.displayGrid}>        
       
        
          <AsideFilter />
          
       
        <section>
          <div className={style.displayGridSort}>
            <h2><strong></strong> : search results found</h2>
            <input list='sort' type='text' onChange={getSortkey} placeholder='Sort by' />
            <datalist id='sort'>
              <option></option>
            </datalist>
          </div>


        <div className={style.cardContainer}>
        <div>
            <figure><img src='assets/header.png' alt='Hotel'></img></figure>
        </div>
        <div>
            <h3></h3>
            <div style={{display:'flex'}}>
                <span className={style.fontSize}>4.5(review)</span>
                </div>
            <div>
                <h5 className={style.fontSize}>Live a little and celbrate with champagne</h5>
                <p className={style.fontSize}></p>
                <button >See availability</button>
            </div>
        </div>
        <div className={style.col}>
                <h4 className={style.bgr}>Book now and receive 15% off</h4>
                <span className={style.bgg}> 5% off</span>
            
            <div style={{alignSelf:'end'}}>
                <div style={{textAlign:'end'}}> 
           <small><del style={{color:'#EB5757'}}></del></small> </div> 
                <p className={style.fontSize}>Includes taxes and fees</p>
            </div>
        </div>
        <div>
      </div>
    </div>   
         
          
    
          
  </section>
         </div>
         <div className={`warning mb-5`}><div className='warnicon'><GoAlert/></div><p>Check the latest COVID-19 restrictions before you travel. <span>Learn more</span> </p></div>
        </main> */}
    </div>
  );
};
