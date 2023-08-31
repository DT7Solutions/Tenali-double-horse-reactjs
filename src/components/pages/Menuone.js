import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
// import Header from '../layouts/Headertwo';
// import Header from '../layouts/Headerinner';
import Header from '../layouts/Headerinner';


import Breadcrumbs from '../layouts/ProductsBreadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/menu-v1/Content';

const pagelocation = 'Tenali Double Horse'
const bannerimg = "/assets/img/bg/tenali-double-horse-products-page-banner.png"

class Menuone extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali  doublehorse | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation,bannerimg:bannerimg }} />
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/tenali-double-horse-logo-250x73.png" }} />
            </Fragment>
        );
    }
}

export default Menuone;