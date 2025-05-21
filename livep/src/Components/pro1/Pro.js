import React, { useEffect,useState } from "react";
import "./Pro.css"
import loc from "../assets/icon.png"
import call from "../assets/call.png"
import chat from "../assets/chat.png"
import msg from "../assets/msg.png"
import arrow from "../assets/arrow.png"

import Aos from "aos"
import 'aos/dist/aos.css'

import CountUp from "react-countup";

import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'

const Pro = () => {

    Aos.init();
    const[isSidebarOpen,SetSidebarOpen]=useState(false);

    const[isScrolled,setIsScrolled]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
        if(window.scrollY>50){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
    }
    window.addEventListener("scroll",handleScroll);
    return()=>{
        window.removeEventListener("scroll",handleScroll)
    }
    })
    const toggleSidebar = () => {
        SetSidebarOpen(!isSidebarOpen);
    }

    
    // const [selectedDiv, setSelectedDiv] = useState(null);
    // const handleDivClick = (divIndex) => {
    //     setSelectedDiv(divIndex);
    // };
 
    
    return(
        <header className="top-header">
             
            
            <nav className={`navbar ${isScrolled ? "scrolled":""}`}>
                
                <ul>
                    <img className="logo" src="https://real-estate-web.pages.dev/logo.png" alt=""/>
                    <li><a href="#best">Residencies</a></li>
                    <li><a href="#don-2 ">Our Value</a></li>
                    <li><a href="#don-3">Contact Us</a></li>
                    <li><a href="#blue">Get Started</a></li>
                    <button className="button">Contact</button>
                    <div className="hb" onClick={toggleSidebar}>
                        <div className="hb1"></div>
                        <div className="hb2"></div>
                        <div className="hb3"></div>
                    </div>
                </ul>
            </nav> 
            <div className={`nav-mob ${isSidebarOpen ? "open" : ""}`}>
                <div>
                <p><a href="#best">Residencies</a></p>
                <p><a href="#don-2 ">Our Value</a></p>
                <p><a href="#don-3">Contact Us</a></p>
                <p><a href="#blue">Get Started</a></p>
                <button className="but">Contact</button>
                </div>
            </div>


            <div className="mid">
                <div className="mid-head">
                <div className="mid-color"/>
                <div className="circle-head"/>
                    <div className="fd-up" data-aos="fade-up" data-aos-duration="2000">
                        <p className="dis">Discover<br/> Most Suitable<br/> Property</p>
                    </div>
                    <p className="find">Find a variety of properties that suit you very easilty<br/>
                    Forget all difficulties in finding a residence for you</p>
                    <div className="sear">
                            <img src={loc} alt=""/>
                            <input className="loc" type="text" id="place"></input>
                            <button className="searbut">Search</button>
                    </div>        
                            <div className="numb">
                                <div>
                                   <CountUp
                                   className="c-up"
                                   start={0}
                                   end={9000}
                                   duration={2}
                                   useEasing={true}
                                   separator=","
                                   
                                   >
                                     
                                    </CountUp> 
                                    <span className="plus">+</span><br/>
                                <p>Premium Product</p>
                                </div>
                                <div>
                                <CountUp
                                   className="c-up"
                                   start={0}
                                   end={2000}
                                   duration={2}
                                   useEasing={true}
                                   separator=","
                                   
                                   >
                                     
                                    </CountUp> 
                                    <span className="plus">+</span><br/>
                                <p>Happy Customer</p>
                                </div>
                                <div>
                                <CountUp
                                   className="c-up"
                                   start={0}
                                   end={28}
                                   duration={2}
                                   useEasing={true}
                                   separator=","
                                   
                                   >
                                     
                                    </CountUp> 
                                    <span className="plus">+</span><br/>
                                <p>Awards Winning</p>
                                </div>

                            </div>
                       
                    
                 </div>
                 <div data-aos="fade-left" data-aos-duration="2000">
                    <img className="pic" src="https://real-estate-web.pages.dev/hero-image.png" alt=""/>
                 </div>
                
            </div>
            
            <div className="don">
            <section id="best">

                <div className="don-logo">
                    <img src="https://real-estate-web.pages.dev/prologis.png" alt=""/>
                    <img src="https://real-estate-web.pages.dev/tower.png" alt=""/>
                    <img src="https://real-estate-web.pages.dev/equinix.png" alt=""/>
                    <img src="https://real-estate-web.pages.dev/realty.png" alt=""/>
                </div>

                <div className="best">
                    <h2>Best Choices</h2>
                    <h1>Popular Residencies</h1>
                </div>
              

                <div className="house-mob">
                    <Swiper 
                    effect="coverflow"
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={1}
                    navigation={{clickable:true}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r2.png" alt=""/>
                                <h3><span>$</span>66,353</h3>
                                <h2>Asatti Garden City</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>    
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r3.png" alt=""/>
                                <h3><span>$</span>35,853</h3>
                                <h2>Citralin Puri Serang</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r2.png" alt=""/>
                                <h3><span>$</span>66,353</h3>
                                <h2>Asatti Garden City</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>    
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r3.png" alt=""/>
                                <h3><span>$</span>35,853</h3>
                                <h2>Citralin Puri Serang</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                         </SwiperSlide>
                         
                    </Swiper>
                </div>



                <div className="house">
                    <Swiper 
                    effect="coverflow"
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={1}
                    navigation={{clickable:true}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r2.png" alt=""/>
                                <h3><span>$</span>66,353</h3>
                                <h2>Asatti Garden City</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>    
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r3.png" alt=""/>
                                <h3><span>$</span>35,853</h3>
                                <h2>Citralin Puri Serang</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r2.png" alt=""/>
                                <h3><span>$</span>66,353</h3>
                                <h2>Asatti Garden City</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>    
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r3.png" alt=""/>
                                <h3><span>$</span>35,853</h3>
                                <h2>Citralin Puri Serang</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="zoom">
                                <img src="https://real-estate-web.pages.dev/r1.png" alt=""/>
                                <h3><span>$</span>47,043</h3>
                                <h2>Aliva Priva Jardin</h2>
                                <p>Jakarata garden city street,Cakung Pulo Gadung</p>
                            </div>
                         </SwiperSlide>
                         
                    </Swiper>
                </div>
                </section>
                <section id="don-2">

                <div className="don-2">
                    <div >
                        <img className="don-2img" src="https://real-estate-web.pages.dev/value.png" alt=""></img>
                    </div>
                    <div className="don-2-right">
                        <div className="dtop">
                        <h2>Our Value</h2>
                        <h1>Value We Give to You</h1>
                        <p>We always ready to help by providijng the best services for you.<br/>
                        We beleive a good blace to live can make your life better</p>
                        </div>

                        <div className="three">
                            <div className="three-1" >
                            {/* onClick={() => handleDivClick(1)} */}
                               <span>
                               <img src="https://cdn-icons-png.freepik.com/256/5379/5379544.png?ga=GA1.1.1186835875.1732085016&semt=ais_hybrid"alt=""/>
                                <h3>Best interest rates on the market</h3>
                                <img className="drop" src={arrow}alt=""/>
                                </span>
                                {/* {selectedDiv === 1 && ( */}
                                
                                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut<br/> occaecat consequat est minim minim esse tempor laborum consequat esse<br/> adipisicing eu reprehenderit enim.</p>

                               
                                
                            </div>
                            <div className="three-1">
                                <span>
                                 <img src="https://cdn-icons-png.freepik.com/256/6596/6596894.png?ga=GA1.1.1186835875.1732085016&semt=ais_hybrid"alt=""/>   
                                
                                <h3>Prevent unstable prices</h3>
                                <img className="drop"  src={arrow}alt=""/>
                                </span>
                                
                                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut<br/> occaecat consequat est minim minim esse tempor laborum consequat esse<br/> adipisicing eu reprehenderit enim.</p>


                            </div>
                            <div className="three-1">
                                <span>
                                 <img src="https://cdn-icons-png.freepik.com/256/9417/9417343.png?ga=GA1.1.1186835875.1732085016&semt=ais_hybrid"alt=""/>   
                                <h3>Best price on the market</h3>
                                <img className="drop"  src={arrow}alt=""/>
                                </span>
                                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut<br/> occaecat consequat est minim minim esse tempor laborum consequat esse<br/> adipisicing eu reprehenderit enim.</p>


                            </div>
                        </div>

                    </div>

                </div>
                </section>
                 <section id="don-3">
                <div className="don-3">
                    <div className="don-3-left">
                        <div className="easy">
                        <h2>Our Contact Us</h2>
                        <h1>Easy to contact us</h1>
                        <p>We always ready to help by providijng the best services for you. We beleive a good<br/>blace to live can make your life better</p>
                        </div>
                        <div className="four">
                            <div className="first-2">
                                <div>
                                    <table>
                                        <tr>
                                             <th rowSpan={2}><img src={call}alt=""></img></th>
                                             <td><h3>Call</h3></td>
                                        </tr>
                                        <tr>     
                                             <td><p>021 123 145 14</p></td>
                                        </tr>
                                    </table>
                                    <button>Call Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                             <th rowSpan={2}><img src={chat}alt=""></img></th>
                                             <td><h3>Chat</h3></td>
                                        </tr>
                                        <tr>     
                                             <td><p>021 123 145 14</p></td>
                                        </tr>
                                    </table>
                                    <button>Chat Now</button>
                                </div>
                            </div>
                            <div className="second-2">
                                <div>
                                    <table>
                                        <tr>
                                             <th rowSpan={2}><img src={chat}alt=""></img></th>
                                             <td><h3>Video Call</h3></td>
                                        </tr>
                                        <tr>     
                                             <td><p>021 123 145 14</p></td>
                                        </tr>
                                    </table>
                                    <button>Video Call Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                             <th rowSpan={2}><img src={msg}alt=""></img></th>
                                             <td><h3>Message</h3></td>
                                        </tr>
                                        <tr>     
                                             <td><p>021 123 145 14</p></td>
                                        </tr>
                                    </table>
                                    <button>Message Now</button>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="donimg">
                        <img src="https://real-estate-web.pages.dev/contact.jpg" alt=""></img>
                    </div>
                </div>
                </section>
                <section id="blue">
                <div className="blue">
                    <h1>Get started with Homyz</h1>
                    <p>Subscribe and find super attractive price quotes from us.<br/>
                    Find your residence soon</p>
                    <button>Get Started</button>
                </div>
                </section>

                <footer>
                    <div>
                        <img src="https://real-estate-web.pages.dev/logo2.png"alt=""></img>
                        <p>Our vision is to make all people<br/>
                        the best place to live for them.</p>
                    </div>
                    <div>
                        <h1>Information</h1>
                        <p>145 New York, FL 5467, USA</p>
                        <div className="last">
                            <h5>Property</h5>
                            <h5>Services</h5>
                            <h5>Product</h5>
                            <h5>About Us</h5>
                        </div>
                    </div>
                </footer>

            </div>

        </header>
    )
}

export default Pro