"use client"
import React from 'react';
import RightPart from './RightPart/RightPart';
import Search from './Search';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function NavigationBar() {
  const router=useRouter()
  return (
    
      <main className='sm:p-5'>
        <div className='flex  border-2 border-gray-400 mt-2 rounded items-center gap-5 p-2 mx-5'>
          <div>
          <Image
        src="/download.png"
        alt="Picture of the author"
        width={50}
        height={50}
        className='rounded-full cursor-pointer'
        onClick={()=>router.push('/user')}
          />

          </div>
    <Search/>
    <RightPart/>
 

        </div>

    </main>
  )
}