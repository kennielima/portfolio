"use client"
import React from 'react';
import Image from 'next/image';

export default function decorhome() {

  return (
    <div>
        <Image src={'/flier.jpg'} alt=''  layout='responsive' width='400' height='400'  />
    </div>
  )
}
