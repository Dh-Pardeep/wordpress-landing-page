import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Facebook, Telegram, Twitter } from './Icons'
import { Link } from 'react-router-dom'
import FooterMoon from '../../assets/image/webp/footer_moon.webp'
const MyFooter = () => {
    return (
        <>
            <footer className='position-relative ' id='About'>
                <img className='position-absolute FooterMoon' src={FooterMoon} alt="FooterMoon" />
                <Container className='mt-lg-5 pt-xl-4'>
                    <Row className=' align-align-items-baseline mt-sm-3 mt-md-5 pt-lg-5 '>
                        <Col md={5} lg={5} xl={6} className='pt-5' data-aos-delay="500" data-aos="fade-right">
                            <p className='ff_Recharge text_white opacity_7 font_xs fw-bold footerpara'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</p>
                            <div className='d-flex'>
                                <Facebook />
                                <div className='px-3'>
                                    <Twitter />
                                </div>
                                <Telegram />
                            </div>
                        </Col>
                        <Col md={7} lg={7} xl={5} data-aos-delay="500" data-aos="fade-left">
                            <div className='d-flex  align-align-items-baseline pt-5 pt-md-0 justify-content-lg-between justify-content-between justify-content-md-start ps-md-5 ms-md-5'>
                                <ul className='ps-0 '>
                                    <li className='ff_Recharge fw-bold font_md text_white'>Quick links</li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>Home</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>Features</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>Marketplace</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>Tokens</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>NexChat</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>About</Link></li>
                                </ul>
                                <ul className='ps-5'>
                                    <li className='ff_Recharge fw-bold font_md text_white'>Information's</li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>Contact</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>Phone</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>terms</Link></li>
                                    <li><Link className='mt_20 d-inline-block ff_Recharge fw-bold font_xs position-relative Nav_Btn_hover text_white opacity_7'>Privacy</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className='Footer_border'></div>
                    <p className='ff_Recharge fw-bold font_xs text_white opacity_7 text-center pb-4 mb-0'>@Copyright.nexai</p>
                </Container>
            </footer>
        </>
    )
}

export default MyFooter