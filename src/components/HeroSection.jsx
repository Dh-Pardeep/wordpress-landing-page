import React from 'react'
import MyNav from './common/MyNav'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PlayButtonIcon } from './common/Icons'
import HeroSectionImg from '../assets/image/webp/HeroSectionImg.webp'
import Trustpilot from '../assets/image/svg/trustpilot.svg'
import FiveStar from '../assets/image/svg/fivestart.svg'
import TellAsMore from './TellAsMore'
const HeroSection = () => {
    return (
        <div className='bg-black position-relative'>
            <div className=' HeroShadow_1 '></div>
            <div className=' HeroShadow_2 '></div>
            <MyNav />
            <Container className='position-relative z_20 pt-5 mt-5'>
                <Row className=' align-items-center py-4'>
                    <Col lg={6} data-aos="fade-right" data-aos-delay="3000">
                        <div className='py-lg-5'>
                            <h1 className='ff_Konexy text_white fw-normal font_4xl left_line  position-relative ps-3 pb-4'>WordPress Development Agency</h1>
                            <h2 className='ff_Gilroy700 font_lg text_white'>for Enterprise + Friendly Team	</h2>
                            <p className=' opacity07 text_white font_md ff_Gilroy400 pb-4'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
                            <div className='d-sm-flex align-items-center'>
                                <Link className='ff_Gilroy400   font_md text_white me_34 common_btn d-inline-block'>Get Started</Link>
                                <div className='d-flex align-items-center mt-4 mt-sm-0'>
                                    <PlayButtonIcon />
                                    <p className='opacity07 text-white font_md ff_Gilroy400 mb-0 ps-3'>What is Vipe? (1min)</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-left" data-aos-delay="3000">
                        <div className='w-100'>
                            <div className=' herofullimg mt-4 mt-lg-0'>
                                <img className=' HeroSectionImg w-100' src={HeroSectionImg} alt="HeroSectionImg" />
                                <div className="herobox  d-flex flex-column align-items-start">
                                    <img src={Trustpilot} alt="Trustpilot" />
                                    <img className='py-2' src={FiveStar} alt="FiveStar" />
                                    <h2 className='ff_Jost font_md fw-normal text_white'>Rated 5.0 Excellent</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <TellAsMore />
        </div>
    )
}

export default HeroSection