import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';
function Landing() {
  return (
    <>
      <div className='container-fluid bg-white text-primary d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
        <Row className='p-4  align-items-center'>
          <Col sm={12} md={6} className='mb-4'>
            <img src=" https://static.vecteezy.com/system/resources/previews/009/386/225/original/3d-illustration-online-book-library-png.png"
              alt="can't load" className='img-fluid rounded' />
          </Col>
          <Col sm={12} md={6} className='d-flex justify-content-center flex-column'>
            <h3 className='text-dark text-center mb-4 '>MINI-LIBRARY</h3>
            <p style={{ textAlign: 'justify' }} className='text-dark'>Library is a place where there is huge collection of books and various other resources that are made accessible for reading and reference purpose.
              The full form of library is, in fact, simply library
              .A Mini Library  is an online database of digital objects that can include Book name, still images,Author name,Language..!</p>
            <div className='d-grid'>
              <Link className='btn btn-dark' to={'/home'}>Let's Explore</Link>
            </div>
          </Col>
        </Row>
      </div>


      <div className='p-5 container-fluid'>
        <h3 className='mb-5 text-center'>FUNCTIONALITIES</h3>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-4 mb-4'>
            <Card className='text-center'>
              <Card.Body>
                <Card.Title>
                  <i className="fa-solid fa-book-medical fs-1 mb-3" style={{ color: 'white' }} />
                </Card.Title>
                <Card.Text className='px-3'>
                  You can add books to build on the card title and make up the
                  bulk of the lorem ipsum card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-md-4 mb-4'>
            <Card className='text-center'>
              <Card.Body>
                <Card.Title>
                  <i className="fa-solid fa-file-pen fs-1 mb-3" style={{ color: 'white' }} />
                </Card.Title>
                <Card.Text className='px-3'>
                  Can edit the existing data to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-md-4 mb-4'>
            <Card className='text-center'>
              <Card.Body>
                <Card.Title>
                  <i className="fa-solid fa-trash-can fs-1 mb-3" style={{ color: 'white' }} />
                </Card.Title>
                <Card.Text className='px-3'>
                  Can delete the unnecessary cards to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Landing