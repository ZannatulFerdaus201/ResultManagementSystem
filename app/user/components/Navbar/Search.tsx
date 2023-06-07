"use client"
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';


const Search:React.FC = () => {
    const [search,setSearch]=useState<string>("")
    
    return (
        <div className='w-1/2 mt-1 p-2 mr-5' >
        <BsSearch className='w-5 h-5 absolute mt-1 ml-1  text-gray-500'/>
        <form >

         <input   type="text"
         placeholder="Search"
         className="border-2 border-none  h-8 pr-3 pl-10 py-2 font-semibold place-holder-gray-500 text-black rounded-lg ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent w-full" 
         onChange={(e)=>setSearch(e.target.value)}
         value={search}
     
         />
        </form>
      

        </div>
    )
}
export default Search;