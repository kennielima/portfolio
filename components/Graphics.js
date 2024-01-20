"use client"
import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Link from 'next/link';
import Image from 'next/image';
import textContext from './ContextProvider';

const Images = [
    {
        href: '/color',
        span: 'Landing Page',
        image: '/art.jpg',
        stack: 'Photoshop'
    },
    {
        href: '/fish',
        span: 'Fish Graphics',
        image: '/fish.jpg',
        stack: 'Photoshop'
    },
    {
        href: '/nhs',
        span: 'Flier',
        image: '/nhs2.jpg',
        stack: 'Photoshop'
    },
    {
        href: '/flier',
        span: 'Flier',
        image: '/flier.jpg',
        stack: 'InDesign'
    },
    {
        href: '/flier2',
        span: 'Flier',
        image: '/flier2.jpg',
        stack: 'InDesign'
    }
]
export default function Graphics() {
    const ctx = useContext(textContext);

    return (
        <div>
            <H2>Graphic Design<span style={{ color: '#ffffff' }}>()</span></H2>
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
                {Images.map((image) => {
                    return (
                        <SplideSlide key={Math.random()}>
                            <Link href={image.href} target="_blank">
                                <Card
                                    onClick={() => ctx.dispatch({ type: 'hidenav' })}
                                >
                                    <Image src={image.image} alt='' layout='fill' />
                                    <p>
                                        <span>{"<"}</span>
                                        {image.span}
                                        <span>{"/>"}</span>
                                    </p>
                                </Card>
                            </Link>
                            <Stack> {image.stack} </Stack>
                            <a href={image.href} target="_blank">
                                <button style={{ padding: "0.7rem 1rem", position: 'relative', top: '-1.7rem', border: 'none', borderRadius: "0.5rem" }}> View Design </button>
                            </a>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}
const Stack = styled.div`
background-color: #333333;
 border: none;
  padding: 0.1rem 1rem;
  font-size:1.3rem;
  font-family: roboto;
  border-radius: 0.5rem;
  margin: auto;
position: relative; 
bottom: 2.7rem;
width: 8rem;
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
&:hover {
  background-color: #D7642769;
  /* border: 0.3rem solid #62dbfc; */
  border: 0.3rem solid #D76427;
  transition: all 0.5s;
}
@media(min-width:480px) {
margin: 0 5rem;
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
  opacity: 40%;
  width: 100%;
  height: 100%;
}
`;
const H2 = styled.h2`
    font-size: 3rem;
    color: #D76427; 
    padding-bottom: 2rem;
    text-align: start;
    margin-top: 12rem;
    @media(max-width:480px){
    margin-top: 6rem;
  }
`;

