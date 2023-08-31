import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AgileWordPressImage from '../assets/image/webp/AgileWordpress.webp'
import { Link } from 'react-router-dom'
const AgileWordPress = () => {
    return (
        <div>
            <Container className='py-xl-4'>
                <Row className='align-items-center py-5'>
                    <Col lg={6}>
                        <img className='w-100 pe-xl-5' src={AgileWordPressImage} alt="AgileWordPressImage" />
                    </Col>
                    <Col lg={6}>
                        <h2 className='ff_Konexy text_black fw-normal font_3xl mb-2 mt-5'><span className='text_purple'>Agile WordPress
                        </span> Development Project management
                        </h2>
                        <p className='AgileWordPresspara opacity08 text_black ff_Gilroy400 font_md mb-4 pb-2 pb-lg-3'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                        <Link className='ff_Gilroy400 d-inline-block  font_md text_white me-4 common_btn'>Explore</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AgileWordPress