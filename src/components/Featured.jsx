import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import YahooNews from '../assets/image/svg/yahoonews.svg'
import YahooFinance from '../assets/image/svg/yahoofinance.svg'
import YahooLife from '../assets/image/svg/yahoolife.svg'
import TrandingTopics from '../assets/image/svg/trandingtopics.svg'
const Featured = () => {
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1.7,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className='Featured_bg' id='Featured'>
            <Container>
                <div className='pb-4 ' data-aos="zoom-in">
                    <h2 className='ff_Konexy text_black fw-normal font_3xl pt-5 pb-4'>Featured on</h2>
                    <div className='Slider_1 py-4'>
                        <Slider {...settings}>
                            <div>
                                <img className='c_pointer' src={YahooNews} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={YahooFinance} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={YahooNews} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={TrandingTopics} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={YahooLife} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={TrandingTopics} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={YahooNews} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={YahooFinance} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={YahooNews} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={TrandingTopics} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={YahooLife} alt="yadoo image" />
                            </div>
                            <div>
                                <img className='c_pointer' src={TrandingTopics} alt="yadoo image" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Featured