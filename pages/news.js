"use client"
import React from 'react';
import Image from 'next/image';

export default function news() {

  return (
    <div>
        <Image src={'/newss.svg'} alt='' layout='responsive' width='400' height='400' />
    </div>
  )
}
