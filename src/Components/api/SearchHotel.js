import axios from 'axios';

export const SearchHotel = async (params)=>{
const {sort,adults,dest_id,room_qty,dest_type,arrival_date,departure_date,page_number} = params ;
 
const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
  params: {
    sort_by: `${sort}`,
    dest_id: `${dest_id}`,
    search_type: `${dest_type}`,
    adults: `${adults}`,
    arrival_date:`${arrival_date}`,
    departure_date:`${departure_date}`,
    children_age: '0,17',
    room_qty: `${room_qty}`,
    page_number: `${page_number}`,
    units: 'metric',
    temperature_unit: 'c',
    languagecode: 'en-us',
    currency_code: 'AED'
  },
  headers: {
    'x-rapidapi-key': 'f94c0c9b9emsh2781ad4dbeb8cbfp130d62jsnd0a3d32a16b1',
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
  }
};

try {
	const response= await axios.request(options);
  return response.data;
} catch (error) {
	console.error(error);
} }


export const Sort = async(params)=>{
  const {adults,dest_id,room_qty,dest_type,arrival_date,departure_date,} = params ;
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy',
    params: {
      dest_id: `${dest_id}`,
      search_type: `${dest_type}`,
      adults: `${adults}`,
      children_age: '1,17',
      room_qty: `${room_qty}`,
      arrival_date:`${arrival_date}`,
      departure_date:`${departure_date}`
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