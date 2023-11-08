import React from 'react';
import { FaStar } from 'react-icons/fa';


function Testimonial ({ rating, message, name }){
    const stars = Array.from({ length: 5}, (_, index ) => (
        <FaStar
          key={index}
          color={index < rating ? 'green' : 'gray'}
        />
    ))
    return (
        <div className='testimonial'>
            <div className='rating'>{stars}</div><br />
            <p className='message'>{message}</p>
            <p className='name'>{name}</p>
        </div>
    )
}

export default Testimonial;