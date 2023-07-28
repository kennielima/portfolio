"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

export default function decorhome() {

  return (
    <div>
        <Imager src={'/color2.png'} alt='' width={1400} height={700} />
        {/* <p>50% progress</p> */}
        <Imager src={'/color.png'} alt='' width={1400} height={700} />
    </div>
  )
}
const Imager = styled(Image)`
width: 100%;
height: auto;
`;
