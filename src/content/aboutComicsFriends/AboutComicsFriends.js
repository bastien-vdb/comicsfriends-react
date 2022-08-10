import React, { useEffect } from 'react';
import './aboutComicsFriends.css';
import Anim3D2 from './anim3D/Anim3D2';
import About from './about/About';
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

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

    return (
        <div>
            <section className='section1 anim3D2'>
                <div>
                    <Anim3D2/>
                </div>
            </section>
            <section style={{overflowX:'hidden'}} className='section section1bis'>
                <div data-aos="fade-down-left" className='aboutComicsFriends'>
                    <h1>About Comics Friends</h1>
                    <p style={{lineHeight:'2.2em'}}>
                        Welcome to Comics Friends, home to all comic book lovers and admirers.
                        Comics Friends is a project built on the shared passion for comic books and the idea of bringing a
                        community of comic book lovers together through the use of NFTs.
                    </p>
                    <p style={{lineHeight:'2.2em'}}>
                        To achieve this vision, Comics Friends will create the first ever virtual comic book artist museum. 
                        This museum will showcase the works of many renowned comic book artists from around the world. 
                        The Comics Friends platform will also grant users access to a forum, unlocking the doors to a community of artists, 
                        art collectors, and connoisseurs. Holders will be able to share their vision, thoughts, and critiques
                        about existing and upcoming collections or exhibitions as well as all other Comics Friends-related events.
                    </p>
                </div>
                <div id='goals'></div> {/* Anchorlink: to be sure to arrive at the correct place */}
            </section>
            <section style={{overflowX:'hidden'}} className='section section2'>
                <div className='container'>
                    <h1>Comics Friends Goals</h1>
                    <img data-aos="zoom-out-down" className='comicsFriendspic3' src="img_logo_comicsFriends/comicsFriendspic3.png" alt="comicsFriendspic3"/>
                    <div className='line line1'>
                        <div style={{boxShadow:"10px 10px 10px grey"}} data-aos="zoom-in" className='bloc bloc1'>
                            <h2>Guiding artists</h2>
                            <p>
                                In the past comic book, artists have often been overlooked in the world of art or they haven’t 
                                been given the due credit that they deserve. Artists have struggled with obtaining rights and 
                                receiving royalty rates.
                            </p> 
                            <p>Comics Friends wants to help artists by giving them back the visibility 
                                and credit they deserve. 
                                At comics Friends, we guide artists whether it be through the creation 
                                of their own NFT collection or by exposing their work on a large virtual stage.
                            </p>
                            <p>
                                We work very closely with artists from the beginning throughout and after the creation of their project, 
                                to ensure that the artists’ vision and desired outcome are respected at each step of the way.
                            </p>
                        </div>
                        <div style={{boxShadow:"10px 10px 10px grey"}} data-aos="zoom-in" className='bloc bloc2'>
                            <h2>Creating the first-ever virtual comic museum</h2>
                            <p>
                                Comic book art is often seen as less than in the eyes of many, which is why Comics Friends wants to shed a 
                                spotlight on all of these incredible artists and their works. Although there are already several comic book 
                                museums around the world and comic book conferences, there is no place where all comic book lovers and artists
                                can come together online and display their artwork.
                            </p>
                            <p>
                                To create the first-ever virtual comic book museum for collectors and artists is to create a community 
                                where collectors can display their work and share it with a community of like-minded individuals. 
                                This is a space where collectors can finally being forward the vast diversity of comic book art and share it with the rest of the world.
                            </p>
                            <p>
                                The museum will display different artists based on a large selection of themes that will differ throughout the course of the year. 
                                These themes will ensure that not only renown artists are put forth but also allowing for younger emerging artists to receive the recognition
                                they deserve.
                            </p>
                        </div>
                        <div style={{boxShadow:"10px 10px 10px grey"}} data-aos="zoom-in" className='bloc bloc3'>
                            <h2>Creating a Web3 enabled collectors forum</h2>
                            <p>
                                The Comics Friends forum will act as a communal platform where holders of the CF NFT will be able to 
                                discuss and share ideas on particular collections and artists, as well as all things related to 
                                Comics Friends.
                            </p>
                            <p>
                                The forum will be closed and only accessible to holders of the NFT. The key purpose
                                of the forum is to really act as a place where individuals can challenge the way they think and find
                                new perspectives or discover new artists that they may not have heard of prior.
                            </p>
                            <p>
                                It should act as a positive and educational space where people can exchange freely without judgement,
                                and learn from one another. A fun space to make new friends.
                            </p>
                        </div>
                    </div>
                    <div id="genesis"></div> {/* Anchorlink: To be sure to arrive at the correct place */}
                    <img style={{width:'60%', margin: '5em auto 0 auto'}} alt="logoYellow comics Friends" src="./logoYellow.png"/>
                </div>
            </section>

            <section className='section section3'>
                <div className='container'>
                    <div className='description'>
                        <h1>Comics Friends’ Genesis NFT collection</h1>
                            <p>
                                The Comic friends’ NFT collection will be made of 4 different comics bubbles giving access to  the whole Comics Friends
                                ecosystem, including access to the Metaverse Museum and the Web 3 forum, as well as benefits on upcoming drops.<br/>
                                The different levels will be ranked by 4 different colours:
                            </p>
                            <p>
                                Black being the least common and red being the most common.
                                Individual cards will have differentiating benefits.
                            </p>
                    </div>
                    <div className='cards'>
                        <div data-aos="zoom-in" className='card'>
                            <div className="icon"><i className="ri-stack-line"></i></div>
                            <i style={{fontSize:'2em', color:'#f3152b'}} className="bi bi-1-circle"></i>
                            <h2 style={{color:'#f3152b'}}>Red Card</h2>
                                <p>Benefits on all upcoming NFT collections by the Comics Friends</p>
                                <p>Virtual Museum: Right to expose works in upcoming exhibitions.</p>
                                <p>Access to the CF</p>
                                <p>Forum: Name within the museum.</p>
                        </div>
                        <div data-aos="zoom-in" className='card'>
                            <i style={{fontSize:'2em', color:'#31338d'}} className="bi bi-2-circle"></i>
                            <h2 style={{color:'#31338d'}}>Blue Card</h2>
                                <p>Benefits on the Moebius NFT Collection.</p>
                                <p>Right to expose works in upcoming exhibitions.</p>
                                <p>Access to the CF Forum</p>
                                <p>Name within the museum.</p>
                        </div>
                        <div data-aos="zoom-in" className='card'>
                            <i style={{fontSize:'2em', color:'#fff148'}} className="bi bi-3-circle"></i>
                            <h2 style={{color:'#fff148'}}>Yellow Card</h2>
                                <p>Right to share work to the permanent museum collection and upcoming exhibitions.</p>
                                <p>Benefits on all upcoming NFT collections created by the CF Virtual Museum.</p>
                                <p>Access to the Comics Friends Forum and Name within the museum.</p>
                        </div>
                        <div data-aos="zoom-in" className='card'>
                            <i style={{fontSize:'2em', color:'black'}} className="bi bi-4-circle"></i>
                            <h2 style={{color:'black'}}>Black Card</h2>
                                <p>Right to share work to the permanent museum collection and upcoming exhibitions.</p>
                                <p>Airdrop of the Moebius NFT collection</p>
                                <p>Benefits on all upcoming NFT collections or specific objects created by the CF Virtual Museum.</p>
                                <p>Access to the Comics Friends Forum and Name within the museum</p>
                        </div>
                    </div>
                    <div id="partnership"></div>
                </div>
            </section>

            <section style={{overflowX:'hidden'}} className='section section4'>
                <div className='container'>
                    <div className='line line1'>
                        <div className='bloc bloc1'>
                            <div>
                                <img data-aos="fade-left" src="img_logo_comicsFriends/comicsFriendspic2.png" alt="comicsFriendspic2"/>
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
                                    The first Comics Friends collection will be a collection by world renown artist <b>Moebius</b>.
                                    </p> 
                                    <p><b>Jean Giraud</b> was a French artist, cartoonist, and writer. He has been described as the most
                                        influential *bande dessinée* artist. His most famous works include the series Blueberry,
                                        Arzach, the Incal and many more.
                                    </p>
                                    <p>
                                    The collection is set to launch towards the end of October. Further information will be 
                                    unveiled within the forum after the release of the Comics Friends membership cards.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='team'></div>
            </section>
            <section style={{overflowX:'hidden'}} className='section section5'>
                <div className='team container'>
                    <h1>The team</h1>
                    <p data-aos="fade-up-left">
                        Introducing the Comics Friends team. The team is made up of a range of individuals with expertise 
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
                                    <span style={{color:'grey'}}>DG musée</span>
                                </div>
                            </div>
                            <div data-aos="fade-right" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_lila_fond transparent.png' alt='mini logo lila'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Adrien Fuchs</h2>
                                    <span style={{color:'grey'}}>DG ComicsFriends</span>
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
                                    <span style={{color:'grey'}}>Lawyer</span>
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
                                    <span style={{color:'grey'}}>Artistic Director</span>
                                </div>
                            </div>
                            <div data-aos="fade-left" className='member'>
                                <div className='memberImg'>
                                    <img style={{width:'8em'}} src='teampic/ComicsFriends_vert_fond transparent.png' alt='mini logo vert'/>
                                </div>
                                <div className='memberInfo'>
                                    <h2>Bastien Vermot de Boisrolin</h2>
                                    <span style={{color:'grey'}}>Developer</span>
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
                                        Comics friends is an exclusive community of individuals with a shared passion of comic books, we are comic book lovers, artist and collectors.
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
                                        The rarity ranking will be determined by which colour card you receive and benefits are 
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
                                    <a><i className="bi bi-question-circle"></i> Are there any additional benefits to owning multiple cards ?</a>
                                    <p>
                                        Each card has its own benefits and holding multiple cards from the same category will not give a holder 
                                        additional benefits. However, if you are a holder of two different cards from different categories you 
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
                <div style={{boxShadow:'0 0 29px 0 rgba(18, 66, 101, 0.08)'}} data-aos="flip-left" className='container'>
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