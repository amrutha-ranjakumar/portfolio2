import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './contact.css'

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
      <form ref={form} onSubmit={sendEmail} >
        <Row>
          <Col xs={12} md={6} className="mx-auto">
            <h3 className='text-primary mt-5 mb-5  text-center' style={{marginTop:"-90px"}}>CONTACT ME</h3>
            {/* <Link to='/'>
              <h1 className='btn btn-primary mt-5 ' style={{ width: '40px', height: '50px', backgroundColor: 'orange' }}>
                <i className='fa-solid fa-angle-left'></i>
              </h1>
            </Link> */}
            <div className=' mt-5 mb-2'></div>
            <div style={{ color: 'blue' }}>
              <label htmlFor='name' style={{ color: 'blue' }}>Name:</label>
              <input type='text' className='form-control mb-2' style={{ backgroundColor: 'black' }} name='from_name' />
              <label htmlFor='email' style={{ color: 'blue' }}>Email</label>
              <input type='email' className='form-control mb-2' style={{ backgroundColor: 'black' }} name='from_email' />
              <label htmlFor='message' style={{ color: 'blue' }}>Message</label>
              <textarea name='message' className='form-control mb-3' style={{ height: '100px', backgroundColor: 'black' }} />
              <input type='submit' className='form-control btn btn-primary' style={{ borderRadius: '500px',marginTop:"40px" }} value='Send' />
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Contact;
