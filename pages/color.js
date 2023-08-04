"use client"
import React from 'react';
import Image from 'next/image';

export default function decorhome() {

  return (
    <div>
        <Image src={'/color2.png'} alt='' layout='responsive' width='400' height='400' />
        <p>50% progress</p>
        <Image src={'/color.png'} alt=''  layout='responsive' width='400' height='400'  />
    </div>
  )
}
