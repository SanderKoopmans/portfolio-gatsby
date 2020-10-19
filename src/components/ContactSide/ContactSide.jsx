import React, { useState } from 'react';
import { StyledContactSide } from './ContactSide.styled';
import CallIcon from '@material-ui/icons/Call';
import CloseIcon from '@material-ui/icons/Close';

const ContactSide = ({ contactSideOpen, setContactSideOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name, email, message}));

    fetch('https://www.sanderkoopmans.nl/api/contact/index.php', {
      method: "POST",
      mode: 'cors',
      body: JSON.stringify({name, email, message}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      (res) => (res.json())
    ).then((res) => {
      if (res.status === 'success') {
        console.log('Message sent');
        resetForm();
      } else if (res.status === 'fail') {
        console.log('Message failed to sent');
      }
    }).catch(err => console.log(err))
  }

  return(
    <StyledContactSide 
      className="ContactSide"
      contactSideOpen={contactSideOpen} >
        <div className="contactSide-menu">
          <h2>Let's talk!</h2>
          <p>Call me right now, or leave a message and I'll get back to you within 24 hours.</p>
          <div className="contact-tel">
            <a href="tel:06-30087005"><CallIcon /> +31 6 30087005</a>
          </div>
          <div className="contact-side">
            <form onSubmit={handleSubmit} method="POST" >
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                value={name}
                placeholder="Please enter your name" 
                onChange={e => setName(e.target.value)} />
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                value={email}
                placeholder="Please enter your email"
                onChange={e => setEmail(e.target.value)} />
              <label htmlFor="message">Message:</label>
              <textarea 
                type="text" 
                value={message}
                placeholder="Write a short message" 
                rows={5} 
                onChange={e => setMessage(e.target.value)} />
              <button type="submit" className="contact-submit">Send message!</button>
            </form>
          </div>
        <button className="close-side" onClick={() => setContactSideOpen(!contactSideOpen)}><CloseIcon /></button>
        </div>
      </StyledContactSide>
  );
};

export default ContactSide;
