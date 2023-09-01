import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SuccessGuideImage from '../assets/image/webp/SuccessGuides.webp'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Sitdiam_image from '../assets/image/png/sitcardimage.png'
import { Link } from 'react-router-dom';
const SuccessGuide = () => {
    return (
        <div>
            <Container>
                <Row className='my-lg-5 pt-5'>
                    <Col lg={4} className='pt-lg-5'data-aos="fade-right">
                        <div>
                            <img className='w-100 mt-lg-5 pe-lg-3' src={SuccessGuideImage} alt="SuccessGuideImage" />
                        </div>
                    </Col>
                    <Col lg={8} className='pt-5'data-aos="fade-left">
                        <p className='text_gray font_md ff_Gilroy400 mb-0 mt-3 mt-lg-5 '>HAVE YOU SEEN OUR MASCOT?</p>
                        <h2 className='ff_Konexy text_black fw-normal font_3xl'>Success Guides
                        </h2>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Nav variant="pills" className=" d-flex ">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='ms-3 mt-3' >Category-1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='ms-3 mt-3'>Category-2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three" className='ms-3 mt-3'>Category-3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four" className='ms-3 mt-3'>Category-4</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between mt-4 pt-2'>
                                        <div className="Sitdiam_box c_pointer">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-sm-0 ms-3 ms-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" >
                                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between mt-4 pt-2'>
                                        <div className="Sitdiam_box c_pointer">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-sm-0 ms-3 ms-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="three" >
                                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between mt-4 pt-2'>
                                        <div className="Sitdiam_box c_pointer">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-sm-0 ms-3 ms-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four" >
                                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between mt-4 pt-2'>
                                        <div className="Sitdiam_box c_pointer">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-sm-0 ms-3 ms-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                        <div className="Sitdiam_box c_pointer mt-4 mt-lg-0">
                                            <img className='w-100' src={Sitdiam_image} alt="" />
                                            <h2 className='text_black font_lg ff_Gilroy600 mt-3'>Sit diam metus</h2>
                                            <p className='ff_Gilroy400 font_md text_black opacity07'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                            <h3 className='text_purple ff_Gilroy600 font_md '>Read More....</h3>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
                <div className="haveyou_box position-relative d-flex flex-column flex-lg-row align-items-center justify-content-between" data-aos="zoom-in">
                    <div> 
                        <h2 className='ff_Konexy fw-normal text_white fw-normal font_3xl text-center text-lg-start'>Have you</h2>
                        <p className='text_white ff_Gilroy600 font_lg mb-0 SuccessGuide_para_1 text-center text-lg-start'>read our study about Speed and Performance in WordPress?</p>
                    </div>
                    <div>
                        <Link className='ff_inter fw-semibold font_md text_purple  common_btn d-inline-block common_btn_two mt-4 mt-lg-0'>Check It Out</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SuccessGuide