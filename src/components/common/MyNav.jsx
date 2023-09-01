import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { EngIcon } from './Icons';
const MyNav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden')
  }

  return (
    <>
      <section className='position-fixed w-100 top-0 bg-black z_1000'>
        <Container >
          <nav className='d-flex justify-content-between align-items-center py_30'>
            <div></div>
            <ul className={`${showNavbar ? 'd-flex align-items-center mb-0 nav_sm p-0 gap_20 Nav_hover ms-xl-5 ms-0' : ' gap_20 d-flex align-items-center mb-0 nav_sm nav_show p-0'} `}>
              <li><Link className='ff_Gilroy400   font_md text_white'><Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  WordPress Solution
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#/action-1">WordPress</Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#/action-2">WordPress Solution</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></Link></li>
              <li><Link className='ff_Gilroy400   font_md text_white'><Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#Services">Services</Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#/action-2">WordPress Solution</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md text_white '>Portfolio</Link></li>
              <li><Link className='ff_Gilroy400   font_md text_white '>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    About
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#/action-2">WordPress Solution</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md text_white '>Blog</Link></li>
              <div className='d-flex flex-column gap_20 align-items-center d-lg-none'>
                <Link onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md text_white '>1 888 266-6917 (eu?)</Link>
                <Link onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md text_white  common_btn'>Contact Us</Link>
                <Link className='ff_Gilroy400   font_md text_white'> <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <EngIcon />
                    <h2 className='ff_Gilroy400   font_md text_white  mb-0 ms-2'>Eng</h2>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className='ff_Gilroy400   font_md' href="#/action-1">Eng</Dropdown.Item>
                    <Dropdown.Item className='ff_Gilroy400   font_md' href="#/action-2">Hindi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></Link>
              </div>
              <span title="close" className=" close_nav text-white fw-bold d-lg-none  d-inline-block  " onClick={() => setShowNavbar(true)}><RxCross2 fontSize={40} /></span>
            </ul>
            <ul className='d-lg-flex  align-items-center mb-0 d-none d-lg-block '>
              <li><Link onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md text_white me_36'>1 888 266-6917 (eu?)</Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ff_Gilroy400 d-inline-block  font_md text_white me-4 common_btn'>Contact Us</Link></li>
              <li><Link className='ff_Gilroy400   font_md text_white'> <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <EngIcon />
                  <h2 className='ff_Gilroy400   font_md text_white  mb-0 ms-2'>Eng</h2>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item onClick={() => setShowNavbar(true)} className='ff_Gilroy400   font_md' href="#/action-2">Hindi</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></Link></li>
            </ul>
            <span title="open"
              className="d-inline d-lg-none fw-bold text-white c_pointer"
              onClick={() => setShowNavbar(false)}>
              <RxHamburgerMenu fontSize={40} /></span>
          </nav>
        </Container>
      </section>
    </>
  )
}

export default MyNav