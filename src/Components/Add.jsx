import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addBook } from '../Store/Slice/BookSlice';
import { toast } from 'react-toastify';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()


    const [book, SetBook] = useState({
         title: '', author: '', genre: '', language: '', imageUrl: ''
    })

    const handleDispatch = () => {
        const {  title, author, language, imageUrl, } = book
        if ( !title || !author || !language || !imageUrl) {
            alert("enter valid inputs")
        }
        else {
            console.log(book);
            dispatch(addBook(book))
            SetBook({
                title: '', author: '', genre: '', language: '', imageUrl: ''

            })
            handleClose()
            toast.success("Book added succesfully!")

        } 

    }
    return (
        <>
            <button className='btn btn-success text-dark px-5 p-3 my-3' onClick={handleShow}>Add Book{' '}<i className="fa-solid fa-book-medical text-light" /></button>


            <Modal

                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >

                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                   


                    <FloatingLabel controlId="floatingInput" label="Title" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => { SetBook({ ...book, title: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Author" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => { SetBook({ ...book, author: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Language" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => { SetBook({ ...book, language: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="image url" className='mb-3 text-dark'>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => { SetBook({ ...book, imageUrl: e.target.value }) }} />
                    </FloatingLabel>


                </Modal.Body>
                <Modal.Footer>

                    <Button variant="success" className='' onClick={handleDispatch}>Add</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Add