import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SearchIconTwo, RightArrow, MobileIcon, EmailIcon, HomeIcon, Github, Linkden, Twitter, Facebook, Instagram, Wikipidia } from './Icons'
import { Link } from 'react-router-dom'

const MyFooter = () => {
    return (
        <div className='bg-black'>
            <Container>
                <Row className='justify-content-end'>
                    <Col lg={4}data-aos="fade-left">
                        <div className='py-5 mt-4'>
                            <div className='Search_input d-flex justify-content-between mt-5 w-100'>
                                <input type="text" className='search_input_text w-100' placeholder='Search here....' />
                                <SearchIconTwo />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col sm={6} lg={4} xl={3} >
                        <ul className='ps-0 mb-0'>
                            <li className='text_white font_md ff_Gilroy400 opacity07 '>Services</li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>WordPress Development</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>WooCommerce Development</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>WordPress Maintenance</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>Speed Optimization</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>Dedicated WordPress Developer</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>Headless WordPress Development</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>White Label Development</p>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} lg={4} xl={3} >
                        <ul className='ps-0 mb-0 pt-4 pt-sm-0'>
                            <li className='text_white font_md ff_Gilroy400 opacity07'>Services</li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>WordPress Hosting</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>PSD, Figma to WordPress Conversion</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>Custom WordPress Theme</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>Custom WordPress Plugins</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>CMS to WordPress</p>
                                </div>
                            </li>
                            <li>
                                <div className=' d-flex mt-2 pt-1 align-items-end'>
                                    <RightArrow />
                                    <p className='text_white font_xs ff_Gilroy400 opacity07 c_pointer mb-0 ms_10'>WordPress Malware Removal</p>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} lg={4} xl={3}>
                        <ul className='ps-0 mb-0 pt-4 pt-lg-0'>
                            <li className='text_white font_md ff_Gilroy400 opacity07 pb-3'>Latest Articles</li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07 c_pointer '>7 WordPress Plugins to Create an Effective Newsletter 03.01.2022</li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07 c_pointer  mt-3 pt-1'>What’s the Perfect Blog Post Length for Your WordPress Site’s SEO?
                                02.01.2022</li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07 c_pointer  mt-3 pt-1'>5 Reasons the Future of WordPress Is Headless 01.01.2022</li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07 c_pointer  mt-3 pt-1'>Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the Amazingly Successful 2021 30.12.2021</li>
                        </ul>
                    </Col>
                    <Col sm={6} lg={4} xl={3}>
                        <ul className='ps-0 mb-0 pt-4 pt-xl-0'>
                            <li className='text_white font_md ff_Gilroy400 opacity07 pb-3'>Contact</li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07  '>
                                <MobileIcon /> <span className='c_pointer'>EU: +359 988 993 128</span></li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07   mt-3 pt-1'>  <MobileIcon /> <span className='c_pointer'>US: +1 (1 888) 266-6917
                                02.01.2022</span></li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07   mt-3 pt-1'><EmailIcon /> <span className='c_pointer'>office@vipestudio.com</span>
                            </li>
                            <li className='text_white font_xs ff_Gilroy400 opacity07   mt-3 pt-1'><HomeIcon /><span className='c_pointer'>14 Srebarna, Sofia 1407, Bulgaria</span></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='footer_border mt-5'></div>
            <Container>
                <Row className='align-items-center justify-content-between py-4'>
                    <Col md={6}>
                        <p className='text_white font_xs ff_Gilroy400 opacity07  pt-2 mb-0 mb-2'>© Vipe Studio 2016-2022</p>
                        <Link className='text_white font_xs ff_Gilroy400 opacity07  '>Privacy</Link>
                        <Link className='text_white font_xs ff_Gilroy400 opacity07 ms-3  footer_down_link position-relative'>Careers</Link>
                        <Link className='text_white font_xs ff_Gilroy400 opacity07 ms-3  footer_down_link position-relative'>Media</Link>
                        <Link className='text_white font_xs ff_Gilroy400 opacity07 ms-3  footer_down_link position-relative'>Client Area</Link>
                    </Col>
                    <Col md={6}className='d-flex justify-content-start justify-content-md-end'>
                        <div className='d-flex gap_17 mt-4 mt-md-0'>
                            <Github />
                            <Linkden />
                            <Twitter />
                            <Facebook />
                            <Instagram />
                            <Wikipidia />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyFooter