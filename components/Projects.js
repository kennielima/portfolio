"use client"
import React, { Fragment, useContext, useRef } from 'react';
import { styled } from 'styled-components';
import textContext from './ContextProvider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import Designs from './Designs';
import Graphics from './Graphics';
// import Link from 'next/link';

const PROJECTS = [
  {
    href: "https://bettingapp-drab.vercel.app",
    span: ' Betting App',
    image: '/betting.json',
    code: 'https://github.com/kennielima/betting-app'
  },
  {
    href: "https://foodapp-github-io.vercel.app",
    span: 'Food Ordering App',
    image: '/food.json',
    code: 'https://github.com/kennielima/foodapp.github.io'
  },
  {
    href: "https://walletapp-tawny.vercel.app",
    span: 'Crypto App',
    image: '/wallet.json',
    code: 'https://github.com/kennielima/walletapp'
  },
  {
    href: "https://myapp-github-io-three.vercel.app",
    span: 'Gadgets Site',
    image: '/advt.json',
    code: 'https://github.com/kennielima/myapp.github.io'
  },
  {
    href: "https://deliciouss-github-io-kennielima.vercel.app/",
    span: 'Recipe Site',
    image: '/deli.json',
    code: 'https://github.com/kennielima/deliciouss.github.io'
  },
  {
    href: "https://omnifood.kennielima.vercel.app",
    span: 'Omnifood',
    image: '/omni.json',
    code: 'https://github.com/kennielima/Omnifood'
  },
  {
    href: "https://rockets-one.vercel.app/",
    span: 'Acme Rockets',
    image: '/rocket.json',
    code: 'https://github.com/kennielima/rockets'
  },
  {
    href: "https://expenses.vert.vercel.app",
    span: 'Expenses app',
    image: '/expense.json',
    code: 'https://github.com/kennielima/expenses'
  },
  {
    href: "https://limatictactoe-github-io.vercel.app",
    span: 'A Game of TIC-TAC-TOE',
    image: '/tictactoe.json',
    code: 'https://github.com/kennielima/limatictactoe.github.io'
  },
]
function Projects() {
  const ctx = useContext(textContext);
  const ref = useRef();

  ctx.click === 'projectscroll' && ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Fragment>
      <Bodyy ref={ref}>
        <h1>My Projects<span style={{ color: '#ffffff' }}>()</span></h1>
        <h2>Web Development<span style={{ color: '#ffffff' }}>()</span></h2>
        <Splide options={{
          perPage: 1,
          arrows: false,
          pagination: true,
          drag: 'free',
          gap: '5rem',
          // type: 'loop',
          perMove: 1,
          width: 'auto',
          height: '35rem'
        }}>
          {PROJECTS.map((project) => {
            return (
              <SplideSlide key={Math.random()}>
                <a href={project.href} target="_blank">
                  <Card key={Math.random()}>
                    <Image src={project.image} alt='' layout='fill'/>
                    <p>
                      <span>{"<"}</span>
                      {project.span}
                      <span>{"/>"}</span>
                    </p>
                  </Card>
                </a>
                <a href={project.code} target="_blank"><button id='code'> Source Code</button></a>
              </SplideSlide>
            )
          })}
        </Splide>
        <Designs />
        <Graphics />
      </Bodyy >
      <hr style={{ border: '2px solid #D76427' }}></hr>
    </Fragment>
  )
}

const Card = styled.div`
  width: auto;
  height: 30rem;
  background-color: #0c1e32;
  border-radius: 2rem;
  overflow: hidden;
  /* border: 0.3rem solid #D76427; */
  border: 0.3rem solid #62dbfc;
  cursor: pointer;
  position: relative;
  margin: auto;
&:hover {
  background-color: #D7642769;
  /* border: 0.3rem solid #62dbfc; */
  border: 0.3rem solid #D76427;
  transition: all 0.5s;
}
@media(min-width:480px) {
margin: 0 4rem;
}
/* @media(max-width:600px) {
  width: 20rem;
  height: 20rem;
} */

p{
position: absolute;
  bottom: 3rem;
  font-weight: bold;
  font-size: 2rem;
  width: 95%;
  margin: auto;
  /* color: #c25a23; */
  color: #62dbfc;
    letter-spacing: 0.2rem;

}
span {
  /* color: #62dbfc; */
  color: #D76427;
}
img {
  opacity: 25%;
  width: 100%;
}
`;
const Bodyy = styled.div`
  padding: 5% 10% 10% 10%;
  background-image: url('/herodark1.jpg');
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;
  @media(max-width:480px){
    background-image: url('/herodark.png');
    background-size: auto;
    background-attachment: scroll;
  }
h1 {
font-size: 5rem;
color: #62dbfc; 
margin-bottom: 8rem;
@media(max-width:480px){
    padding-top: 3rem;
    margin-bottom: 6rem;
  }
}
h2 {
font-size: 3rem;
color: #D76427; 
padding-bottom: 2rem;
text-align: start;
}
#code {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  /* position: relative;
  top: -2.2rem; */
}
button{
  color: white;
  background-color: #ac501fc9;
  cursor: pointer;
}
button:hover {
  background-color: #D76427;
  
  transition: all 0.3s;
}
`;
export default Projects;