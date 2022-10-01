import React, { useEffect } from 'react';
import './aboutComicsFriends.css';
import About from './about/About';
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Card from './newCard/Cards';

import Anim3D4 from './anim3D/Anim3D4';
import Blocks from '../blocks2/Blocks';
import Partnership from './Partnership';
import Anim3D_white_gal from './anim3D/Anim3D_white_gal';


function AboutComicsFriends(props) {

    /**** AOS Configuration ****/
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

    const config = {
        maxYaw: 0.2, // Max amount camera can yaw in either direction
        maxPitch: 0.2, // Max amount camera can pitch in either direction
        maxRoll: 0.1, // Max amount camera can roll in either direction
        yawFrequency: 0.2, // Frequency of the the yaw rotation
        pitchFrequency: 0.2, // Frequency of the pitch rotation
        rollFrequency: 0.1, // Frequency of the roll rotation
        intensity: 1, // initial intensity of the shake
        decay: false, // should the intensity decay over time
        decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
        controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
      }

      const config2 = {
        activeLook: true,
        autoForward: false,
        constrainVertical: false,
        enabled: true,
        heightCoef: 1,
        heightMax: 1,
        heightMin: 0,
        heightSpeed: false,
        lookVertical: true,
        lookSpeed: 0.005,
        movementSpeed: 1,
        verticalMax: Math.PI,
        verticalMin: 0,
        }

    return (
        <div style={{overscrollBehavior:'none'}}>
            
            <section>
                <Anim3D_white_gal/> 
            </section>

            <section>
                <h1 style={{fontSize:'5em', backgroundColor:'white'}}>COMIC FRIENDS MUSEUM</h1>
            </section>
            
            <section style={{overflowX:'hidden'}} className='section section1bis'>
                <div data-aos="fade-down-left" className='aboutComicsFriends'>
                    <h1>About Comics Friends</h1>
                    <p style={{lineHeight:'2.2em'   }}>
                        Welcome to Comics Friends, home to all comic books and artwork lovers and admirers.</p>
                    <p>
                        Comics Friends is a project built on the shared passion for comic books and comic artwork
                        and the idea of bringing this community together using NFTs.
                    </p>
                    <p style={{lineHeight:'2.2em'}}>
                        To achieve this vision, Comics Friends will create the first ever virtual comic artist museum.
                        This museum will showcase the work of many renowned comic book artists from around the
                        world. The Comics Friends platform will also grant users access to a forum, unlocking its
                        doors to a community of artists, art collectors, and connoisseurs. Holders will be able to share
                        their vision, thoughts, and critiques about existing and upcoming collections or exhibitions as
                        well as all other Comics Friends-related events.
                    </p>
                </div>
                <div id='goals'></div> {/* Anchorlink: to be sure to arrive at the correct place */}
            </section>
            
            <section>
                <Blocks/>
            </section>
            

            <section>
                <div>
                    <Anim3D4/>
                </div>
            </section>

            <section style={{width:'100%'}} className='panel cardSection'>
                <Card/>
                <div id="partnership"></div>
            </section>

            <section className='panel' style={{width:'100%'}}>
                <Partnership/>
                <div id='team'></div>
            </section>

            <section style={{overflowX:'hidden'}} className='section section5'>
                <div className='team container'>
                    <h1>The team</h1>
                    <p data-aos="fade-up-left">
                        Introducing the Comics Friends team. Thee team is made up of a range of individuals with expertise 
                        in their individual fields of work. The commonality between all of them is their shared passion 
                        for the comic book universe.
                    </p>
                    <div className='teamList'>
                        <ul data-aos="zoom-in-out" className='t_level1'>
                            <div data-aos="fade-right" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_rouge_fond transparent.png' alt='mini logo jaune'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Arthur Fuchs</h2>
                                    <span style={{color:'grey'}}>CEO musée</span>
                                </div>
                            </div>
                            <div data-aos="fade-right" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_lila_fond transparent.png' alt='mini logo lila'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Adrien Fuchs</h2>
                                    <span style={{color:'grey'}}>CEO ComicsFriends</span>
                                </div>
                            </div>
                            <div data-aos="fade-right" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_maron_fond transparent.png' alt='mini logo marron'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Ruben Sananes</h2>
                                    <span style={{color:'grey'}}>CEO Player One Labs</span>
                                </div>
                            </div>
                            <div data-aos="fade-right" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_orange_fond transparent.png' alt='mini logo orange'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Éric Schahl</h2>
                                    <span style={{color:'grey'}}>Trademark law advisor</span>
                                </div>
                            </div>
                        </ul>
                        <ul className='t_level2'>
                            <div data-aos="fade-left" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_jaune_fond transparent.png' alt='mini logo rose'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Alex Vuillaume</h2>
                                    <span style={{color:'grey'}}>COO Player one labs</span>
                                </div>
                            </div>
                            <div data-aos="fade-left" className='member'>
                                <div className='memberImg'>
                                <img style={{width:'8em'}} src='teampic/ComicsFriends_rose_fond transparent.png' alt='mini logo rouge'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Jennifer Westjohn</h2>
                                    <span style={{color:'grey'}}>AD</span>
                                </div>
                            </div>
                            <div data-aos="fade-left" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_vert_fond transparent.png' alt='mini logo vert'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Bastien Vermot de Boisrolin</h2>
                                    <span style={{color:'grey'}}>CTO</span>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>

            
            <section className="section section6 faq">
                <div className='container'>
                    <div className="faq_block" data-aos="fade-up">

                        <div className="section-title">
                            <h1>Frequently Asked Questions</h1>
                            <p>You will find the most popular questions here</p>
                        </div>

                        <div className="faq-list">
                            <ul>
                                <li data-aos="fade-up">
                                    <a><i className="bi bi-question-circle"></i> What is Comics Friends:</a>
                                    <p>
                                        Comics friends is an exclusive community of individuals with a shared passion of comic
                                        books and artworks, we are comic book lovers, artist and collectors.
                                    </p>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="100">
                                    <a><i className="bi bi-question-circle"></i> How do I mint my Comics Friends NFT:</a>
                                    <p>
                                        The Comics Friends card launch date will be announced in september. Once the date is
                                        announced you can Mint your Card on the website directly or purchase on the secondary
                                        market post mint (Opensea)
                                    </p>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="200">
                                    <a><i className="bi bi-question-circle"></i> How do I determine my rarity:</a>
                                    <p>
                                    The rarity ranking will be determined by which color card you receive, and advantages are
                                    listed on the official website as well as the Forum. You can also view rarity on Opensea.
                                    </p>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="300">
                                    <a><i className="bi bi-question-circle"></i> When can I enter the virtual museum ?</a>
                                    <p>
                                        The virtual museum will be available to all NFT holders and you will be notified 
                                        prior to the opening upon which you will be able to enter by connecting your wallet.
                                    </p>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="400">
                                    <a><i className="bi bi-question-circle"></i> If I have a specific question who can I contact ?</a>
                                    <p>
                                        If you have any specific questions based on your NFT, you can enter the Comics Friends forum
                                        where other community members or moderators will answer any of your questions. If you have 
                                        a question unrelated to the NFT or just a general inquiry about the project, you can open 
                                        a ticket in our discord.
                                    </p>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="500">
                                    <a><i className="bi bi-question-circle"></i> Are there any additional advantages to owning multiple cards ?</a>
                                    <p>
                                        Each card has its own advantages and holding multiple cards from the same category will not give a holder 
                                        additional advantage. However, if you are a holder of two different cards from different categories you 
                                        will receive the benefits from those two categories.
                                    </p>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="600">
                                    <a><i className="bi bi-question-circle"></i> Can I pay by credit card ?</a>
                                    <p>
                                        Yes, you will be able to mint your NFT paying by credit card.
                                    </p>
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </section> 

            <section style={{overflowX:'hidden'}} className='section section7 contact'>
                <div data-aos="fade-up" className='container'>
                    <div className="contact_titleBloc">
                        <h1>Contact</h1>
                        <p>Any question? Contact us right here, right now</p>
                    </div>
                    <About/>
                </div>
            </section>
            
            <section style={{overflowX:'hidden'}} className='section8'>
                <div className='container'>
                    <div className='footer'>
                        <a href="https://eternalstar.io">www.eternalstar.io</a>
                    </div>
                </div>
            </section>
            
        </div>       
    );
}

export default AboutComicsFriends;