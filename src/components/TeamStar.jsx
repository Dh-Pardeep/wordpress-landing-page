import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TeamStart from '../assets/image/webp/TeamStar.webp'
const TeamStar = () => {
    return (
        <div className='Featured_bg'>
            <Container className='pt-xl-4 pb-xxl-5'>
                <Row className='py-5 pb-lg-0'>
                    <Col lg={5} xxl={6}>
                        <h2 className='ff_Konexy text_black fw-normal font_3xl mb-2'>Team Full of Stars	
                        </h2>
                        <p className='AgileWordPresspara opacity08 text_black ff_Gilroy400 font_md mb-4 pb-2 pb-lg-3'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                        <Link className='ff_Gilroy400 d-inline-block mb-4 mb-sm-5  font_md text_white me-4 common_btn'>Explore</Link>
                    </Col>
                    <Col lg={7} xxl={6}>
                    <div className='position-relative'>
                        <img  className='w-100 TeamStart pt-lg-5 pt-xl-0' src={TeamStart} alt="TeamStart" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TeamStar