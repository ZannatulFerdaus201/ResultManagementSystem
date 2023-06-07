import fetcher from '@/app/libs/fetcher';
import { Result, User } from '@prisma/client';
import React, { useMemo } from 'react';
import useSWR from 'swr';

type DashBoardProps = {
    user:User
    
};
const DashBoard:React.FC<DashBoardProps> = ({user}) => {
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
        <div className='sm:w-full lg:w-1/2  p-5 i'>
            <div className='flex flex-col  border-2 border-gray-300 bg-blue-400 p-5'>
                <p className='text-2xl font-semibold text-white'>Profile</p>
                <p className='text-lg font-medium text-white'>{user.name}</p>
                <p className='text-lg font-medium text-white'>{user.email}</p>
                <p className='text-lg font-medium text-white'>{user.studentId}</p>
            </div>
            {user.role==="STUDENT"  &&    <div className='flex flex-col border-2 border-gray-300 p-5 mt-5'>
                <p className='text-2xl font-semibold'>Result</p>
                {sgpaCalculation && <p className='text-lg font-medium'>SGPA: {sgpaCalculation}</p>}
            

             
            </div>
}
        
        </div>
    )
}
export default DashBoard;