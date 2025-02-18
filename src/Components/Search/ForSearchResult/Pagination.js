import React, { useMemo } from 'react'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";


import style from '../style.module.css'
export const Pagination = ({titleSearch,currentPage,setcurrentPage}) => { 
    const pageTotla=Math.floor( parseInt(titleSearch.title)/20)
    
    const pagePagination=useMemo(()=>{
        const array =[]
        const threeDote = '...'
        if(pageTotla){
          for(let i=currentPage; i <=pageTotla ; i++ ){
            array.push(i)
        }
          array.splice(3,pageTotla- 1,threeDote,pageTotla )
          } if(currentPage === threeDote ){
            setcurrentPage (1)
          }
          if(currentPage>=pageTotla-2){
            array.splice(-2)
          }
        return array

    },[currentPage])
    

    return (
    <div>
      {pageTotla? 
        <ul className={style.pagination}>
        
            <li className={style.BoxShadow} style={{display :(currentPage <=1)? 'none' : 'block' }} onClick={()=>setcurrentPage(currentPage-1)}><FcPrevious /></li>
                {pagePagination? pagePagination.map((page,i)=>
                <li  onClick={()=>setcurrentPage(page)} key={i}>{page}</li> ) : ""}
            <li className={style.BoxShadow} style={{display :(currentPage >=pageTotla)? 'none' : 'block' }} onClick={()=>setcurrentPage(currentPage+1)}><FcNext/></li>
        
        </ul> : null}
        

    </div>
  )
}
