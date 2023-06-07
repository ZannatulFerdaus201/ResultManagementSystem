
import fetcher from '@/app/libs/fetcher';
import React, { useState } from 'react';
import useSWR from 'swr';
import Button from './Button';
import axios from 'axios';
import getResult from '@/app/actions/getResult';
import ResultTable from './ResultTable';
import { Result } from '@prisma/client';


const ViewResult:React.FC= () => {
    const { data, error,isLoading } = useSWR<Result[]>('/api/result', fetcher);
    return (
        <>
            {
              
                data?.map((result,index)=>(
                  
                    <ResultTable
                    result={result}
                    key={index}
                    />
                 
                ))
               
            }
          
          
           
          
         
        </>
    )
}
export default ViewResult;