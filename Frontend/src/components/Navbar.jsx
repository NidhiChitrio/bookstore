import React, { useEffect } from 'react';
import { useState } from "react";
import Login from './Login';
import Favicon from '../../public/Favicon2.png'

function Navbar() {
    /*************************************  Hook **************************** */
    const [sticky,setSticky]=useState(false)
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>0){
                setSticky(true)
            }    
            else{
                setSticky(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }

    })
    /*******************************To stop repeating list items******************************/
    const navItems=(
        <>
        <li><a href='/'>Home</a></li>
      <li><a href='/course'>Course</a></li>
      <li><a href='/contact'>Contact </a></li>
      <li><a href='/about'>About</a></li>
        </>
    )
  return (
    /**********************Main Div******************************/
    <>
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 right-0 left-0 z-50 ${
        sticky?"sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""
    }`}>
    <div className="navbar">
  <div className="navbar-start">
    {/********************* Hamburger menu *****************/}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">{navItems}</ul>
    </div>
    {/********************************* BookStore Icon tag ****************************8*/}
    <div className="flex"><img src={Favicon} width="30" height="30" px="2" alt="books" />
    <a href="/" className="text-2xl mt-4 px-2 font-bold cursor-pointer">BookBugs</a>
    </div>
  </div>
  {/*************************************second div starts***************************/}
  <div className="navbar-end space-x-3">
    {/************************Centre Items*****************************/}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-12">{navItems}</ul>
  </div>
  {/********************************Search button***************************************************/}
  
{/*****************************************Dark mode effect button***************************************************88*/}

{/********************************Login button************************************************/}
  <div className>
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
    <Login/>
  </div>
</div>
</div>
    </div>
    </>
  );
}

export default Navbar;

