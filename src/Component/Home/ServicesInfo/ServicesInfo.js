import React from 'react';

const ServicesInfo = (props) => {
    const {name,img}=props.data
    return (
       
            <div className='col-md-4 text-center'>
               <img style={{height: '50px'}} src={img} alt="" className="img-fluid"/>
               <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
            </div>
            
    );
};

export default ServicesInfo;