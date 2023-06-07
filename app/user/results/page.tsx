"use client"
import fetcher from '@/app/libs/fetcher';
import { Result } from '@prisma/client';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import ResultTable from '../components/ResultTable';
import router, { useRouter } from 'next/navigation';
import useCurrentUser from '@/app/hooks/useCurrentUser';


const page:React.FC = () => {

    const router=useRouter()
    const {data:user,}=useCurrentUser()
  
    useEffect(()=>{
        if(!user){
            router.push('/')
        }
        else if(user?.role==="ADMIN"){
            router.push('/user/dashboard')
        }
    },[user])

    
    
    const { data, error,isLoading } = useSWR<Result[]>('/api/result', fetcher);
    return (
        <div className='hidden md:block'>
            {
              
                data?.map((result,index)=>(
                  
                    <ResultTable
                    result={result}
                    key={index}
                    />
                 
                ))
               
            }
          
          
           
          
         
        </div>
    )
}
export default page;