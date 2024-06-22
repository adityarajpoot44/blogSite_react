import React, { forwardRef, useId } from 'react'

const Input = forwardRef(function Input({
    label,
    type="text",
    className='',
    ...props
},ref){
    const Id = useId()
    return (
        <div className='w-full'>
            {label && <lable className='inline-block pl-1' 
            htmlFor={Id}>
                {label}
            </lable>
            }
            <input type={type} className={`px-3 py-2 trans rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `} 
            ref={ref}
            {...props}
            id={Id}
            />
        </div>
    )
}) 

export default Input; 