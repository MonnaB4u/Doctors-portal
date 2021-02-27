import React from 'react';
import fluoride from '.././../../images/rount teeth.png';
import cavity from '.././../../images/tooth (1).png';
import whitening from '.././../../images/tooth.png';
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        img: whitening,
    }
]
const Services = () => {
    return (
        <section className="container mt-5">
          <div className="text-center ">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="row mt-5 pt-5 w-75">
                {
                    serviceData.map(data => <ServicesInfo data={data}></ServicesInfo>)
               }
                </div>
               
            </div>
        </section>
    );
};

export default Services;