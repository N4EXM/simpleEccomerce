import React, { useState } from 'react'

const ChecboxkBtn = ({ ftn, value, option }) => {
    
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {

        ftn(value, option)
        setIsChecked(!isChecked)

    }

    return (
        <label
            className='flex flex-row items-center gap-3'
        >
            <div
                className='flex w-fit h-fit relative'
            >
                <input
                    type='checkbox'
                    value={value}
                    checked={isChecked}
                    onChange={() => handleChange()}
                    className={`rounded-sm appearance-none border-2 size-5  ${isChecked ? 'bg-pri border-pri dark:bg-Dpri dark:border-Dpri' : 'bg-BG dark:bg-DBG border-Daccent dark:border-accent/60'}`}
                />  
                <svg className={`absolute top-[1.5px] transform left-0.5 text-Dtext ${isChecked ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path></svg>
            </div>
            <span
                className='text-accent text-sm dark:text-Daccent/80'
            >
                {value}
            </span>
        </label>
    )
}

export default ChecboxkBtn