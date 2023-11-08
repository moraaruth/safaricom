import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimonial from './Testimonial'
import './Style.css'


function Homepage() {
    return (
        <>
            <Navbar />
            <div className='backgroud-container'>
            <div className='testimonials-container'>
            <Testimonial rating={5} message="I can now access my favorite newspaper at only 20 bob! What a big saving for me and for the environment" name="Anonymous" />
            <Testimonial rating={5} message="I always go to the discover tab and I never get disappointed. So much clean content for all audiences" name="Anonymous" />
            <Testimonial rating={5} message="As a small business, I love accessing the M-PESA statement on the Safaricom web to keep close tabs on my transactions" name="Anonymous" />
            </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}

export default Homepage