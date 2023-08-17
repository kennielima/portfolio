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
        href: '/travel',
        span: 'Travel Site',
        image: '/travel.jpg'
    },
    {
        href: '/news',
        span: 'News Page',
        image: 'news.jpg'
    },
    {
        href: '/eatmore',
        span: 'Food App',
        image: 'eat44.jpg'
    },
    {
        href: '/facebook',
        span: 'Facebook Clone design',
        image: '/fb3.svg'
    },
    {
        href: '/furniture',
        span: 'Furniture Landing page',
        image: 'furniture.jpg'
    }
    ,
    {
        href: '/decorhome',
        span: 'Decor Landing page',
        image: 'decorhome2.jpg'
    }
]
export default function Designs() {
    const ctx = useContext(textContext);

    return (
        <div>
            <H2>UI/UX Design<span style={{ color: '#ffffff' }}>()</span></H2>
            <Splide options={{
                perPage: 2,
                arrows: true,
                pagination: true,
                drag: 'free',
                gap: '1rem',
                // type: 'loop',
                perMove: 1,
                width: 'auto',
                height: '33rem',
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
                                    <Image src={image.image} alt='' width={300} height={300} layout='responsive' />
                                    <p>
                                        <span>{"<"}</span>
                                        {image.span}
                                        <span>{"/>"}</span>
                                    </p>
                                </Card>
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

const Card = styled.div`
  width: auto;
  height: 30rem;
  background-color: #0c1e3249;
  border-radius: 2rem;
  overflow: hidden;
  /* border: 0.3rem solid #D76427; */
  border: 0.3rem solid #62dbfc;
  cursor: pointer;
  position: relative;
margin: 0 5rem;

&:hover {
  background-color: #D7642769;
  /* border: 0.3rem solid #62dbfc; */
  border: 0.3rem solid #D76427;
  transition: all 0.5s;
}
@media(max-width:480px) {
margin: auto;
/* width: 75%; */
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
  opacity: 20%;
  width: 100%;
  height: auto;
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

