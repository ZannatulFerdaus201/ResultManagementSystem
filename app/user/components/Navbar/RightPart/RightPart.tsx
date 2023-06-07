"use client"

import useCurrentUser from '@/app/hooks/useCurrentUser';
import React, { useState } from 'react';
import { IconType } from 'react-icons';


import ProfileItems from '../../ProfileItems';

export interface Tab {
    title:string,
    icon?:IconType,
    href?:string,
 
}

const page:React.FC= () => {

    
    const AdminTabs:Tab[] = [
        {
            title:"Dashboard",
            href:"/user/dashboard"
        
        
        },
        {
            title:"Courses",
            href:"/user/addcourses"
           
        },
        {
            title:'Results',
            href:"/user/addresults"
           
        },
        {
            title:'Logout',
            href:'/'
        }
    ]
    const {data,isLoading} = useCurrentUser();
    const [selectedTab, setSelectedTab] =useState<string>('')
   
 
    const studentTabs:Tab[] = [
        {
            title:"Dashboard",
            href:"/user/dashboard"

        
        },
        {
            title:'Results',
            href:"/user/results"
           
        },
        
        {
            title: 'Meeting',
            href:'/'
        },
            {
                title: 'Logout',
                href:'/'
            },

        
    ];


    return (
        <main className='hidden md:block'>
                 {data?.role==="STUDENT"  && 
           <>
           <div className='flex  items-center justify-center'>
           
           
                <>
        
             {
                 studentTabs.map((tab,index)=>(
                    <ProfileItems key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
              
                 ))
             }   
    </>
            </div>
            </>
}

{data?.role==="ADMIN"  && 
           <>
           <div className='w-full flex  items-center justify-center'>
           
           
                <>
        
             {
                 AdminTabs.map((tab,index)=>(
                     <ProfileItems key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
                 ))
             }   
    </>
             
            </div>
            </>
           
}


        </main>
    )
}
export default page;