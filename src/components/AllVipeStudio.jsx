import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TrueSign } from './common/Icons'
import ScheduleAppointment from './ScheduleAppointment'

const AllVipeStudio = () => {
    return (
        <div className='bg-black mt-5 pb-5'>
            <div className='pb-5'>
                <Container>
                    <Row className='py-4 py-xl-5' >
                        <Col xl={5} className='py-2 pt-lg-4'>
                            <h2 className='ff_Konexy text_white fw-normal font_2xl'>All Vipe Studio WordPress services	include:</h2>
                        </Col>
                        <Col md={6} xl={4} className='py-2 py-lg-4'>
                            <ul className='ps-0'>
                                <li className='text_white font_lg ff_Gilroy600'>By Industry</li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Lorem in elementum pellentesque</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Molestie cursus praesent mi</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Leo sed viverra cras</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Laoreet feugiat ut at</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Risus aliquam molestie viverra</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Diam enim pulvinar velit</p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6} xl={3} className='py-2 py-lg-4'>
                            <ul className='ps-0'>
                                <li className='text_white font_lg ff_Gilroy600'>By Services</li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Accumsan, dui a semper</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Interdum malesuada vulputate </p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Nullam non a, morbi</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Arcu morbi leo eu</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Viverra venenatis, in ornare</p>
                                    </div>
                                </li>
                                <li>
                                    <div className=' d-flex mt-2 pt-1 align-items-end'>
                                        <TrueSign />
                                        <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Erat id aliquam habitant</p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <ScheduleAppointment />
            </div>
        </div>
    )
}

export default AllVipeStudio