import React from 'react'
import axios from 'axios';

export const HotelDetails = async (prams) => {
    const{adults,arrival_date,departure_date,hotel_id,room_qty}=prams
    const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails',
        params: {
            hotel_id: `${hotel_id}`,
            adults: `${adults}`,
            arrival_date:`${arrival_date}`,
            departure_date:`${departure_date}`,
            children_age: '1,17',
            room_qty: `${room_qty}`,
            units: 'metric' || 'imperial',
            temperature_unit: 'c',
            languagecode: 'en-us',
            currency_code: 'EUR'
        },
        headers: {
            'x-rapidapi-key': 'f94c0c9b9emsh2781ad4dbeb8cbfp130d62jsnd0a3d32a16b1',
            'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
        }
      };
      
      try {
            const {data : {data : dataHotel}} = await axios.request(options);
            return dataHotel;
      } catch (error) {
            console.error(error);
      }
  
    return (
    <div></div>
  )
}

// ////////////////Description///////////
export const Description=async(prams)=>{
    const {hotel_id} = prams

    const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo',
        params: {
          hotel_id: `${hotel_id}`,
          languagecode: 'en-us'
        },
        headers: {
          'x-rapidapi-key': 'f94c0c9b9emsh2781ad4dbeb8cbfp130d62jsnd0a3d32a16b1',
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          console.error(error);
      }



    
}