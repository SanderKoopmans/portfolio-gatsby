import React, { useState } from 'react';
import { StyledContactSide } from './ContactSide.styled';
import { Form } from '../Form/Form.styled';
import FormInput from '../Form/FormInput';
import FormText from '../Form/FormText';
import CallIcon from '@material-ui/icons/Call';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
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
            <Form onSubmit={handleSubmit} method="POST" >
              <FormInput 
                icon={<PersonIcon />}
                label='Name:'
                name='name'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Please enter your name'
                required
                className='input'
                />
              <FormInput 
                icon={<EmailIcon />}
                label='Email:'
                name='email'
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Please enter your email'
                required
                className='input'
                />
              <FormText 
                icon={<SubjectIcon />}
                label='Message:'
                name='message'
                type='text'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Write a short message'
                rows={5}
                required
                className='textarea'
              />
              <button type="submit" className="contact-submit">Send message!</button>
            </Form>
          </div>
        <button className="close-side" onClick={() => setContactSideOpen(!contactSideOpen)}><CloseIcon /></button>
        </div>
      </StyledContactSide>
  );
};

export default ContactSide;
