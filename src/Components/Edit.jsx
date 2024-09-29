import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {  useDispatch } from 'react-redux';
import { editBooks } from '../Store/Slice/BookSlice';

function Edit({ bookToEdit }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(bookToEdit);

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    const handleUpdate = () => {
        dispatch(editBooks(data)); 
        handleClose();
    };

    return (
        <>
            <button className='btn  py-2 ps-3' onClick={handleShow}>
                <i className="fa-solid fa-file-pen fs-5" />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                        <Form.Control
                            type="text"
                            value={data?.title }
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                            placeholder="Title"
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Author" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.author }
                            onChange={(e) => setData({ ...data, author: e.target.value })}
                            placeholder="Author"
                        />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingInput" label="Language" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.language }
                            onChange={(e) => setData({ ...data, language: e.target.value })}
                            placeholder="Language"
                        />
                    </FloatingLabel>

                    
                    <FloatingLabel controlId="floatingInput" label="Image URL" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.imageUrl }
                            onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
                            placeholder="Image URL"
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success"  onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;
