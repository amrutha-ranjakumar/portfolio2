import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qh7mnxu', 'template_n5zictb', form.current, {
        publicKey: 'XkNpRc5qOFp1B7Lc-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='container'>
      <form ref={form} onSubmit={sendEmail} style={{ marginLeft: '-100px',marginTop:"100px" }}>
        <Row>
          <Col>
            <h3 className='text-warning mt-5 mb-2 ms-5 d-flex justify-content-center align-items-center'>
              CONTACT ME
            </h3>
            <Link to='/'>
              <button className='btn btn-warning' style={{ width: '40px',height:"50px", marginLeft: '-700px', backgroundColor: 'orange' }}>
                <i className='fa-solid fa-angle-left'></i> 
              </button>
            </Link>
            <div style={{ color: 'white'}}>
              <label htmlFor='name' style={{ marginLeft: '-200px', color: 'yellow' }}>
                Name:
              </label>
              <input type='text' className='form-control' style={{ width: '200%', marginLeft: '30px', backgroundColor: 'orange' }} name='from_name' />
              <br />
              <br />
              <label htmlFor='email' style={{ marginLeft: '-200px', color: 'yellow' }}>
                Email
              </label>
              <input type='email' className='form-control' style={{ width: '200%', marginLeft: '30px', backgroundColor: 'orange' }} name='from_email' />
              <br />
              <br />
              <label htmlFor='message' style={{ marginLeft: '-180px', color: 'yellow' }}>
                Message
              </label>
              <textarea name='message' className='form-control' style={{ width: '200%', height: '30px', marginLeft: '30px', backgroundColor: 'orange' }} />
              <br />
              <br />
              <input type='submit' className='form-control btn btn-warning' style={{ width: '200%', marginLeft: '30px', borderRadius: '500px' }} value='Send' />
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Contact;
