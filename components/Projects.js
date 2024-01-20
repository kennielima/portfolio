"use client"
import React, { Fragment, useContext, useRef } from 'react';
import { styled } from 'styled-components';
import textContext from './ContextProvider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import Designs from './Designs';
import Graphics from './Graphics';

const PROJECTS = [
  {
    href: "https://kehinde-oyewale-lendsqr-fe-test.vercel.app/",
    span: 'Lendsqr',
    image: '/lendsqr.jpg',
    code: 'https://github.com/kennielima/lendsqr-fe-test',
    stack1: 'TypeScript',
    stack2: 'React/Next.js',
    stack3: 'SCSS',
    stack4: 'Jest'
  },
  {
    href: "https://msboutique.vercel.app",
    span: 'MS Boutique-ongoing',
    image: '/msb.jpg',
    code: 'https://github.com/kennielima/ms-boutique',
    stack1: 'TypeScript',
    stack2: 'React/Next.js',
    stack3: 'Firebase',
    stack4: 'TailwindCSS',
    stack5: 'Swiper'
  },
  {
    href: "https://movieverse-neon.vercel.app",
    span: 'Movieverse',
    image: '/movies.jpg',
    code: 'https://github.com/kennielima/movieverse',
    stack1: 'ReactJs',
    stack2: 'NextJs',
    stack3: 'TailwindCSS',
    stack4: 'REST API',
  },
  {
    href: "https://peerstake.vercel.app/",
    span: 'Peer Stake',
    image: '/betting.json',
    code: 'https://github.com/kennielima/betting-app',
    stack1: 'ReactJs',
    stack2: 'Stripe',
    stack3: 'Google OAuth',
    stack4: 'Context API',
    // stack5: 'React Router',
  },
  {
    href: "https://walletapp-tawny.vercel.app",
    span: 'WalletNode',
    image: '/wallet2.jpg',
    code: 'https://github.com/kennielima/walletapp',
    stack1: 'ReactJs',
    stack2: 'Framer',
    stack3: 'Tawk',
    stack4: 'React Router',
  },
  {
    href: "https://deliciouss-kennielima.vercel.app/",
    span: 'Deliciouss',
    image: '/deli.json',
    code: 'https://github.com/kennielima/deliciouss.github.io',
    stack1: 'ReactJs',
    stack2: 'Splide',
    stack3: 'REST API',
    stack4: 'Framer',
    stack5: 'React Router',
  },
  {
    href: "https://foodonline-io.vercel.app",
    span: 'FoodOnline',
    image: '/fo.jpg',
    code: 'https://github.com/kennielima/foodapp.github.io',
    stack1: 'ReactJs',
    stack2: 'Context API',
    stack3: 'CSS',
  },
  {
    href: "https://kennielima.vercel.app",
    span: 'Portfolio Project',
    image: '/portf.jpg',
    code: 'https://github.com/kennielima/portfolio',
    stack1: 'React/NextJs',
    stack2: 'Formspark',
    stack3: 'Framer',
    stack4: 'Context API',
    stack5: 'Splide',
  },
  {
    href: "https://advtgadgets.vercel.app",
    span: 'Advt',
    image: '/advt2.jpg',
    code: 'https://github.com/kennielima/myapp.github.io',
    stack1: 'HTML',
    stack2: 'CSS',
    stack3: 'Javascript'
  },
  {
    href: "https://rockets-one.vercel.app/",
    span: 'Acme Rockets',
    image: '/rocket2.jpg',
    code: 'https://github.com/kennielima/rockets',
    stack1: 'HTML',
    stack2: 'TailwindCSS',
  },
  // {
  //   href: "https://expenses-vert.vercel.app",
  //   span: 'Expenses app',
  //   image: '/expense.json',
  //   code: 'https://github.com/kennielima/expenses',
  //   stack1: 'ReactJs',
  //   stack2: 'CSS',
  // },
  // {
  //   href: "https://limatictactoe-github-io.vercel.app",
  //   span: 'A Game of TIC-TAC-TOE',
  //   image: '/tictactoe.json',
  //   code: 'https://github.com/kennielima/limatictactoe.github.io',
  //   stack1: 'HTML',
  //   stack2: 'Javascript'
  // },
  // {
  //   href: "https://omnifood.kennielima.vercel.app",
  //   span: 'Omnifood',
  //   image: '/omni.json',
  //   code: 'https://github.com/kennielima/Omnifood'
  // },
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
          perPage: 2,
          arrows: true,
          pagination: true,
          drag: 'free',
          gap: '1rem',
          // type: 'loop',
          perMove: 1,
          width: 'auto',
          height: '36rem',
          breakpoints: {
            640: {
              perPage: 1,
            },
          }
        }}>
          {PROJECTS.map((project) => {
            return (
              <SplideSlide key={Math.random()}>
                <a href={project.href} target="_blank">
                  <Card key={Math.random()}>
                    <Image src={project.image} alt='' layout='fill' />
                    <p>
                      <span>{"<"}</span>
                      {project.span}
                      <span>{"/>"}</span>
                    </p>

                  </Card>
                </a>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', position: 'relative', bottom: '2.7rem' }}>
                  <Stack> {project.stack1} </Stack>
                  <Stack> {project.stack2} </Stack>
                  {project.stack3 && <Stack> {project.stack3} </Stack>}
                  {project.stack4 && <Stack> {project.stack4} </Stack>}
                  {project.stack5 && <Stack> {project.stack5} </Stack>}
                </div>
                <div>
                  <a href={project.href} target="_blank">
                    <button id='code'> View Site </button>
                  </a>
                  <a href={project.code} target="_blank">
                    <button id='code'> View Source Code</button>
                  </a>
                </div>
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
const Stack = styled.div`
background-color: #333333;
 border: none;
  padding: 0.1rem 1rem;
  font-size:1.3rem;
  font-family: roboto;
  border-radius: 0.5rem;
`

const Card = styled.div`
  width: auto;
  height: 30rem;
  background-color: #0c1e3269;
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
  opacity: 35%;
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
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  border: none;
  position: relative;
  top: -1.6rem; 
  margin-left: 1rem;
}
button{
  color: white;
  background-color: #D76427;
  cursor: pointer;
  /* padding: 1rem; */
}
button:hover {
  background-color: #c15922;
  
  transition: all 0.3s;
}
`;
export default Projects;