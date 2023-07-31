"use client"
import React, { Fragment, useContext, useRef } from 'react';
import Image from 'next/image';
// import herodark from '@/public/herodark.png';
// import logojs from './public/logojs.svg';
// import figma from '@/public/figma.png';
// import logo from '@/public/logo.svg';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import textContext from './ContextProvider';

function Hero() {
    const ctx = useContext(textContext);
    const ref = useRef();
    ctx.click === 'heroscroll' && ref.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <Fragment>
            <Heros ref={ref}>
                <motion.div animate={{ opacity: 6 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }}>
                    <div id='intro'>
                        <span className='hello'>Hello,  I am</span>
                        <span
                            className='names'
                            style={{ paddingLeft: '4rem' }}>
                            <span
                                style={{ fontSize: '6rem', color: '#d76527' }}>{"<"}</span>
                            Kehinde
                        </span>
                        <span
                            className='names'
                            id='surname'
                            style={{ paddingLeft: '11rem' }}>Oyewale
                            <span style={{ fontSize: '5rem', color: '#d76527' }}>{"/>"}</span>
                        </span>
                        <span
                            className='hello'
                            style={{ paddingLeft: '3.2rem' }}>Front-End Developer
                        </span>
                        <button>Resume</button>
                    </div>
                </motion.div>
                <Image src='/mypic2.png' alt='' id='mypic' height={400} width={400} />
                <Image src='/logojs.svg' alt='' className='logos js' height={200} width={200} />
                <Image src='/logo.svg' alt='' className='logos react' height={200} width={200} />
                <Image src='/figma.png' alt='' className='logos figma' height={200} width={200} />
            </Heros>
            <hr style={{ border: '2px solid #D76427' }}></hr>
        </Fragment>
    )
}
const Heros = styled.div`
    background-image: url('/herodark.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
#intro {
    color: white;
    display: grid;
    text-align: start;
    font-size: 3.4rem;
    line-height: 5rem;
@media(min-width: 1165px){
    font-size: 4rem;
    letter-spacing: 0.3rem;
}
}

.names {
    color: #62dbfc;
    font-size: 5rem;
    letter-spacing: 0.2rem;
}

#mypic {
    border-radius: 50%;
    border: 3rem solid rgba(215, 100, 39, 0.91);
    box-shadow: 1px 1px 100px 10px rgba(215, 100, 39, 0.9);
    height: 65%;
    width: 40%;
    position:relative;
}
#mypic:hover {
    padding: 0.1rem;
    border: 3rem solid rgba(215, 100, 39, 0.5);
    transition: all 0.3s;
}
.logos{
    border-radius: 50%;
    position:absolute;
    z-index: 0;
    /* @media(max-width:480px){
        display: none;
    } */
}
.logos:hover {
    padding: 0.2rem;
    box-shadow: 1px 1px 15px 3px rgba(30, 34, 53, 0.9);
    /* box-shadow: 0.5px 0.5px 100px 5px rgba(30, 34, 53, 0.9); */
    transition: all 0.3s;
}
.js {
    top: 23%;
    right: 12%;
    width: auto;
    height: 5rem;
}
.react{
    right: 8%;
    background-color: #1e2235;
    width: 9rem;
    height: 9rem;
}
.figma {
    right: 12%;
    top: 67%;
    width: auto;
    height: 12rem;
    background-color: #1e2235;
    border: 2rem solid #1e2235;
}
button {
    width: auto;
    padding: 1rem 2rem;
    margin: 2rem 0 0 auto;
    background-color: #D76427;
    border: none;
    border-radius: 1rem;
    color: white;
    border: 1px solid white;
}
button:hover {
    transition: background-color 0.5s;
    background-color: rgba(2,37,62, 0.61);
}

@media(max-width: 900px){
    padding: 0 5%;
    justify-content: space-around;

#intro {
    margin-top: 3rem;
}
#mypic {
    height: 35%;
    width: 35%; 
}

.js {
    top: 34.5%;
    right: 12%;
}
.react {
    right: 6%;
}
.figma {
    right: 11%;
    top: 60%;
}
}
@media(max-width: 480px){
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
    align-items: center;

.hello {
    text-align: center;
    line-height: 7rem;
    padding-right: 4rem;
}
.names {
    line-height: 4.5rem;
    margin: 0 0 0 1rem;
}
#surname {
    padding-top: 0.3rem;
    padding-left: 10rem;

}

#mypic {
    width: 60%; 
    border: 2rem solid rgba(215, 100, 39, 0.91);
}

.js {
    top: 51%;
    right: 27%;
    height: 5rem;
}
.react {
    top: 62%;
    right: 15%;
    height: 8.5rem;
    width: 8.5rem;
}
.figma {
    right: 18%;
    top: 77%;
    height: 12rem;
}
button {
    margin: 2rem auto;
}
.hello {
    font-size: 3.5rem;
}
}
`;
export default Hero;
