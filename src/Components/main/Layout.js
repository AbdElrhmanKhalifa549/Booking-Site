import React,{useState, useLayoutEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { Navmemo } from '../Nav/Navbbar'
import { Footter } from '../Footer/Footter'
import { DestinationApi } from '../api/DestinationApi'

export const DateApi = React.createContext()
export const DataApi = DateApi.Provider
export const Layout = () => {
  const [getDestinat,setgetDestinat]=useState([])
  const [Destinat,setDestinat]=useState(
    {
      city_name: '',
      dest_id : '' ,
      arrival_date:'',
      departure_date:'',
      adults:''|| '1',
      room_qty:'' || '1',
      page_number:'' || '1',
      dest_type:''
    }
  )
  const SearchBarItem={getDestinat ,Destinat,setDestinat}
const getDestItem =async ()=>{
  let city = await DestinationApi()
  setgetDestinat(city)
  setDestinat((prevs)=> ({...prevs, city_name : city[0].city_name}))
  setDestinat((prevs)=> ({...prevs,dest_id : city[0].dest_id}))
  setDestinat((prevs)=> ({...prevs,dest_type : city[0].dest_type}))
}
  useLayoutEffect(()=>{
    getDestItem() 
  },[])
  return (<>
  <Navmemo/>
      <DataApi value={SearchBarItem}>
    <Outlet/> 
    </DataApi>
      
  <Footter/>
  </>
  )
}
