import logo from './logo.svg';
import './App.css';
import AboutComicsFriends from './content/aboutComicsFriends/AboutComicsFriends.js';
//import logoMenu from './logoMenu.png';

function App() {
  return (
    <div>
      <div className='menuApp'>
        <section>
          <img className='logoMenu' src='logoMenu.png' alt=""/>
        </section>
        <nav>
          <ul className='homeMenuList'>
            <li><a href="#">Home</a></li>
            <li><a href="#">First collection</a></li>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">Wallet2</a></li>
            <li><a href="#">Wallet3</a></li>
            <li><a href="#">Wallet4</a></li>
          </ul>
        </nav>
        <section className='authentification'>
          Authentification
        </section>  
      </div>
      <div className='content'>
          <AboutComicsFriends/>
        </div>
    </div>
  );
}

export default App;
