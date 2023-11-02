import React from 'react';
import "./aboutUs.css"

const About = () => {
    const storeFront = require('../../assets/images/storeFront.png')
    const productImg = require('../../assets/images/iPhone.png')

    return (
        <div>
            <div className="content__wrapper">
            <div className="header">
                About Us
            </div>
            <div className="underline"></div>
            <section className="aboutus__wrapper">
                <div className="restaurant__wrapper">
                    <img src={storeFront} className="image__restaurant" alt="a empty restaurant with black and brown chairs some black lamps brown tables and golden partitions" />
                        <div className="text__wrapper">
                            <div className="header__restaurant">
                                The Store
                            </div>
                            <div className="text__restaurant">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, cumque eligendi esse laudantium magnam
                                molestiae perspiciatis quibusdam rerum suscipit. Sapiente.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, cumque eligendi esse laudantium magnam
                                molestiae perspiciatis quibusdam rerum suscipit. Sapiente.
                            </div>
                        </div>
                </div>
                <div className="food__wrapper">
                    <img src={productImg} className="image__food" alt="a burger with a meat patty some salad and a portion of fries in front of it" />
                        <div className="text__wrapper">
                            <div className="header__food">
                                The Products
                            </div>
                            <div className="text__food">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, cumque eligendi esse laudantium magnam
                                molestiae perspiciatis quibusdam rerum suscipit. Sapiente.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, cumque eligendi esse laudantium magnam
                                molestiae perspiciatis quibusdam rerum suscipit. Sapiente.
                            </div>
                        </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default About;