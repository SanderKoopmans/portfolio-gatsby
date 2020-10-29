import React, { useState } from 'react';
import { StyledContactSide } from './ContactSide.styled';
import { Form } from '../Form/Form.styled';
import { H2, A } from '../Font';
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
          <H2 className='bold'>Let's talk!</H2>
          <p>Bel direct, of laat een bericht achter via het formulier. Ik kom binnen 24uur bij je terug!</p>
          <div className="contact-tel">
            <A href="tel:06-30087005"><CallIcon /> +31 6 30087005</A>
          </div>
          <div className="contact-side">
            <Form onSubmit={handleSubmit} method="POST" >
              <FormInput 
                icon={<PersonIcon />}
                label='Naam:'
                name='name'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Vul hier je naam in'
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
                placeholder='Vul hier je email in'
                required
                className='input'
                />
              <FormText 
                icon={<SubjectIcon />}
                label='Bericht:'
                name='message'
                type='text'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Schrijf een kort bericht'
                rows={5}
                required
                className='textarea'
              />
              <button type="submit" className="contact-submit">Verstuur bericht</button>
            </Form>
          </div>
        <button className="close-side" onClick={() => setContactSideOpen(!contactSideOpen)}><CloseIcon /></button>
        </div>
      </StyledContactSide>
  );
};

export default ContactSide;
