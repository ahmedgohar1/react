import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'




export default function App() 
{
  useEffect(()=>{
    const nav = document.getElementsByTagName('nav')[0];
    document.getElementById('current-page').style.marginTop = `${nav.offsetHeight - 1}px`
  },[])

  return <>
    <NavBar/>
    <div id='current-page'>
      <Outlet></Outlet>
    </div>
    <Footer/>
    {/* <i className='fa fa-spinner fa-spin'></i> */}
  </>
}
