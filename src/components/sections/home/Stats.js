import React, { Component } from 'react';

const successpost = [
    {
        icon: "flaticon-employee",
        count: 24934,
        title: "Happy Customers"
    },
    {
        icon:"fas fa-box-open",
        count: 20,
        title: "Products"
    },
    {
        icon:  "fas fa-truck",
        count: 67335,
        title: "orders delivered"
    },
    {
        icon:  "fas fa-globe",
        count: 11,
        title: "Total country"
    }
    
]

class stats extends Component {
    render() {
        return (
            <div className="section section-padding  bg-cover bg-center mt-5 " style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories/stats-banner.png)" }} >
                <div className="container" >
                    <div className="section-title-wrap section-header text-center">
                        <h2 className="title text-white">Our success Story</h2>
                        <p className="subtitle text-white">
                        Tenali Double Horse team is committed to provide the highest quality products and services to our customers to satisfy their needs and expectations of quality, reliability, and timely delivery.
                        </p>
                    </div>
                    <div className="row ">
                        {successpost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="ct-infographic-item">
                                    <i className={item.icon} />
                                    <h4>{new Intl.NumberFormat().format(item.count)}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default stats;