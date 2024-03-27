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
            <h3 className='text-warning mt-5 mb-5  text-center' style={{marginTop:"-80px"}}>CONTACT ME</h3>
            <Link to='/'>
              <button className='btn btn-warning mt-5 ' style={{ width: '40px', height: '50px', backgroundColor: 'orange' }}>
                <i className='fa-solid fa-angle-left'></i>
              </button>
            </Link>
            <div style={{ color: 'white' }}>
              <label htmlFor='name' style={{ color: 'yellow' }}>Name:</label>
              <input type='text' className='form-control mb-2' style={{ backgroundColor: 'orange' }} name='from_name' />
              <label htmlFor='email' style={{ color: 'yellow' }}>Email</label>
              <input type='email' className='form-control mb-2' style={{ backgroundColor: 'orange' }} name='from_email' />
              <label htmlFor='message' style={{ color: 'yellow' }}>Message</label>
              <textarea name='message' className='form-control mb-3' style={{ height: '100px', backgroundColor: 'orange' }} />
              <input type='submit' className='form-control btn btn-warning' style={{ borderRadius: '500px',marginTop:"70px" }} value='Send' />
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Contact;
