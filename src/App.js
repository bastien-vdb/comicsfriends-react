import AboutComicsFriends from './content/aboutComicsFriends/AboutComicsFriends.js';
import Account from './Account/Account';
import 'antd/dist/antd.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { useState } from 'react';

function App() {

  const [isPanMobileMenuVisible, setPanMobileMenuVisible] = useState('none');

  return (
    <div>
      <div className='navBarMobile'>
        <div className='mobileLogo'>
          <img style={{width:'45%'}} className='logoMenu' src='img_logo_comicsFriends/logoblue comicsfriends_compr.png' alt="Logo menu"/>
        </div>
        <i className="bi bi-list menuBurger" onClick={()=>setPanMobileMenuVisible('block')}></i>
      </div>
      <div style={{display:isPanMobileMenuVisible}} className='mobileMenu'>
        <div style={{display:isPanMobileMenuVisible}} onClick={()=>setPanMobileMenuVisible('none')} className='mobileMask'></div>
        <div style={{display:isPanMobileMenuVisible}} className='menuAppMobile'>
        <i className="bi bi-x-lg menuBurgerClose" onClick={()=>setPanMobileMenuVisible('none')}></i>
          <ul className='menu' onClick={()=>setPanMobileMenuVisible('none')}>
            <li><a href="#introduction">About Comics Friends</a></li>
            <li><a href="#goals">Goals</a></li>
            <li><a href="#genesis">Genesis</a></li>
            <li><a href="#partnership">Partnership</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>
      </div>
      
      <div className='menuApp'>
        <section>
          <img style={{width:'40%'}} className='logoMenu' src='img_logo_comicsFriends/logoblue comicsfriends_compr.png' alt="Logo menu"/>
        </section>
        <nav>
          <ul className='homeMenuList'>
            <li><a href="#introduction">About Comics Friends</a></li>
            <li><a href="#goals">Goals</a></li>
            <li><a href="#genesis">Genesis</a></li>
            <li><a href="#partnership">Partnership</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </nav>
        <section className='authentification'>
          <a href="#"><Account/></a>
        </section>  
      </div>
      <div className='content'>
          <AboutComicsFriends/>
      </div>
    </div>
  );
}

export default App;
