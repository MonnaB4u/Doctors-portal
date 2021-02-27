import React from 'react';
import mask from '../../../images/Mask Group 3.png'
const FeatureService = () => {
    return (
        <section className='my-5'>
        <div className="container mt-5 pt-3">
            <div className="row justify-content-center ">
                <div className="col-sm-5 col-md-5 mt-5">
                    <img style={{'width':"60%"}} src={mask} alt="" className="img-fluid"/>
                </div>
                <div className="col-sm-5 col-md-6 align-self-center">
                <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            
        </div>
        </section>
    );
};

export default FeatureService;