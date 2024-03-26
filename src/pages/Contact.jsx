import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'


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
    <div className='d-flex justify-align-center align-items-center'>
      <form ref={form} onSubmit={sendEmail} style={{ marginLeft: "60px" }}/>

          <Row >
      
            <Col>
        
              <h3 className='text-warning mt-2 mb-2 ms-3 d-flex justify-content-center align-items-center '>CONTACT ME</h3>
              <Link to='/'>
              <button style={{width:"120px",marginLeft: "-800px",backgroundColor:"orange"}}><i class="fa-solid fa-angle-left"></i> Back</button>
              </Link>
      
              <div style={{ color: "white",marginTop:"100px" }}>

                <label style={{marginLeft:"-600px",color:"yellow"}}>Name:</label>
           
                <input type="text" className='form-control' style={{ width: "700px",marginLeft:"100px" ,backgroundColor:"orange"  }} name="from_name" />
                <br />
            <br/>
            <label style={{marginLeft:"-600px",color:"yellow"}}>Email</label>
                <input type="email" className='form-control ' style={{ width: "700px",marginLeft:"100px",backgroundColor:"orange"  }} name="from_email" />
                <br />
                <br />
                <label style={{marginLeft:"-600px",color:"yellow"}}>Message</label>
            
                <textarea name="message" className='form-control' style={{ width: "700px", height: "200px",marginLeft:"100px",backgroundColor:"orange"    }} />
                <br />
                <br />
                <input type="submit" className='form-control btn btn-warning ' style={{ width: "700px",marginLeft:"100px" ,borderRadius:"500px"}} value="Send" />
              </div>
            </Col>
          
       </Row> 
        </div>
   
 
  );
};


export default Contact