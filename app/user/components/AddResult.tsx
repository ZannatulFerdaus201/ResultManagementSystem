import fetcher from '@/app/libs/fetcher';
import { Course, User } from '@prisma/client';
import React, { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import Button from './Button';
import axios from 'axios';
import toast from 'react-hot-toast';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { useRouter } from 'next/navigation';


const AddResult:React.FC = () => {
    const { data, error } = useSWR<Course[]>('/api/course', fetcher)
    const {data:student,error:studentError}=useSWR<User[]>('/api/users',fetcher)
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
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [selectedStudent, setSelectedStudent] = useState<string>('')
    const [courseCode, setCourseCode] = useState<string>('')
    const [selectedGpa, setScore] = useState<string>('')
    const GPA = [4.0,3.75,3.5,3.25,3.00,2.75,2.50,2.25,2.00,0.00]
    const credit =["3","1","7"]
    const Semester =['Fall-2023','Spring-2023','Summer-2023']
    const [selectedCredit,setSelectedCredit]=useState<string>('')
    const [selectedSemester, setSemester] = useState<string>('')

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
     
       
      setSelectedOption(event.target.value);
    };
    const handleStudentChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
      
        setSelectedStudent(event.target.value);

    }
    const handleCourseCodeChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setCourseCode(event.target.value);
    }
    const handleScoreChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setScore(event.target.value);
    }
    const handleSemesterChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSemester(event.target.value);
    }
    const handleCreditChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(event.target.value)
        setSelectedCredit(event.target.value)
    }
    const handleSubmit=useCallback(async()=>{
        await axios.post('/api/result',{
            courseName:selectedOption,
            courseCode:courseCode,
            StudentId:selectedStudent,
            gpa:selectedGpa,
            semester:selectedSemester,
            credit:selectedCredit
        }).then(()=>{
         
            toast.success('Result Added Successfully')
        }).catch((err)=>{
            console.log(err)
            toast.error('Something went wrong')
        })
    },[selectedGpa,selectedOption,selectedSemester,selectedStudent,courseCode])
    return (
        <div className='w-full '>
        
            <div className='flex flex-col p-2  '>
            <label htmlFor="mySelect" className='text-lg font-semibold'>Select Course</label>
            <select id="mySelect" className=' border-2 border-gray-400 h-10 sm:w-full   lg:w-1/2   focus:border-sky-500focus:border-2' value={selectedOption} onChange={handleSelectChange}>
        <option>Select...</option>
        {data?.map((course:Course)=>(
            <option key={course.id} value={course.name}>{course.name}</option>
        ))}
      </select>
            </div>
            <div className='flex flex-col p-2 '>
            <label htmlFor="mySelect" className='text-lg font-semibold'>Select Course Code</label>
            <select id="mySelect" className=' border-2 border-gray-400 h-10  sm:w-full lg:w-1/2  focus:border-sky-500
            focus:border-2' value={courseCode} onChange={handleCourseCodeChange}>
        <option>Select...</option>
        {data?.map((course:Course)=>(
            <option key={course.id} value={course.courseCode}>{course.courseCode}</option>
        ))}
      </select>
            </div>
            <div className='flex flex-col p-2'>
            <label htmlFor="mySelect" className='text-lg font-semibold'>Select Credit</label>
            <select id="mySelect" className=' sm:w-full lg:w-1/2 border-2 border-gray-400 h-10  focus:border-sky-500
            focus:border-2' value={selectedCredit} onChange={handleCreditChange}>
        <option>Select...</option>
        {credit.map((credit,index)=>(
            <option key={index} value={credit}>{credit}</option>
        ))}
      </select>
      
            </div>

         
            <div className='flex flex-col p-2'>
            <label htmlFor="mySelect" className='text-lg font-semibold'>Select Student ID</label>
            <select id="mySelect" className=' sm:w-full lg:w-1/2 border-2 border-gray-400 h-10  focus:border-sky-500
            focus:border-2' value={selectedStudent} onChange={handleStudentChange}>
        <option>Select...</option>
        {student?.map((student:User)=>(
            <option key={student.id} value={student.studentId}>{student.studentId}</option>
        ))}
      </select>
            </div>
            <div className='flex flex-col p-2'>
            <label htmlFor="mySelect" className='text-lg font-semibold'>Select Gpa</label>
            <select id="mySelect" className=' sm:w-full lg:w-1/2 border-2 border-gray-400 h-10  focus:border-sky-500
            focus:border-2' value={selectedGpa} onChange={handleScoreChange}>
        <option>Select...</option>
        {GPA.map((gpa,index)=>(
            <option key={index} value={gpa}>{gpa}</option>
        ))}
      </select>
            </div>
            <div className='flex flex-col p-2'>
            <label htmlFor="mySelect" className='text-lg font-semibold'>Select Semester</label>
            <select id="mySelect" className=' sm:w-full lg:w-1/2 border-2 border-gray-400 h-10  focus:border-sky-500
            focus:border-2' value={selectedSemester} onChange={handleSemesterChange}>
        <option>Select...</option>
        {Semester.map((semester,index)=>(
            <option key={index} value={semester}>{semester}</option>
        ))}
      </select>
      
            </div>
         
            <Button
            label='Add Result'
            onClick={handleSubmit}
            />

        
     
        </div>
    )
}
export default AddResult;