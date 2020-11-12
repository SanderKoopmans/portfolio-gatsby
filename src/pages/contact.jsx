import React, { useState } from 'react';
import SubBar from '../components/SubBar/SubBar';
import { Columns, Column } from '../components/Columns';
import { Section } from '../components/Sections';
import { Form } from '../components/Form/Form.styled';
import { H2, H3, H4, A, P } from '../components/Font';
import FormInput from '../components/Form/FormInput';
import FormText from '../components/Form/FormText';
import CallIcon from '@material-ui/icons/Call';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import SubjectIcon from '@material-ui/icons/Subject';
import Footer from '../components/Footer/Footer';
import Wrapper from '../components/Wrapper';

const Contact = () => {
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

  return (
    <>
      <SubBar />
      <Wrapper className='page-wrapper'>
          <header className='section background content-small'>
            <H4>Heb je een vraag?</H4>
            <H2>Neem contact op!</H2>
            <P>Ik ben hier om te helpen, en elke vraag die je hebt te beantwoorden. Ik kijk ernaar uit van je te horen.</P>
          </header>
          <Section className='section'>
            <Wrapper className='content-wrapper'>
            <Columns>
              <Column>
                <H3>Bel direct!</H3>
                <div className="contact-tel">
                  <A href="tel:06-30087005"><CallIcon /> +31 6 30087005</A>
                </div>
                <br />
                <p>Of laat een bericht achter en ik kom bij je terug.</p>
              </Column>
              <Column>
                <div className="contactContainer">
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
                        <button type="submit" className="contact-submit">Verstuur bericht!</button>
                      </Form>
                </div>
              </Column>
            </Columns>
          </Wrapper>
        </Section>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
