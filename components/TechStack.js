"use client"
import React, { Fragment, useContext, useRef } from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import textContext from './ContextProvider';

export default function TechStack() {
  const ctx = useContext(textContext);
  const ref = useRef();

  ctx.click === 'stackscroll' && ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Fragment>
      <Stacks ref={ref}>
        <h1>TechStack<span style={{ color: '#ffffff' }}>()</span></h1>
        <Grid>
          <div><Image src='/html.svg' alt='' height={400} width={400} />HTML</div>
          <div><Image src='/css.png' alt='' height={200} width={200} />CSS</div>
          <div><Image src='/js.png' alt='' height={200} width={200} />Javascript</div>
          <div><Image src='/ts.png' alt='' height={200} width={200} /> Typescript </div>
          <div><Image src='/logo.svg' alt='' height={200} width={200} />ReactJs</div>
          <div><Image src='/next.png' alt='' height={200} width={200} />NextJs</div>
          <div><Image src='/tailwind.png' alt='' height={200} width={200} />TailwindCSS</div>
          <div><Image src='/fb.png' alt='' height={200} width={200} /> Firebase </div>
          <div><Image src='/github.png' alt='' height={200} width={200} /> Git Version Control</div>
          <div><Image src='/jiraa.png' alt='' height={200} width={200} /> Jira </div>
          <div><Image src='/figma.png' alt='' height={200} width={200} />Figma</div>
          <div><Image src='/photoshop.png' alt='' height={200} width={200} /> Photoshop </div>
          <div><Image src='/pman.png' alt='' height={200} width={200} /> Postman </div>
          <div><Image src='/redux2.jpg' alt='' height={200} width={200} /> Redux</div>
          <div><Image src='/indesign.png' alt='' height={200} width={200} /> InDesign </div> 
        </Grid>
        <h2 style={{color: '#62dbfc', fontSize:'2rem'}}>Currently Learning<span>()</span></h2>
        <Grid>
          <div><Image src='/node.png' alt='' height={200} width={200} />NodeJs <br />(in view)</div>
          <div><Image src='/xpress.png' alt='' height={200} width={200} /> Express <br />(in view)</div>
          <div><Image src='/mongo.png' alt='' height={200} width={200} /> MongoDb <br />(in view)</div>
        </Grid>
      </Stacks>
      <hr style={{ border: '2px solid #D76427' }}></hr>
    </Fragment>
  )
}
const Grid = styled.div`
  display: grid;
  margin: 4rem 7rem;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
@media(max-width:480px){
  gap: 1rem;
  }
div {
  height: 10rem;
  width: 10rem;
  background-color: #263445;
  border-radius: 20%;
  margin: 2rem 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #e6e6e6;
}
`;

const Stacks = styled.div`
  padding: 5% 10%;
  background-image: url('/herodark1.jpg');
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;
   @media(max-width:480px){
    background-image: url('/herodark.png');
    background-size: auto;
    background-attachment: scroll;
    /* background-position: top left; */
  }
h1 {
  font-size: 5rem;
  color: #62dbfc; 
  @media(max-width:480px){
    padding-top: 3rem;
  }
}
img {
    height: 5rem;
    width: 5rem;

}
`;
