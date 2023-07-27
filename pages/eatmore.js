"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

export default function eatmore() {

  return (
    <div>
        <Imager src={'/food.svg'} alt='' width={1400} height={1400}/>
        <Imager src={'/eat.svg'} alt='' width={1000} height={1000}/>
        <Imager src={'/eat2.svg'} alt='' width={1000} height={1000}/>
        <Imager src={'/eat3.svg'} alt='' width={1000} height={1000}/>
        <Imager src={'/eat4.svg'} alt='' width={1000} height={1000}/>
    </div>
  )
}
const Imager = styled(Image)`
width: auto;
height: auto;
`;
