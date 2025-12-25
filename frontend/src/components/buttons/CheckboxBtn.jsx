import React, { useState } from 'react'

const ChecboxkBtn = ({ ftn, value, name }) => {
    
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {

        

    }

    return (
        <label
            className='flex flex-row items-center gap-2'
        >
            <input
                type='checkbox'
                value={value}
                checked={isChecked}
            />  
            <span
                className='text-accent '
            >
                {name}
            </span>
        </label>
    )
}

export default ChecboxkBtn