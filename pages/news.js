"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

export default function news() {

  return (
    <div>
        <Imager src={'/newss.svg'} alt='' layout='fill'/>
    </div>
  )
}
const Imager = styled(Image)`
width: 100%;
height: auto;
`;
