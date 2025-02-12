import React, { useMemo } from 'react'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";


import style from '../style.module.css'
export const Pagination = ({titleSearch,currentPage,setcurrentPage}) => { 
    const pageTotla=Math.floor( parseInt(titleSearch.title)/20)
    console.log(pageTotla)
    const pagePagination=useMemo(()=>{
        const array =[]
        const threeDote = '...'
        if(pageTotla){
          for(let i=currentPage; i <=pageTotla ; i++ ){
            array.push(i)
            console.log('1')
        }
          array.splice(3,pageTotla- 1,threeDote,pageTotla )
          } if(currentPage === threeDote ){
            setcurrentPage (1)
            console.log('2')
          }
          if(currentPage>=pageTotla-2){
            array.splice(-2)
            console.log('3')
          }else{console.log('Else')}
        return array

    },[currentPage])
    
    


//     const currentpage= 1
//     const pagePagination=useMemo(()=>{
//         const array = []
        
//         if(pageTotla <= 8){
//     for(var i= 1 ; i<=pageTotla; i++){
//         array.push(i)
//     } }
//     else {
//         if( currentpage <=4){
//         for(var i=1 ; i <=3;i++){
//         array.push(i)
//         }
//         array.push('...');
//         array.push(pageTotla);
//     } else if (currentpage >= pageTotla - 3){
//         array.push(1);
//         array.push('...');
//         for (let i = pageTotla - 2; i <= pageTotla; i++) {
//         array.push(i);
//     } }else {
//         array.push(currentpage);
//         array.push(currentpage+1);
//         array.push(currentpage+2);
//         array.push('...');
//         array.push(pageTotla);
//     }
//     return array;
    
// }} , [pageTotla,currentpage])
 console.log(currentPage);
 
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
