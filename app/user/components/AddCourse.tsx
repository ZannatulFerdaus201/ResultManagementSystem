
import React, { useCallback, useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import axios from 'axios';
import toast from 'react-hot-toast';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { useRouter } from 'next/navigation';

const AddCourse:React.FC= () => {
    const [ name , setCourseName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [credit, setCourseCredit] = useState('');
    const router=useRouter()
    const {data:user,}=useCurrentUser()
  
    useEffect(()=>{
        if(!user){
            router.push('/login')
        }
        else if(user?.role==="STUDENT"){
            router.push('/user/dashboard')
        }
    },[user])
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
        <div className='sm:w-full lg:w-1/2  p-5'>
            <div className='flex flex-col p-5 mb-5'>
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
export default AddCourse;