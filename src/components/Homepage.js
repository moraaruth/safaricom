import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimonial from './Testimonial'
import './Style.css'



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
            <Navbar />
            <h1 className='heading1'>Testimonials</h1>
            <h3>What Our Trusted Users Say</h3>
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
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}

export default Homepage