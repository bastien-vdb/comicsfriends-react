import React, { useEffect, useState } from 'react';
import './aboutComicsFriends.css';
import comicsFriendspic1 from './comicsFriendspic1.png';
import comicsFriendspic2 from './comicsFriendspic2.png';
import comicsFriendspic3 from './comicsFriendspic3.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function AboutComicsFriends(props) {

    const [isCardClicked, setCardClicked] = useState(true);
    const [isRedCardVisible, setRedCardVisible] = useState('none');
    const [isBlueCardVisible, setBlueCardVisible] = useState('none');
    const [isYellowCardVisible, setYellowCardVisible] = useState('none');
    const [isBlackCardVisible, setBlackCardVisible] = useState('none');

    const showCard = (card) => {
        if (card === 'red') {
            setRedCardVisible('block');
            setBlueCardVisible('none');
            setYellowCardVisible('none');
            setBlackCardVisible('none');
        }
        if (card === 'blue') {
            setRedCardVisible('none');
            setBlueCardVisible('block');
            setYellowCardVisible('none');
            setBlackCardVisible('none');
        }
        if (card === 'yellow') {
            setRedCardVisible('none');
            setBlueCardVisible('none');
            setYellowCardVisible('block');
            setBlackCardVisible('none');
        }
        if (card === 'black') {
            setRedCardVisible('none');
            setBlueCardVisible('none');
            setYellowCardVisible('none');
            setBlackCardVisible('block');
        }
    }

    useEffect(()=>{
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 3000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          });
    },[])

    return (
        <div>
            <div>
                <section className='section section1' id='introduction'>
                    <div data-aos="fade-up-right" className='line line1'>
                        <div className='bloc bloc1'>
                            <div>
                                <img src={comicsFriendspic1} alt="comicsFriendspic1"/>
                            </div>
                        </div>
                        <div className='bloc bloc2 space'>
                        </div>
                    </div>
                    <div data-aos="fade-down-left" className='line line2'>
                        <div className='bloc bloc1 space'>
                            <div></div>
                        </div>
                        <div className='bloc bloc2'>
                                <div>
                                    <h1>Introduction to Comics Friends</h1>
                                    <p>
                                        Welcome to Comics Friends, home to all comic book lovers and admirers.
                                        Comics Friends is a project built on the shared passion for comic books and the idea of bringing a
                                        community of comic book lovers together through the use of NFTs.

                                        To achieve this vision, Comics Friends will create the first ever virtual comic book artist museum. 
                                        This museum will showcase the works of many renowned comic book artists from around the world. 
                                        The Comics Friends platform will also grant users access to a forum, unlocking the doors to a community of artists, 
                                        art collectors, and connoisseurs. Holders will be able to share their vision, thoughts, and critiques
                                        about existing and upcoming collections or exhibitions as well as all other Comics Friends-related events.
                                    </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section2' id='goals'>
                    <h1>Comics Friends Goals</h1>
                    <img data-aos="zoom-out-down" className='comicsFriendspic3' src={comicsFriendspic3} alt="comicsFriendspic3"/>
                    <div className='line line1'>
                        <div data-aos="zoom-in" className='bloc bloc1'>
                            <h2>Guiding artists</h2>
                            <p>
                                In the past comic book, artists have often been overlooked in the world of art or they haven’t 
                                been given the due credit that they deserve. Artists have struggled with obtaining rights and 
                                receiving royalty rates. Comics Friends wants to help artists by giving them back the visibility 
                                and credit they deserve. At comics Friends, we guide artists whether it be through the creation 
                                of their own NFT collection or by exposing their work on a large virtual stage. We work very 
                                closely with artists from the beginning throughout and after the creation of their project, 
                                to ensure that the artists’ vision and desired outcome are respected at each step of the way.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className='bloc bloc2'>
                            <h2>Creating the first-ever virtual comic museum</h2>
                            <p>
                            Comic book art is often seen as less than in the eyes of many, which is why Comics Friends wants to shed a 
                            spotlight on all of these incredible artists and their works. Although there are already several comic book 
                            museums around the world and comic book conferences, there is no place where all comic book lovers and artists
                            can come together online and display their artwork. To create the first-ever virtual comic book museum for 
                            collectors and artists is to create a community where collectors can display their work and share it with a
                            community of like-minded individuals. This is a space where collectors can finally being forward the vast 
                            diversity of comic book art and share it with the rest of the world. The museum will display different artists 
                            based on a large selection of themes that will differ throughout the course of the year. These themes will ensure
                            that not only renown artists are put forth but also allowing for younger emerging artists to receive the recognition
                                they deserve.
                            </p>
                        </div>
                        <div data-aos="zoom-in" className='bloc bloc3'>
                            <h2>Creating a Web 3-enabled collectors forum</h2>
                            <p>
                            The Comics Friends forum will act as a communal platform where holders of the CF NFT will be able to 
                            discuss and share ideas on particular collections and artists, as well as all things related to 
                            Comics Friends. The forum will be closed and only accessible to holders of the NFT. The key purpose
                            of the forum is to really act as a place where individuals can challenge the way they think and find
                            new perspectives or discover new artists that they may not have heard of prior. It should act as a 
                            positive and educational space where people can exchange freely without judgement, and learn from one
                            another. A fun space to make new friends.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='section section3' id='genesis'>
                    <div >
                        <h1>Comics Friends’ Genesis NFT collection</h1>
                        <p>
                            The Comic friends’ NFT collection will be made of 4 different comics bubbles giving access to  the whole Comics Friends
                            ecosystem, including access to the Metaverse Museum and the Web 3 forum, as well as benefits on upcoming drops.<br/>
                            The different levels will be ranked by 4 different colours:
                            <ul style={{margin:'3em auto'}}>
                                <li>Red</li>
                                <li>Blue</li>
                                <li>Yellow</li>
                                <li>Black</li>
                            </ul>
                            Black being the least common and red being the most common.
                            Individual cards will have differentiating benefits.
                        </p>
                        <p style={{fontSize:'4em', color:'firebrick', margin: "5em auto", textShadow: "0.2em 0.5em 0.1em #600, 0.4em -0.3em 0.1em "}}>Hover the card below</p>
                    </div>
                    <div className='cardGroup'>
                        <div data-aos="zoom-out-up" onMouseOver={()=>showCard('red')}><span style={{fontSize:'2em' ,borderBottom:'0.1em solid firebrick'}}>RED</span></div>
                        <div data-aos="zoom-out-up" onMouseOver={()=>showCard('blue')}><span style={{fontSize:'2em' ,borderBottom:'0.1em solid dodgerblue'}}>BLUE</span></div>
                        <div data-aos="zoom-in-down" onMouseOver={()=>showCard('yellow')}><span style={{fontSize:'2em' ,borderBottom:'0.1em solid rgb(204, 184, 6)'}}>YELLOW</span></div>
                        <div data-aos="zoom-in-down" onMouseOver={()=>showCard('black')}><span style={{fontSize:'2em' ,borderBottom:'0.1em solid white'}}>BLACK</span></div>
                        <div onClick={()=>setRedCardVisible('none')} style={{display: isRedCardVisible, backgroundColor:'firebrick', border:'1px solid white', height:'fit-content', width: '30em'}}>
                            <div className="flip-card-inner">
                                <div className="flip-card-back">
                                    <h1>RED</h1>
                                    <p>Benefits on all upcoming NFT collections or specific objects created by the Comics Friends</p>
                                    <p>Virtual Museum. - The right to expose works in upcoming exhibitions.</p>
                                    <p>Access to the Comics Friends Forum - Name within the museum.</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>setBlueCardVisible('none')} style={{display: isBlueCardVisible, backgroundColor:'dodgerblue',  border:'1px solid white', height:'fit-content', width: '30em'}}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                        <h1>BLUE</h1>
                                        <p>Benefits on the Moebius NFT Collection.</p>
                                        <p>The right to expose works in upcoming exhibitions.</p>
                                        <p>Access to the Comics Friends Forum</p>
                                        <p>Name within the museum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>setYellowCardVisible('none')} style={{display: isYellowCardVisible, backgroundColor:'rgb(204, 184, 6)', border:'1px solid white', height:'fit-content', width:'30em'}}>
                            <div className="flip-card">
                                <div className="flip-card-back">
                                    <h1 style={{color:'white'}}>YELLOW</h1>
                                    <p>The right to share work to the permanent museum collection and upcoming exhibitions.</p>
                                    <p>Benefits on all upcoming NFT collections or specific objects created by the Comics Friends Virtual Museum.</p>
                                    <p>Access to the Comics Friends Forum</p>
                                    <p>Name within the museum.</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>setBlackCardVisible('none')} style={{display: isBlackCardVisible, backgroundColor:'black', border:'1px solid white', height:'fit-content', width:'30em'}}>
                            <div className="flip-card-inner">
                                <div className="flip-card-back">
                                    <h1>BLACK</h1>
                                    <p>The right to share work to the permanent museum collection and upcoming exhibitions.</p>
                                    <p>Airdrop of the Moebius NFT collection</p>
                                    <p>Benefits on all upcoming NFT collections or specific objects created by the Comics Friends Virtual Museum.</p>
                                    <p>Access to the Comics Friends Forum</p>
                                    <p>Name within the museum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section section4' id="partnership">
                    <div className='line line1'>
                        <div className='bloc bloc1'>
                            <div>
                                <img data-aos="fade-left" style={{border:'2px solid rgb(204, 184, 6)'}} src={comicsFriendspic2} alt="comicsFriendspic2"/>
                            </div>
                        </div>
                        <div className='bloc bloc2 space'>
                        </div>
                    </div>
                    <div className='line line2'>
                        <div className='bloc bloc1 space'>
                            <div></div>
                        </div>
                        <div className='bloc bloc2'>
                                <div data-aos="fade-right">
                                    <h1>Comics Friends’ first partner NFT drop</h1>
                                    <p>
                                    The first Comics Friends collection will be a collection by world renown artist Moebius. 
                                    Jean Giraud was a French artist, cartoonist, and writer. He has been described as the most
                                     influential *bande dessinée* artist. His most famous works include the series Blueberry,
                                      Arzach, the Incal and many more.<br/>
                                    The collection is set to launch towards the end of October. Further information will be 
                                    unveiled within the forum after the release of the Comics Friends membership cards.
                                    </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section5'>
                    <div className='team' id='team'>
                        <h1>Team</h1>
                        <p data-aos="fade-up-left">
                            Introducing the Comics Friends team. The team is made up of a range of individuals with expertise 
                            in their individual fields of work. The commonality between all of them is their shared passion 
                            for the comic book universe.
                        </p>
                        <div className='teamList'>
                            <ul data-aos="zoom-in-out" className='t_level1'>
                                <li>Arthur Fuchs - DG musée <li><img src="./teampic/ARFCH.png"/></li></li>
                                <li>Adrien Fuchs - DG ComicsFriends <li><img src="./teampic/ADFCH.png"/></li></li>
                                <li>Ruben Sananes - CEO Player One Labs <li><img src="./teampic/RUSN.png"/></li></li>
                            </ul>
                            <ul data-aos="zoom-in-out" className='t_level2'>
                            <li>Éric Schahl - Lawyer <li><img src="./teampic/ERSCH.png"/></li></li>
                                <li>Alex Vuillaume COO Player one labs <li><img src="./teampic/ALVU.png"/></li></li>
                            </ul>
                            <ul data-aos="zoom-in-out" className='t_level3'>
                                <li>Jennifer Westjohn - DA <li><img src="./teampic/JEWE.png"/></li></li>
                                <li>Bastien Vermot de Boisrolin - Developer <li><img style={{width:'150px'}} src="./teampic/VDBB.png"/></li></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutComicsFriends;