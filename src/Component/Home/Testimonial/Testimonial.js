import React from 'react';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import aliza from '../../../images/Ellipse 3.png';
import Testimonials from './Testimonials/Testimonials';
import './Testimonial.css'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonial = () => {
    return (
        <section className="mt-5 py-5">
            <div className="container">
            <div className="section-header">
                   <h5 className="text-uppercaseTest">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>

               <div className="card-deck mt-5">
                   {
                       testimonialData.map(testimonial=> <Testimonials testimonial={testimonial}></Testimonials>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;