import AboutComicsFriends from './content/aboutComicsFriends/AboutComicsFriends.js';
import Account from './Account/Account';
import 'antd/dist/antd.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

function App() {

  return (
    <div>
      <div className='navBarMobile'>
        <div className='mobileLogo'>
          <span>Comics Friends</span>
        </div>
        <i style={{fontSize:'30px', color:'#124265'}} class="bi bi-list"></i>
      </div>
      <div className='mobileMenu'>
        <div className='mobileMask'></div>
        <div className='menuAppMobile'></div>
      </div>
      
      <div className='menuApp'>
        <section>
          <img className='logoMenu' src='logoMenu.png' alt="Logo menu"/>
        </section>
        <nav>
          <ul className='homeMenuList'>
            <li><a href="#introduction">First collection</a></li>
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
