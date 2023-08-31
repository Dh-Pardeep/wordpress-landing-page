import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TrueSignTwo } from './common/Icons'
import ScheduleAppointmentIMg from '../assets/image/webp/ScheduleAppointment.webp'
const ScheduleAppointment = () => {
    return (
        <div >
            <Container>
                <Row className='align-items-center  ScheduleAppointment_box'>
                    <Col lg={4}>
                        <h2 className='ff_Konexy text_white fw-normal font_xl mb-4 mb-md-5' >Not Sure which service you need yet?	</h2>
                        <Link className='ff_Gilroy400 d-inline-block  font_md text_white me-4 common_btn mb-4 '>Schedule An Appointment</Link>
                    </Col>
                    <Col md={6} lg={4}>
                        <ul className=' ps-0'>
                            <li className='text_white font_lg ff_Gilroy600'>20-m free consultation that will help us identifyif  you need</li>
                            <li>
                                <div className='d-flex align-items-center mt-4 '>
                                    <TrueSignTwo />
                                    <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Molestie cursus praesent mi</p>
                                </div>
                            </li>
                            <li>
                                <div className='d-flex align-items-center mt-3 '>
                                    <TrueSignTwo />
                                    <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Custom WordPress Development</p>
                                </div>
                            </li>
                            <li>
                                <div className='d-flex align-items-center mt-3 '>
                                    <TrueSignTwo />
                                    <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Support & Maintenance</p>
                                </div>
                            </li>
                            <li>
                                <div className='d-flex align-items-center mt-3 '>
                                    <TrueSignTwo />
                                    <p className='text_white font_md ff_Gilroy400 mb-0 ps_10'>Other WordPress Service	</p>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} lg={4}>
                        <div>
                            <img className='w-100 ScheduleAppointmentIMg' src={ScheduleAppointmentIMg} alt="Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ScheduleAppointment