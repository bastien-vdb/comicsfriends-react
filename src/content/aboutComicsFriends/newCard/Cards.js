import './cards.css';

export default function Card () {return (

<div className='cardComponent'
>
  <h1 className='pt-8 pl-10 pr-10 md:pl-48 md:pr-48 lg:pl-72 lg:pr-72 mb-20'>Comics Friends’ Genesis NFT collection</h1>
  <p className='pl-10 pr-10 md:pl-48 md:pr-48 lg:pl-72 lg:pr-72 mb-20'>The Comic friends’ NFT collection will consist of 4 different comics bubbles giving access to the whole Comics Friends ecosystem, including access to the Metaverse Museum and the Web 3 forum, as well as advantages on upcoming drops.
    The different levels will be ranked by 4 different colors:
    Black being the least common and red being the most common. Individual cards will have different advantages.
  </p>

  <div className='cardbody'>
      
    <div className="theContainer">

      <div className="card">
        <div className="face face1">
          <div style={{color:'white', fontSize:'0.8em'}} className="content">
            <span className="stars"></span>
            <h2 style={{fontWeight:'bold', color:'#f3152b'}}>Red Card</h2>
            <ul>
              <li><i style={{fontSize:'1.5em', color:'#f3152b'}} className="bi bi-check-all"> </i>Advantages on all upcoming NFT collections by the Comics Friends</li>
              <li><i style={{fontSize:'1.5em', color:'#f3152b'}} className="bi bi-check-all"> </i>Virtual Museum: Right to expose works in upcoming exhibitions</li>
              <li><i style={{fontSize:'1.5em', color:'#f3152b'}} className="bi bi-check-all"> </i>Access to the CF</li>
              <li><i style={{fontSize:'1.5em', color:'#f3152b'}} className="bi bi-check-all"> </i>Forum: Name within the museum</li>
              <li><i style={{fontSize:'1.5em', color:'#f3152b'}} className="bi bi-check-all"> </i>Having your name as a donator on the wall of the museum</li>
            </ul>
          </div>
        </div>
        <div className="face face2">
          <h2>Red</h2>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div style={{color:'white', fontSize:'0.8em'}} className="content">
            <span className="stars"></span>
            <h2 style={{fontWeight:'bold', color:'dodgerblue'}}>Blue Card</h2>
            <ul>
              <li><i style={{fontSize:'1.5em', color:'dodgerblue'}} className="bi bi-check-all"> </i>Advantages on the Moebius NFT Collection</li>
              <li><i style={{fontSize:'1.5em', color:'dodgerblue'}} className="bi bi-check-all"> </i>Right to expose works in upcoming exhibitions</li>
              <li><i style={{fontSize:'1.5em', color:'dodgerblue'}} className="bi bi-check-all"> </i>Access to the CF Forum</li>
              <li><i style={{fontSize:'1.5em', color:'dodgerblue'}} className="bi bi-check-all"> </i>Name within the museum</li>
              <li><i style={{fontSize:'1.5em', color:'dodgerblue'}} className="bi bi-check-all"> </i>Having your name as a donator on the wall of the museum</li>
            </ul>
          </div>
        </div>
        <div className="face face2">
          <h2>Blue</h2>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div style={{color:'white', fontSize:'0.8em'}} className="content">
            <span className="stars"></span>
            <h2 style={{fontWeight:'bold', color:'#fff148'}}>Yellow Card</h2>
            <ul>
              <li><i style={{fontSize:'1.5em', color:'#fff148'}} className="bi bi-check-all"> </i>The right to share artwork to the permanent museum collection and upcoming special temporary exhibitions</li>
              <li><i style={{fontSize:'1.5em', color:'#fff148'}} className="bi bi-check-all"> </i>Advantages on all upcoming NFT collections created by the CF Virtual Museum</li>
              <li><i style={{fontSize:'1.5em', color:'#fff148'}} className="bi bi-check-all"> </i>Access to the Comics Friends Forum and Name within the museum</li>
              <li><i style={{fontSize:'1.5em', color:'#fff148'}} className="bi bi-check-all"> </i>Having your name as a donator on the wall of the museum</li>
            </ul>
          </div>
        </div>
        <div className="face face2">
          <h2>Yellow</h2>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div style={{color:'white', fontSize:'0.8em'}} className="content">
            <span className="stars"></span>
            <h2 style={{fontWeight:'bold', color:'white'}}>Black Card</h2>
            <ul>
              <li><i style={{fontSize:'1.5em', color:'white'}} className="bi bi-check-all"> </i>Advantages on all upcoming NFT collections by the Comics Friends</li>
              <li><i style={{fontSize:'1.5em', color:'white'}} className="bi bi-check-all"> </i>Virtual Museum: Right to expose works in upcoming exhibitions</li>
              <li><i style={{fontSize:'1.5em', color:'white'}} className="bi bi-check-all"> </i>Access to the CF</li>
              <li><i style={{fontSize:'1.5em', color:'white'}} className="bi bi-check-all"> </i>Forum: Name within the museum</li>
              <li><i style={{fontSize:'1.5em', color:'white'}} className="bi bi-check-all"> </i>Having your name as a donator on the wall of the museum</li>
            </ul>
          </div>
        </div>
        <div className="face face2">
          <h2>Black</h2>
        </div>
      </div>

    </div>


  </div>
</div>
)}
