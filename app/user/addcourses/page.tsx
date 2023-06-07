"use client"
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import axios from 'axios';
import toast from 'react-hot-toast';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { useRouter } from 'next/router';

const page:React.FC= () => {

    const {data:user}=useCurrentUser()
  
  
    const [ name , setCourseName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [credit, setCourseCredit] = useState('');
    const handleClick = useCallback(async() => {
        await axios.post('api/course', {
            name,
            courseCode,
            credit
        }).then(()=>{
            setCourseName('');
            setCourseCode('');
            setCourseCredit('');
            toast.success('Course Added Successfully');
        });

    }, [name, courseCode, credit]);
    
    return (
        <div className='w-1/2  p-5 mx-52 hidden md:block'>
            <div className='flex flex-col p-5 mb-5 '>
         <Input
         onChange={(e)=>setCourseName(e.target.value)}
            placeholder='Course Name'
            type='text'
            value={name}
            disabled={false}
         />
            <Input
            onChange={(e)=>setCourseCode(e.target.value)}
            placeholder='Course Code'
            type='text'
            value={courseCode}
            disabled={false}
            />
            <Input
            onChange={(e)=>setCourseCredit(e.target.value)}
            placeholder='Course Credit'
            type='text'
            value={credit}
            disabled={false}
            />

            </div>
            <Button
            label='Add Course'
            fullWidth={true}
            large={true}
            onClick={handleClick}
            />
        </div>
    )
}
export default page;