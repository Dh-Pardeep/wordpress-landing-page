import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ResendIcon, SearchIcon } from './common/Icons'

const TellAsMore = () => {
    return (
        <div className='tell_box'>
            <Container>
                <Row className='justify-content-between py-4'>
                    <Col lg={6} data-aos="fade-right"   >
                        <h2 className='ff_Konexy font_xl fw-normal text_white '>Tell us more....</h2>
                        <p className='  text_white font_md ff_Gilroy400 mb-0 TellAsMorePara'>Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue in quis. Magna vel orci sem neque fringilla et lectus laoreet.</p>
                    </Col>
                    <Col lg={5} data-aos="fade-left"   >
                       <div className='mt-4'>
                       <div className='input_box d-flex  align-items-center justify-content-between w-100'>
                            <input type="text" className='input_text w-100' placeholder='What do you need assistance with?	' />
                            <SearchIcon />
                        </div>
                        <div className='mt-3 d-flex justify-content-between' >
                            <div className='d-flex align-items-center'>
                                <ResendIcon />
                                <p className='  text_white font_md ff_Gilroy400 mb-0 TellAsMorePara ms-2 '>or send us an inquire?	</p>
                            </div>
                            <p className='  text_white font_md ff_Gilroy400 mb-0  ms-2 c_pointer'>Learn more about...</p>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TellAsMore