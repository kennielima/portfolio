"use client"
import React, { Fragment, useContext, useRef } from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import textContext from './ContextProvider';
import Link from 'next/link';

function Hero() {
    const ctx = useContext(textContext);
    const ref = useRef();
    ctx.click === 'heroscroll' && ref.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <Fragment>
            <Heros ref={ref}>
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
                    <Link href='/OYEWALE-KEHINDE.pdf' target='_blank'>
                        <button style={{ display: 'flex', alignItems: 'center' }}>Resume
                            <Image src='cvv.png' style={{ marginLeft: '0.2rem' }} alt='' height={18} width={18} />
                        </button>
                    </Link>
                </div>
                <Image src='/unnamed.jpg' alt='' id='mypic' height={400} width={400} />
                {/* <Image src='/logojs.svg' alt='' className='logos js' height={200} width={200} />
                <Image src='/logo.svg' alt='' className='logos react' height={200} width={200} />
                <Image src='/figma.png' alt='' className='logos figma' height={200} width={200} /> */}
            </Heros>
            <hr style={{ border: '2px solid #D76427' }}></hr>
        </Fragment>
    )
}
const Heros = styled.div`
    background-image: url('/herodark1.jpg');
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
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
    width: 35%;
    position:relative;
}
#mypic:hover {
    padding: 0.1rem;
    border: 3rem solid rgba(215, 100, 39, 0.5);
    /* transition: all 0.3s; */
}
.logos{
    border-radius: 50%;
    position:absolute;
    z-index: 0;
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
a {
    text-decoration: none;
}
@media(max-width: 1400px){
#mypic {
    height: 55%;
    width: 35%; 
}
.logos{
        display: none;
    }
}
@media(max-width: 1050px){
#mypic {
    height: 50%;
    width: 35%; 
}}
@media(max-width: 900px){
    padding: 0 5%;
    justify-content: space-around;

#intro {
    margin-top: 3rem;
}
#mypic {
    height: 40%;
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
@media(max-width: 768px){
    #mypic {
    height: 35%;
    width: 35%; 
}}
@media(max-width: 480px){
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
    align-items: center;
    background-image: url('/herodark22.jpg');
    background-size: auto;

.hello {
    text-align: center;
    line-height: 4rem;
    padding-right: 4rem;
}
.names {
    line-height: 4.5rem;
    margin: 0 0 0 1rem;
}
#surname {
    padding: 0rem 0 0.3rem 10rem;
}

#mypic {
    width: 65%; 
    height: 40%;
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




// padding: auto
// .images {
//     width: auto;
//     height: 50%;
//     border-radius: 50%;
//     border: 3rem solid rgba(215, 100, 39, 0.91);
//     box-shadow: 1px 1px 100px 10px rgba(215, 100, 39, 0.9);
// }
// #mypic {
//     height: 100%;
//     width: 100%;
//     border-radius: 50%;
// }
// .images:hover {
//     padding: 0.1rem;
//     border: 3rem solid rgba(215, 100, 39, 0.5);
//     transition: all 0.3s;
// }
// .images {
//     width: 35%; 
//     height: 35%;
// }
// .images {
//     margin: 0 8rem;
//     width: auto; 
//     height: 35%;
//     border: 2rem solid rgba(215, 100, 39, 0.91);
// }