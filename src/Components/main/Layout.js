import React,{useState,useContext} from 'react'
import { Outlet } from 'react-router-dom'
import { Navmemo } from '../Nav/Navbbar'
import { Footter } from '../Footer/Footter'

export const DateApi = React.createContext()
export const DataApi = DateApi.Provider
export const Layout = () => {
  const getDestinat=[...new Set(JSON.parse( localStorage.getItem('dest')))]
  const [Destinat,setDestinat]=useState(
    {
      city_name: '' || getDestinat[0].city_name,
      dest_id : '' || getDestinat[0].dest_id ,
      arrival_date:'',
      departure_date:'',
      adults:''|| '1',
      room_qty:'' || '1',
      page_number:'' || '1',
      dest_type:''|| getDestinat[0].search_type
    }
  )
  const SearchBarItem={getDestinat ,Destinat,setDestinat}
  return (<>
  <Navmemo/>
      <DataApi value={SearchBarItem}>
    <Outlet/> 
    </DataApi>
      
  <Footter/>
  </>
  )
}
