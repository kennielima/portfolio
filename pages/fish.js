"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

export default function decorhome() {

  return (
    <div>
        <Imager src={'/fish2.png'} alt='' layout='fill' />
    </div>
  )
}
const Imager = styled(Image)`
width: 100%;
height: auto;
`;
