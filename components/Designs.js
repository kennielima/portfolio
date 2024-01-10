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
        image: '/travel.jpg',
        link: 'https://www.figma.com/community/file/1225359101618116677/travel-landing'
    },
    {
        href: '/news',
        span: 'News Page',
        image: 'news.jpg',
        link: 'https://www.figma.com/community/file/1225359767537955917/daily-news'
    },
    {
        href: '/eatmore',
        span: 'Food App',
        image: 'eat44.jpg',
        link: 'https://www.figma.com/community/file/1225359243560872007/food-app'
    },
    {
        href: '/facebook',
        span: 'Facebook Clone',
        image: '/fb3.svg',
        link: 'https://www.figma.com/community/file/1225360138629097551/decorhome'
    },
    {
        href: '/furniture',
        span: 'Furniture Landing page',
        image: 'furniture.jpg',
        link: 'https://www.figma.com/community/file/1225359388539450441/furniture-landing-page'
    }
    ,
    {
        href: '/decorhome',
        span: 'Decor Landing page',
        image: 'decorhome2.jpg',
        link: 'https://www.figma.com/community/file/1225360138629097551/decorhome'
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
                                    <Image src={image.image} alt='' width={300} height={300} layout='responsive' />
                                    <p>
                                        <span>{"<"}</span>
                                        {image.span}
                                        <span>{"/>"}</span>
                                    </p>
                                </Card>
                            </Link>
                            <a href={image.link} target="_blank">
                                <button style={{padding:"0.5rem 1rem", border:'none',borderRadius:"0.5rem"}}> Figma Link </button>
                            </a>
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

