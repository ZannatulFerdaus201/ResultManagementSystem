"use client"

import useCurrentUser from '@/app/hooks/useCurrentUser';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { GridLoader } from 'react-spinners';
import { BsCardChecklist, BsGraphUp } from 'react-icons/bs';
import { HiLogout } from 'react-icons/hi';
import { IoAddCircleOutline } from 'react-icons/io5';
import ProfileItems from './components/ProfileItems';
import DashBoard from './components/DashBoard';
import AddCourse from './components/AddCourse';
import { useRouter } from 'next/navigation';
import {signOut} from "next-auth/react"
import AddResult from './components/AddResult';
import ViewResult from './components/ViewResult';
import Image from 'next/image';
import Link from 'next/link';
export interface Tab {
    title:string,
    icon?:IconType
    href?:string
}




const page:React.FC= () => {

    const studentTabs:Tab[] = [
        {
            title:"Dashboard",
            icon:BsGraphUp
        },
        {
            title:'Results',
            icon:BsCardChecklist
        },{
            title: 'Logout'
        }
    ];
    const AdminTabs:Tab[] = [
        {
            title:"Dashboard",
            icon:BsGraphUp,
        
        },
        {
            title:"Courses",
            icon:IoAddCircleOutline
        },
        {
            title:'Results',
            icon:IoAddCircleOutline
        },

    ]
    const {data,isLoading} = useCurrentUser();
    const [selectedTab, setSelectedTab] =useState<string>(studentTabs[0].title)
    const router = useRouter()
 




    return (
        <>
        <section className='hidden md:flex flex-col items-center justify-center '>
    <div className='bg-blue-100 h-96 w-screen relative mt-10 border-2 border-gray-400 rounded p-5'>
     
      <Image src='/newground20.png' fill alt='hero' style={{ objectFit: 'cover' }} className='rounded-md bg-cover'/>
    {
    <h1 className=" text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold w-screen p-5">
    
Daffodil International University:  <span className='text-white text-4xl'> Empowering Minds, Shaping Futures</span> 

</h1>
    } 
   
 
    </div>
  </section>
  <div className='flex justify-center mt-32 items-center gap-36'>
    <div className='border-2 border-gray-300 p-10 cursor-pointer'>
        <p className='break-words w-72 font-bold'>Daffodil International University is a private research university located in Daffodil Smart City, Birulia - 1216, Dhaka, Bangladesh. It was established on 24 January 2002 under the Private University Act of 1992 which was replaced by Private University Act 2010.</p>
    </div>
    <div className='border-2 border-gray-300'>
        <Link
        href="'https://www.google.com/maps/place/Daffodil+International+University/@23.8768956,90.3201592,15z/data=!4m6!3m5!1s0x3755b8ada2664e21:0x3c872fd17bc11ddb!8m2!3d23.8768956!4d90.3201592!16s%2Fm%2F027pprm?hl=en&entry=ttu"
        >
        <Image src="/image.png"
        width={400}
        height={400}
        alt=''
        />
        </Link>

    </div>
  </div>
        </>
    )
}
export default page;