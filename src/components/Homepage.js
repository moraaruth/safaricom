import React, { useState } from 'react'
import Navbar from './Navbar'
import Discover from './Discover'
import Footer from './Footer'
import Testimonial from './Testimonial'
import './Style.css'
import ExprienceMore from './ExprienceMore'
import Device from './Device'
import Account from './Account'
import Fibre from './Fibre'
import World from './World'
import Dashboard from './Dashboard'
import Dashboard1 from './Dashboard1'



function Homepage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            rating: 5,
            message: "I can now access my favorite newspaper at only 20 bob! What a big saving for me and for the environment",
            name: "Anonymous"
        },
        {
            rating: 5,
            message: "I always go to the discover tab and I never get disappointed. So much clean content for all audiences",
            name: "Anonymous"
        },
        {
            rating: 5,
            message: "As a small business, I love accessing the M-PESA statement on the Safaricom web to keep close tabs on my transactions",
            name: "Anonymous"
        },

    ];


    return (
        <>
        <div style={{marginBottom:'30px'}}><Navbar /></div>
            
            <div className='home'>
                <div className='homeText'>
                    <p  style={{ textAlign: 'left' }}className='getMore'>Get More Done With</p>
                    <h2  style={{ textAlign: 'left' }}className='website'>safaricom.com</h2><br/><br/>
                    
                    <p style={{ textAlign: 'left', marginLeft:'50px', fontSize:'32px', fontWeight:'400', lineHeight:'1.46' }}>Check your Account balances, make top ups to <br /> ensure you have enough resources for calling <br /> airtime, SMS and data.</p>
                    <p style={{ textAlign: 'left', marginLeft:'50px' }}><button  className='switch'>Switch to safaricom internet</button></p>

                    <p style={{ textAlign: 'left', marginLeft:'50px', color:'rgb(110, 179, 110)',fontSize:'22px', fontWeight:'400', marginTop:'30px'  }}>Find Out Why  <i className="fas fa-arrow-down"></i> </p>
                </div>
                <div className='dashboardContainer'>
                    <Dashboard />
                </div>
            </div>

            <div>

                <Discover />
                <br /> <br /> <br /> <br />
                <div>                
                <ExprienceMore />
                </div>              
                <br /> <br /> <br />
                <div className="dashboard1Container">
                <Dashboard1 />
                <Device />
                </div>                
                <br /> <br /> <br />
                <Account />
                <br /> <br /> <br />
                <Fibre />
                <br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br /><br /> 
                <World /> <br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br />
            </div>
            <h1 className='heading1'>Testimonials</h1>
            <h3 className='heading3'>What Our Trusted Users Say</h3>
            <div className='backgroud-container'>
                <div className='testimonials-container'>
                    <Testimonial
                        rating={testimonials[currentTestimonial].rating}
                        message={testimonials[currentTestimonial].message}
                        name={testimonials[currentTestimonial].name}

                    />

                    <Testimonial
                        rating={testimonials[currentTestimonial].rating}
                        message="I always go to the discover tab and I never get disappointed. So much clean content for all audiences"
                        name="Anonymous"
                    />

                    <Testimonial
                        rating={testimonials[currentTestimonial].rating}
                        message="As a small business, I love accessing the M-PESA statement on the Safaricom web to keep close tabs on my transactions"
                        name="Anonymous"
                    />

                </div>
                <div className='arrows'>

                    <button className="arrow-button">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button className="arrow-button">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div>
                <p className='feedback'>Was this information helpful?<a href="https://twitter.com/Safaricom_Care" target="_blank" rel="noopener noreferrer"> <span style={{ color: "green", textDecoration: 'underline' }}>If not tell us how we can improve</span></a> or contact us <a href="https://twitter.com/Safaricom_Care" target="_blank" rel="noopener noreferrer"><span style={{ color: "green", textDecoration: 'underline' }}>@Safaricom_Care</span> </a> on Twitter</p>
            </div>
            <Footer />
        </>
    )
}

export default Homepage