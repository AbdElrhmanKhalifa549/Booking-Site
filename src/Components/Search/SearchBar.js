import React, { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { LiaBedSolid } from "react-icons/lia";
import style from "./style.module.css";
import { DataApi } from "../main/Layout";

import { useNavigate } from "react-router-dom";

export const SearchBar = ({ setLoading }) => {
  const { getDestinat, Destinat, setDestinat } = useContext(DataApi);

  const [destination, setdestination] = useState();
  const navigate = useNavigate();

  let nowData = new Date();
  let mainDataArrival = `${nowData
    .getFullYear()
    .toString()}-${(nowData.getMonth() + 1).toString() > 9
    ? (nowData.getMonth() + 1).toString()
    : "0" +
      (nowData.getMonth() + 1).toString()}-${nowData.getDate().toString() >= 10
    ? (nowData.getDate() + 1).toString()
    : (Number("0" + nowData.getDate()) + 1).toString()}`;
  let mainDataDeparture = `${nowData
    .getFullYear()
    .toString()}-${(nowData.getMonth() + 1).toString() > 9
    ? (nowData.getMonth() + 1).toString()
    : "0" +
      (nowData.getMonth() + 1).toString()}-${nowData.getDate().toString() >= 10
    ? (nowData.getDate() + 2).toString()
    : (Number("0" + nowData.getDate()) + 2).toString()}`;

  const getDestinatKey = e => {
    const x = e.target.value;
    setdestination(x);

    const y = getDestinat.find(dest => dest.city_name === x);
    if (y) {
      setDestinat(prevParams => ({ ...prevParams, dest_id: y.dest_id }));
      setDestinat(prevParams => ({ ...prevParams, dest_type: y.dest_type }));
      setDestinat(prevParams => ({ ...prevParams, city_name: y.city_name }));
    }
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setDestinat(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };


  let dateBack = e => {
    if (e.target.value <= mainDataArrival) {
      e.target.value = mainDataArrival;
    } else {
    }
  };

  if (Destinat.arrival_date === "" && Destinat.departure_date === "") {
    Destinat.arrival_date = mainDataArrival;
    Destinat.departure_date = mainDataDeparture;
  }
  function handelForm(e) {
    e.preventDefault();
    hadlepath();
  }

  let hadlepath = () => navigate("/search");

  return (
    <form className={style.SearchContainer} onSubmit={handelForm}>
      <div className={style.icon}>
        <div className={destination ? style.disp : style.lcicon}>
          <CiLocationOn />
        </div>

        <input
          list="city"
          value={destination}
        
          onChange={getDestinatKey}
          defaultValue={getDestinat[0].city_name}
          placeholder="Where are you going?"
        />
        <datalist id="city" name="city">
          {getDestinat
            ? getDestinat.map(dest =>
                <option key={dest.dest_id} value={dest.city_name} />
              )
            : ""}
        </datalist>
      </div>

      <div className={style.icon}>
        <input
          type="date"
          onBlur={e => dateBack(e)}
          name="arrival_date"
          defaultValue={mainDataArrival}
          onChange={handleInputChange}
          placeholder="Check in date"
        />
      </div>

      <div className={style.icon}>
        <input
          type="date"
          onBlur={e => dateBack(e)}
          name="departure_date"
          defaultValue={mainDataDeparture}
          onChange={handleInputChange}
          placeholder="Check out date"
        />
      </div>

      <div className={style.icon}>
        <div className={destination ? style.disp : style.lcicon}>
          <GrUserManager />
        </div>
        <input
          type="number"
          min={1}
          max={8}
          onBlur={e => e.target.value <= 8}
          name="adults"
          defaultValue={1}
          onChange={handleInputChange}
          placeholder="Guests"
        />
      </div>

      <div className={style.icon}>
        <div className={destination ? style.disp : style.lcicon}>
          <LiaBedSolid />{" "}
        </div>
        <input
          type="number"
          min={1}
          max={4}
          onBlur={e => e.target.value <= 4}
          name="room_qty"
          defaultValue={1}
          onChange={handleInputChange}
          placeholder="Rooms"
        />
      </div>

      <div className={style.icon}>
        <button>Search</button>
      </div>
    </form>
  );
};
