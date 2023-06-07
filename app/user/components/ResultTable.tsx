import { Result } from '@prisma/client';
import React, { useMemo } from 'react';

type ResultTableProps = {
    result:Result
    
};

const ResultTable:React.FC<ResultTableProps> = ({result}) => {
    
    return(
        <div className="flex flex-col items-center w-1/2  border-2 border-solid border-gray-300 p-5 cursor-pointer rounded-lg   my-5  hover:border-gray-200 mx-52">
           
                <div className='w-full s'>
                    <p className='text-lg font-bold p-2 '>{result.courseName}</p>
                    <p>{result.courseCode}</p>
                    <p>{result.gpa}</p>
              
            </div>
            

   </div>
    )
}
export default ResultTable;