import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>

      <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand href={'/'} className='text-dark'>
            <i className="fa-solid fa-book-open-reader fs-2 me-2" style={{ color: "black", }} />
            {' '}
            MINI-LIBRARY
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header