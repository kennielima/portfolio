"use client"
import React, { Fragment, useContext, useRef } from 'react';
import { styled } from 'styled-components';
import textContext from './ContextProvider';

export default function Projects() {
    const ctx = useContext(textContext);
    const ref = useRef();

    ctx.click === 'aboutscroll' && ref.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <Fragment>
            <About ref={ref}>
                <h1>About Me<span>()</span></h1>
                <Desc>
                    Self-taught web developer with a passion for learning, building pixel-perfect and interactive websites. Background in IT Career Consulting, graphic and UI/UX design. Currently looking for practical learning opportunities in a progressive environment.
                </Desc>
                <h2>What I do<span style={{ color: '#D76427' }}>()</span></h2>
                <Grid>
                    <Card>
                        <h3><span>{"<"}</span>Web Development<span>{"/>"}</span></h3>
                        <p>With Html, CSS, JS and frameworks like ReactJS and NextJS, I create Responsive and Interactive Website Designs</p>
                    </Card>
                    <Card>
                        <h3><span>{"<"}</span>UI/UX Design<span>{"/>"}</span></h3>
                        <p>With Figma Software, I create interactive designs for optimal User Experience</p>
                    </Card>
                    <Card>
                        <h3><span>{"<"}</span>Graphic Design<span>{"/>"}</span></h3>
                        <p>I make creative designs and graphics with tools like Photoshop and inDesign</p>
                    </Card>
                    <Card>
                        <h3><span>{"<"}</span>IT Consulting<span>{"/>"}</span></h3>
                        <p>
                            3 years experience in IT Career Consulting and ACIPM Certified, I counsel tech students on career paths. I track progress with LMS tools and coordinate projects from start to finish</p>
                    </Card>
                    <Card>
                        <h3><span>{"<"}</span>Technical Writing<span>{"/>"}</span></h3>
                        <p>I am a creative who has formerly written articles, stories, poems and I'm  open to exploring writing in the technical space</p>
                    </Card>
                    <Card>
                        <h3><span>{"<"}</span>Social Media Management<span>{"/>"}</span></h3>
                        <p>I create amazing content and can manage brands  with strategies designed to increase brand visibility.</p>
                    </Card>
                </Grid>
            </About>
            <hr style={{ border: '2px solid #D76427' }}></hr>
        </Fragment>
    )
}
const Desc = styled.div`
background-color: #263445;
height: auto;
width: 100%;
padding: 4rem;
border-radius: 2rem;
border: 2px solid #D76427;
margin: 5rem 0 0 0;
font-size: 1.7rem;
line-height: 2.2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  margin: 1rem 4rem;
@media(max-width:1000px){
    grid-template-columns: auto auto;
}
@media(max-width:480px){
    grid-template-columns: auto;
}

`;

const Card = styled.div`
height: auto;
width: 30rem;
background-color: #263445;
border: 2px solid #D76427;
box-shadow: 1px 1px 20px 2px rgba(215, 101, 39, 0.817);
margin: 4rem 1rem;
border-radius: 2rem;
padding: 3rem 0;
@media(max-width:480px){
    height: auto;
width: 25rem;
margin: 2rem auto;
}
&:hover{
    cursor: pointer;
background-color: #26344520;
border: 2px solid #D76427;
box-shadow: none;
}
h3 {
    font-size: 2rem;
    font-weight: 600;
}
span {
  /* color: #62dbfc; */
  color: #D76427;
}
p {
    padding: 2rem;
    font-size: 1.7rem;
  color: #ffffffdd;
}
`;
const About = styled.div`
background-image: url('/herodark1.jpg');
background-repeat: repeat;
background-size: cover;
background-attachment: fixed;
padding: 5% 10%;
@media(max-width:480px){
    background-image: url('/herodark.png');
    /* background-size: auto; */
    background-attachment: scroll;
  }
h1 {
font-size: 5rem;
color: #62dbfc; 
@media(max-width:480px){
    padding-top: 3rem;
  }
}
h2 {
font-size: 3rem;
padding-bottom: 1.5rem;
text-align: start;
margin-top: 7rem;
font-weight: 400;
}
`;
