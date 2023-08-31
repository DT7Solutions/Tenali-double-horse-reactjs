import React, { Component,Link } from 'react';


class Tdhgroup extends Component {
    render() {
        return (
            <div className="section light-bg  mt-5">
                <div className="container">
                <div className="section-title-wrap section-header text-center ">
                    <h5 className="custom-primary">Savor Delights with TDH Foods</h5>
                    <h2 className="title">Indulge in Tradition and Convenience</h2>
                    <p className="subtitle">
                    Explore TDH Foods, our renowned subsidiary brand known for iconic Sunnundalu and instant mixes like dosa, idly, and vada. Elevate your culinary journey with authentic flavors and easy preparation.
                    </p>
                </div>
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 alignments d-flex flex-column " >
                        <img src={process.env.PUBLIC_URL + "/assets/img/prods/tenali-double-horse-about-page-tdhf-section.png"} alt="img" className=' mb-2' />
                        <a  href="https://tdhfoodproducts.com/" rel="noopener noreferrer" target="_blank" class="btn-custom  shadow-none ">View More</a>
                        </div>
                        <div className="col-lg-6 alignments d-flex flex-column">
                        <div className="section-title-wrap mr-lg-30 mt-lg-2">
                               
                                <h2 className="title">About  Company</h2>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>
                                TDH Foods is a Sister company to Tenali Double Horse, that started on the core factor of selling the healthiest foods in their purest form, without adding any preservatives. Everything that is made, is of the highest quality, and there are no second guesses about our authenticity. We assure you’ll only have the best – so good that there’s no turning back! It’ll make you crave for more and be hooked onto our products!
                                </p>


                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tdhgroup;