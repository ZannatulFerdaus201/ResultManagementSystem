"use client"
import React from 'react';
import clsx from "clsx"
import {
    FieldValues,
    FieldErrors,
  UseFormRegister
} from 'react-hook-form'

type InputProps = {
    id:string;
    label?:string;
    placeholder?:string;
    type:string
    required?:boolean;
    disabled?:boolean;
    register:UseFormRegister<FieldValues>
    errors:FieldErrors
    
};

const Input:React.FC<InputProps> = ({label,id,type,required,register,errors,disabled}) => {
    
    return(
        <div>
            <label htmlFor={id} className='block text-sm font-medium text-gray-700 leading-6'>
                {label}
            </label>
            <div className='mt-2'>
                <input id={id} type={type} autoComplete={id} {...register(id,{required})} disabled={disabled}
                className={clsx(`
                form-input
                block 
                w-full 
                rounded-md 
                border-0 
                py-1.5 
                p-2
              
                shadow-sm 
                ring-1 
                ring-inset 
             
                focus:ring-2 
                focus:ring-inset 
              
                sm:text-sm 
                sm:leading-6`,
                errors[id] && 'focus:ring-rose-500',
                disabled && 'opacity-50 cursor-default'
              )}
                 />
            </div>
        </div>
    )
}
export default Input;