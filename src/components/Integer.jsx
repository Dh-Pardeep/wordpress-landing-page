import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Enterprise, SmallDevelopment, SupportMaintenance } from './common/Icons'

const Integer = () => {
    return (
        <div>
            <Container>
                <h2 className='ff_Konexy text_black fw-normal pt-lg-5 mt-5 pb-4'>Integer et nisl non</h2>
                <Row className='justify-content-center pt-4 pb-5'>
                    <Col md={6} lg={4}>
                        <div className="Integer_box c_pointer ">
                            <Enterprise />
                            <div className='Integer_center_line'></div>
                            <div>
                                <h2 className='text-center ff_inter font_lg text_black fw-semibold '>Enterprise WordPress Solutions	</h2>
                                <p className=' text-center text_black opacity07 ff_Gilroy400'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                            </div>
                            <h3 className='text_purple ff_Gilroy600 font_md'>Learn More</h3>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="Integer_box c_pointer mt-4 mt-sm-0">
                            <SmallDevelopment />
                            <div className='Integer_center_line'></div>
                            <div>
                                <h2 className='text-center ff_inter font_lg text_black fw-semibold '>Small to Mid Size Business Development		</h2>
                                <p className=' text-center text_black opacity07 ff_Gilroy400'>Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.</p>
                            </div>
                            <h3 className='text_purple ff_Gilroy600 font_md'>Learn More</h3>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="Integer_box c_pointer mt-4 mt-lg-0">
                            <SupportMaintenance />
                            <div className='Integer_center_line'></div>
                            <div>
                                <h2 className='text-center ff_inter font_lg text_black fw-semibold '>Support & Maintenance	</h2>
                                <p className=' text-center text_black opacity07 ff_Gilroy400'>Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.</p>
                            </div>
                            <h3 className='text_purple ff_Gilroy600 font_md'>Learn More</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Integer