import React from 'react'

const NavSearchBar = () => {
    return (
        <div
            className='relative w-fit h-fit'
        >
            <input 
                type="text" 
                className='w-56 h-fit p-1.5 pl-8.5 rounded-md border-2 border-Daccent/50   dark:border-accent/50 dark:bg-DBG text-xs outline-none'
                placeholder='Search an item...'  
            />
            <span
                className='top-px left-0.5 p-2 w-fit h-fit absolute text-pri dark:text-Dpri'
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24"><path d="m17.06,14.94l-2.8-1.34c1.08-1.23,1.74-2.84,1.74-4.6,0-3.86-3.14-7-7-7s-7,3.14-7,7,3.14,7,7,7c1.76,0,3.37-.66,4.6-1.74l1.34,2.8h0s5,5,5,5l2.12-2.12-5-5h0Zm-8.06-.94c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z"></path></svg>
            </span>
        </div>
    )
}

export default NavSearchBar