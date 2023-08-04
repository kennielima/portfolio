"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

export default function facebook() {

  return (
    <div style={{ display: 'grid'}}>
        <Imager src={'/facebook.svg'} alt='' layout='responsive' width='400' height='400' />
        <Imager src={'/fb1.svg'} alt='' layout='responsive' width='400' height='400' />
        <Imager src={'/fb2.svg'} alt='' layout='responsive' width='400' height='400' />
        <Imager src={'/fb3.svg'} alt='' layout='responsive' width='400' height='400' />
        <Imager src={'/fb4.svg'} alt='' layout='responsive' width='400' height='400' />
    </div>
  )
}
const Imager = styled(Image)`
width: 100%;
height: auto;
`;
