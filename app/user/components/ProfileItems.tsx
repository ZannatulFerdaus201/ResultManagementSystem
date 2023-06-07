import React from 'react';
import { Tab } from './Navbar/RightPart/RightPart';
import {useRouter} from 'next/navigation';

type ProfileItemsProps = {
    tab:Tab,
    selectedTab:boolean,
    setSelectedTab:(title:string)=>void
};

const ProfileItems:React.FC<ProfileItemsProps> = ({tab,selectedTab,setSelectedTab}) => {
    const router = useRouter()
    
    return (
        <div className={`flex w-full p-2   cursor-pointer ${selectedTab ? 'text-blue-500' : 'gray-500'} ${selectedTab? 'border-b-2 border-blue-500':'gray-500'}`} onClick={()=>setSelectedTab(tab.title)}>
        
       {tab.href &&
        <div onClick={()=>router.push(tab.href as string)}>
         
           
        <p className={`${selectedTab&&'font-bold'}`}>{tab.title}</p>
       
    </div>
       }
       {!tab.href &&
        <div className=''>
         
           
        <p className={`${selectedTab&&'font-bold'} border-2 border-red-500  p-5`}>{tab.title}</p>
       
    </div>
       }

    </div>
    )
}
export default ProfileItems;