import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import PopupMessage from './PopupMessage';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <header>
      <Navbar expand='lg' collapseOnSelect>
        <Container>
          <PopupMessage trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h6>Gallery, store, and more coming soon...</h6>
          </PopupMessage>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                className='logo'
                src='../images/logo.png'
                alt='Endure Hoops'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link onClick={() => setButtonPopup(true)} href='#'>
                <i className='fa-solid fa-arrow-right-to-bracket'></i> Sign In
              </Nav.Link>
              <Nav.Link href='#' onClick={() => setButtonPopup(true)}>
                <i className='fa-solid fa-store'></i> Store
              </Nav.Link>
              <Nav.Link href='#' onClick={() => setButtonPopup(true)}>
                <i className='fa-solid fa-cart-shopping'></i> Cart
              </Nav.Link>
              <Nav.Link href='#' onClick={() => setButtonPopup(true)}>
                <i className='fa-solid fa-camera'></i> Gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
