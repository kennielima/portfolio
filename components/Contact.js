"use client"
import React, { Fragment, useContext, useRef, useState } from 'react';
import { styled } from 'styled-components';
import textContext from './ContextProvider';
import Image from 'next/image';
import axios from 'axios';

export default function Contact() {
    const ctx = useContext(textContext);
    const ref = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    ctx.click === 'contactscroll' && ref.current?.scrollIntoView({ behavior: 'smooth' });
    
    const submitform = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://submit-form.com/VGaIAgFj',
                {
                    name: name,
                    email: email,
                    message: message,
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <Fragment>
            <Hire ref={ref}>
                <h1>Hire Me<span>()</span></h1>
                <h2 id='subhead'>{"if (feedback = positive && interested.workingTogether){ let kennie === 'happy';"}</h2>
                
                <Form
                    onSubmit={submitform}
                    action="https://submit-form.com/VGaIAgFj"
                >
                    <input
                        placeholder='How can i call you?'
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder='Your email address'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder='Type message...'
                        type="textarea"
                        id="msg"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}

                    />
                    <button type='submit'>Send</button>
                </Form>

                <Links>
                    <h2>OR <br /> <span style={{ color: '#D76427' }}>REACH OUT VIA</span></h2>
                    <div>
                        <a href='"whatsapp://send?phone=+2347038222850"' target='_blank'><Image src='/watsapp.png' alt='' height={50} width={50} /></a>
                        <a href='mailto:kennylima970@gmail.com' target='_blank'><Image src='/mail.png' alt='' height={50} width={50} /></a>
                    </div>
                    <h3><span style={{ color: '#D76427' }}>ALSO </span><br /> CHECK ME OUT AT</h3>
                    <div>
                        <a href='https://github.com/kennielima' target='_blank'><Image src='/github.png' alt='' height={50} width={50} /></a>
                        <a href='https://www.linkedin.com/in/kennielima/' target='_blank'><Image src='/linkedinn.png' alt='' height={50} width={50} /></a>
                    </div>
                </Links>
            </Hire>
        </Fragment>
    )
}
const Links = styled.div`
h2 {
    font-size: 3rem;
}
h3 {
    font-size: 2rem;
}
h2, h3 {
    font-weight: normal;
    letter-spacing: 0.2rem;
    margin: 6rem 0 3rem 0;
}
div {
    display: flex;
    gap: 2rem;
    justify-content: center;
}
img {
    border-radius: 50%;

}
img:hover{
        border: 2px solid #ffffff;
        opacity: 70%;
        transition: all 0.2s;
        box-shadow: 1px 1px 7px 2px rgba(255, 255, 255, 0.917);
    }
`;

const Form = styled.form`
width: 50rem;
margin: auto;
display: grid;
grid-gap: 4rem;

@media(max-width:480px) {
    width: 35rem;
}
input{
    border: none;
    background-color: #00000000;
    height: 3rem;
    margin-top: 5rem;
    font-size: 2rem;
    padding: 0 0 1rem 1.5rem;
    font-family: 'Roboto Mono', monospace;
    border-bottom: 4px solid #62dbfcdd;
}
#msg {
    border: 4px solid #62dbfcdd;
    height: 20rem;
    border-radius: 1rem;
    padding-bottom: 12rem;
}
button {
    width: auto;
    padding: 1rem 3rem;
    margin: -1rem 0 0 auto;
    background-color: #D76427;
    border: 1px solid white;
    border-radius: 1rem;
    color: white;
    @media(max-width:480px) {
        width: 100%;
}
}
button:hover {
    border: 1px solid white;
    transition: background-color 0.5s;
    background-color: rgba(2,37,62, 0.61);
}

`;
const Hire = styled.div`
  background-image: url('/herodark.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 5% 10%;
  width: 100vw;
h1 {
  font-size: 5rem;
  color: #62dbfc; 
}
#subhead{
    font-size: 3rem;
letter-spacing: 0.2rem;
margin: 5rem 0;
@media(max-width:480px) {
    font-size: 2.2rem;
    margin-top: 3rem;
    padding: 0 1rem;
}
}

`;