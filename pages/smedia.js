"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

export default function eatmore() {

  return (
    <div>
        <Imager src={'/smedia.svg'} alt=''  layout='responsive' width='400' height='400' />
        <Imager src={'/1.svg'} alt='' width={1000} height={1000}/>
        <Imager src={'/2.svg'} alt='' width={1000} height={1000}/>
        <Imager src={'/3.svg'} alt='' width={1000} height={1000}/>
        <Imager src={'/4.svg'} alt='' width={1000} height={1000}/>
    </div>
  )
}
const Imager = styled(Image)`
width: auto;
height: auto;
`;
