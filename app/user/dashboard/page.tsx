"use client"
import fetcher from '@/app/libs/fetcher';
import { Result, User } from '@prisma/client';
import React, { useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {FaGraduationCap, FaUserGraduate} from "react-icons/fa"
import { BsBookFill } from 'react-icons/bs';
import {FcDepartment} from "react-icons/fc"
import {GrScorecard} from 'react-icons/gr'
import {TbCurrencyTaka} from "react-icons/tb"


const page:React.FC= () => {
   
    const router=useRouter()
    const {data:user,isLoading:isUserLoading}=useSWR<User>('/api/currentuser',fetcher)
    const { data, error,isLoading } = useSWR<Result[]>('/api/result', fetcher);
  
  
  
  
 

    const sgpaCalculation=useMemo(()=>{
    let totalGpaCredits = 0;
  let totalCredits = 0;
  if(!data) return null
  data.forEach((course) => {
    const gpa = parseFloat(course.gpa);
    const credits = parseInt(course.credit);
   

    totalGpaCredits += gpa * credits;
    totalCredits += credits;
  });

  const spga = totalGpaCredits / totalCredits;
  const roundedSpga = spga.toFixed(2);
  
  return roundedSpga;
    },[data])
    
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
  <div className=' w-full  p-5  hidden md:block '>
         
            {user?.role==="STUDENT"  && 
            <div className=' flex justify-center gap-10 items-center '>

               <div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5'>
               
             
               <div className='flex gap-5 justify-center'>

                 
               <TbCurrencyTaka size={50} />
                         <p className=' mt-2 text-xl font-bold text-center'>Total Paid </p>
               </div>
               <p className='mt-2 text-xl font-bold text-center ml-5' >83,050.00</p>
          
             </div>
             <div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5'>
               
             
               <div className='flex gap-5 justify-center'>

                 <TbCurrencyTaka size={50} />
                      
                         <p className=' mt-2 text-xl font-bold text-center'>Total Due </p>
               </div>
               <p className='mt-2 text-xl font-bold text-center ml-5' >0.00</p>
          
             </div>
             
             <div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5'>
               
             
               <div className='flex gap-5 justify-center'>

               <TbCurrencyTaka size={50} />
                      
                         <p className=' mt-2 text-xl font-bold text-center'>Others </p>
               </div>
               <p className='mt-2 text-xl font-bold text-center ml-5' >200.00</p>
          
             </div>
             <div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5 mr-36'>
               
             
    <div className='flex gap-5 justify-center p-5'>

      <GrScorecard size={50}/>
           
              <p className=' mt-2 text-xl font-bold text-center'>SGPA: {sgpaCalculation}</p>
    </div>

  </div>
           
            </div>
}


{user?.role==="ADMIN"  &&  
<div className=' flex justify-center gap-10 items-center'>
<div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5'>
    <div className='flex gap-5 justify-center'>
        <FaUserGraduate size={50}/>
                <p className='text-2xl font-semibold text-center'>Students</p>
    </div>
                <p className='text-xl font-bold text-center'>15k+</p>
            

             
            </div>
            <div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5'>
    <div className='flex gap-5 justify-center'>
        <BsBookFill size={50}/>
                <p className='text-2xl font-semibold text-center'>courses</p>
    </div>
                <p className='text-xl font-bold text-center'>5k+</p>
            

             
            </div>
            <div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5'>
    <div className='flex gap-5 justify-center'>
        <FcDepartment className='text-black' size={50}/>
                <p className='text-2xl font-semibold text-center'>Departements</p>
    </div>
                <p className='text-xl font-bold text-center'>20+</p>
            

             
            </div>
            <div className='flex w-1/6 cursor-pointer flex-col border-2 border-gray-300 p-5 mt-5'>
    <div className='flex gap-5 justify-center'>
        <FaGraduationCap className='text-black' size={50}/>
                <p className='text-2xl font-semibold text-center'>Alumni</p>
    </div>
                <p className='text-xl font-bold text-center'>20k</p>
            

             
            </div>
</div> 

}

        </div>
      
            <div className='flex flex-col items-center  p-5'>
              {user?.role==="STUDENT" &&  <p className='text-2xl font-bold border-b-4 border-black text-gray-400'>Student Basic Info</p> } 
              {user?.role==="ADMIN" && <p className='text-2xl font-bold border-b-4 border-black text-gray-400'>Admin Basic Info</p> }
                <p className='text-lg  font-bold text-black'>{user?.name}</p>
                <p className='text-lg  font-bold text-black'>{user?.email}</p>
                <p className='text-lg font-bold text-black'>{user?.studentId}</p>
            </div>
        
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