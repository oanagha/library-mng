import React from 'react'
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../Store/Slice/BookSlice';

function Books() {
  const { Books } = useSelector((state) => state.bookReducer)
  const dispatch = useDispatch()

  return (
    <>
      {
        Books?.length > 0 ?

          Books.map(item => (

            <Card style={{ width: '18rem' }} className=' text-light shadow'>
              <Card.Img style={{ height: '220px' }} variant="top" src={item.imageUrl} className='img-fluid' />
              <Card.Body className='bg-dark'>
                <Card.Title className='text-center mb-3'>{item.title}</Card.Title>
                <Card.Text>
                  <div className='d-flex justify-content-between' >
                    <span>{item.author}</span>
                    <span>{item.language}</span>
                  </div>
                  <div className='d-flex justify-content-between mt-3'>
                    <Edit bookToEdit={item} />
                    <button className='btn  py-2 px-3' onClick={() => { dispatch(removeBook(item.id)) }}><i className="fa-solid fa-trash fs-5" style={{ color: "#ff0000" }} /></button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>


          ))



          :
          <h1 className='text-center '> No books here!!</h1>

      }
    </>)
}

export default Books