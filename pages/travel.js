"use client"
import React from 'react';
import Image from 'next/image';

export default function travel() {

  return (
    <div>
        <Image src={'/travels.svg'} alt=''  layout='responsive' width='400' height='400' />
    </div>
  )
}
