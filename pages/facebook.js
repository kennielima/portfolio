"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

export default function facebook() {

  return (
    <div style={{ display: 'grid'}}>
        <Imager src={'/facebook.svg'} alt='' width={1400} height={1400}/>
        <Imager src={'/fb1.jpg'} alt='' width={400} height={1000}/>
        <Imager src={'/fb2.jpg'} alt='' width={400} height={1000}/>
        <Imager src={'/fb3.jpg'} alt='' width={400} height={1000}/>
        <Imager src={'/fb4.jpg'} alt='' width={400} height={1000}/>
    </div>
  )
}
const Imager = styled(Image)`
width: 100%;
height: auto;
`;
