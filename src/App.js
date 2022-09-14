import AboutComicsFriends from './content/aboutComicsFriends/AboutComicsFriends.js';
// import Account from './Account/Account';
import 'antd/dist/antd.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { useState } from 'react';

function App() {

  const [isPanMobileMenuVisible, setPanMobileMenuVisible] = useState('none');

  return (
    <div>
      <div id='navBarMobile' className='fixed top-0 left-0 w-full h-18 bg-white z-50 shadow-2xl border-b border-black justify-between items-center flex md:hidden p-2'>
        <div id='mobileLogo'>
          <img id='logoMenu' className='h-14 p-1' src='img_logo_comicsFriends/logoblue comicsfriends_compr.png' alt="Logo menu"/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setPanMobileMenuVisible('block')} className="h-10 w-10 text-myblue cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div style={{display:isPanMobileMenuVisible}} id='mobileMenu'>
        <div style={{display:isPanMobileMenuVisible}} onClick={()=>setPanMobileMenuVisible('none')} id='mobileMask' className='top-0 h-screen w-full bg-myblue opacity-90 fixed z-50'></div>
        <div style={{display:isPanMobileMenuVisible}} id='menuAppMobile' className='fixed top-0 left-0 h-5/6 w-11/12 mt-4 mx-3.5 bg-white z-50 overflow-y-scroll'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-myblue relative float-right p-2 cursor-pointer hover:opacity-50 hover:text-blue-400 duration-500" onClick={()=>setPanMobileMenuVisible('none')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
          <ul id='menu' className='text-4xl p-14 mt-14' onClick={()=>setPanMobileMenuVisible('none')}>
            <li className='m-2 mb-12 border-b-myblue border-b'>
              <a className='text-myblue hover:opacity-50 active:opacity-50 focus:opacity-50 duration-500' href="#introduction">About Comics Friends</a>
            </li>
            <li className='m-2 mb-12 border-b-myblue border-b'>
              <a className='text-myblue hover:opacity-50 active:opacity-50 focus:opacity-50 duration-500' href="#goals">Goals</a>
            </li>
            <li className='m-2 mb-12 border-b-myblue border-b'>
              <a className='text-myblue hover:opacity-50 active:opacity-50 focus:opacity-50 duration-500' href="#genesis">Genesis</a>
            </li>
            <li className='m-2 mb-12 border-b-myblue border-b'>
              <a className='text-myblue hover:opacity-50 active:opacity-50 focus:opacity-50 duration-500' href="#partnership">Partnership</a>
            </li>
            <li className='m-2 mb-12 border-b-myblue border-b'>
              <a className='text-myblue hover:opacity-50 active:opacity-50 focus:opacity-50 duration-500' href="#team">Team</a>
            </li>
            <li>
            <section id='authentification' className='bg-myblue py-2 px-2 text-3xl rounded hover:scale-110 duration-500'>
              {/* <a className='text-white hover:text-white' href="#"><Account/></a> */}
            </section>
            </li>
          </ul>
        </div>
      </div>
      
      <div id='menuApp' className='p-4 bg-white hidden md:flex justify-between items-center shadow-2xl border-b border-b-gray-300 z-50 w-full top-0 h-16 fixed text-sm'>
        <section className='py-1'>
          <img id='logoMenu' className='h-14 p-1' src='img_logo_comicsFriends/logoblue comicsfriends_compr.png' alt="Logo menu"/>
        </section>
        <nav>
          <ul id='homeMenuList' className='flex justify-between mb-0'>
            <li className='mx-2 hover:border-b hover:border-black hover:scale-110 duration-300'><a className='hover:text-black text-myblue' href="#introduction">About Comics Friends</a></li>
            <li className='mx-2 hover:border-b hover:border-black hover:scale-110 duration-300'><a className='hover:text-black text-myblue' href="#goals">Goals</a></li>
            <li className='mx-2 hover:border-b hover:border-black hover:scale-110 duration-300'><a className='hover:text-black text-myblue' href="#genesis">Genesis</a></li>
            <li className='mx-2 hover:border-b hover:border-black hover:scale-110 duration-300'><a className='hover:text-black text-myblue' href="#partnership">Partnership</a></li>
            <li className='mx-2 hover:border-b hover:border-black hover:scale-110 duration-300'><a className='hover:text-black text-myblue' href="#team">Team</a></li>
          </ul>
        </nav>
        <section id='authentification' className='bg-myblue py-2 px-3 rounded hover:scale-110 duration-500'>
          {/* <a className='text-white hover:text-white' href="#"><Account/></a> */}
        </section>
      </div>
      <div id='content'>
          <AboutComicsFriends/>
      </div>
    </div>
  );
}

export default App;
