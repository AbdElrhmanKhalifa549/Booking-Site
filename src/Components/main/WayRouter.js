import React from 'react'
import { Navigate } from 'react-router-dom'

export  function WayRouter({children}){

  if(localStorage.getItem('Isloggin')==='yes'){
    return children
    
  }else {
    return <Navigate to={'/signin'} />
  }
}


