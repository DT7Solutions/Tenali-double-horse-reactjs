import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img3 from '../../../assets/img/team/tenali-double-horse-phir-se-udan-campaingh.webp'
let urls = ""


class Camapaing extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        
          <div>
            <div className='container mb-5'>
                    <div>
                        <div className="section-title-wrap section-header mb-md-5 mt-lg-5 mt-xl-5  mt-xxl-5 text-center ">
                            <h5 className="custom-primary mt-3">Campaign Chronicles  </h5>
                            <h2 className="title">Explore Our Ongoing Campaigns</h2>
                            <p className="subtitle ">
                                Discover the latest buzz in the digital realm. Dive into our ongoing digital or PR campaigns that bring you exciting updates, engaging content, and a taste of the future with Tenali Double Horse.
                            </p>
                        </div>
                    </div>
              <div className='row d-flex justify-content-center campaing'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img src={process.env.PUBLIC_URL + "/assets/img/banner/icons/tenali-double-horse-phir-se-udan-campaingh.webp"} alt="Image" class="img-fluid1" style={{height:'100%', width:"100%"}} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
                    <div className='mb-lg-5 camp-content'>
                            <div>
                                    <p>
                                    <b>Phir Se Udaan</b> is an initiative by your favourite <b>Tenali Double Horse</b> . With a vision to empower women inside and outside the house. Tenali Double Horse offers only the best quality and nutrition packed range of Dals and Instant foods like Idli and Dosa mixes.
                                    </p>
                            </div>
                            <div>
                                    <a href={urls} target='_blank' className="btn-custom">Know More</a>
                            </div>
                        </div>
                </div>
              </div>
            </div>
    
          </div>
        );
    }
}

export default Camapaing;