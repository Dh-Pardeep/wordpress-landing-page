import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import Propy from '../assets/image/svg/propy.svg'
import Ciela from '../assets/image/svg/ciela.svg'
import Revuele from '../assets/image/svg/revuele.svg'
import Spark from '../assets/image/svg/spark.svg'
const LongTerm = () => {
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
        <div className='Featured_bg'>
            <Container>
                <div className='pb-4'>
                    <h2 className='ff_Konexy text_black fw-normal font_3xl Long_term_h2 pt-5 pb-4'>Long Term WordPress Partner</h2>
                    <p className='Long_term_para opacity08 text_black ff_Gilroy400 font_md'>Our motto is the long-term partnership – we will not only develop your perfect website, but will be behind you through the whole process. They already trusted us:</p>
                    <div className='Slider_1 py-4'>
                        <Slider {...settings}>
                            <div>
                                <img src={Propy} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Ciela} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Revuele} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Ciela} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Spark} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Ciela} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Propy} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Ciela} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Revuele} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Ciela} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Spark} alt="yadoo image" />
                            </div>
                            <div>
                                <img src={Ciela} alt="yadoo image" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LongTerm