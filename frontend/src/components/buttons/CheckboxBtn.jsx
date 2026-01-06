import React, { useState } from 'react'

const CheckboxBtn = ({ purpose, value, ftn }) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        ftn()
        setIsChecked(!isChecked)
    }

    return (
        <label
            className='flex flex-row gap-2 w-fit h-fit text-accent dark:text-Daccent text-sm relative'
        >
            <input 
                type='checkbox'
                value={value}
                checked={isChecked}
                onChange={() => handleChange()}
                className={`rounded-sm appearance-none border-2 size-5 ${isChecked ? 'bg-pri border-pri dark:bg-Dpri dark:border-Dpri' : 'bg-BG dark:bg-DBG border-accent/30 dark:border-accent/60'}`}
            />
            <svg className={`absolute top-0.5 transform left-0.5 text-Dtext ${isChecked ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path></svg>   
            <span
                className=''
            >
                {purpose}
            </span>
        </label>
    )
}

export default CheckboxBtn