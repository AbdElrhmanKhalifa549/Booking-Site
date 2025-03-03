import axios from 'axios'
import React, { useEffect } from 'react'


const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
  params: {query: 'man'},
  headers: {
    'x-rapidapi-key': '3ddbd8ac46mshcf611117e717eaep160a40jsn5d6be89d69c9',
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
  }
};


export const DestinationApi = async () => {
  try {          
      const {data : {data}} = await axios.request(options)
            
            return data
            
            } catch (error) {
            return error
            }
};