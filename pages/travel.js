"use client"
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';

function travel() {

  return (
    <div>
        <Imager src={'/travels.svg'} alt='' width={400} height={400}/>
    </div>
  )
}
const Imager = styled(Image)`
width: 100%;
height: auto;
`;
export default travel