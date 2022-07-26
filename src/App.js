import logo from './logo.svg';
import AboutComicsFriends from './content/aboutComicsFriends/AboutComicsFriends.js';
import Account from './Account/Account';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {

  return (
    <div>
      <div className='menuApp'>
        <section>
          <img className='logoMenu' src='logoMenu.png' alt=""/>
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
