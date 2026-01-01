import React from 'react'
import { Link } from 'react-router-dom'

const NavBtn = ({ path, name, icon, notifActive, notifVal }) => {
    return (
    
        <Link
            className='flex flex-row w-full justify-between items-center p-2 px-3 hover:bg-gray-300 dark:hover:bg-gray-800  rounded-sm duration-200 text-accent dark:text-slate-300 text-sm'
            to={path}
        >
            <span
                className='flex flex-row items-center gap-2 font-medium'
            >
                {icon}
                {name}
            </span>
            {   
                notifActive
                &&  <span
                        className='p-1 px-2 text-xs rounded-full font-medium bg-pri text-text'
                    >
                        {notifVal}
                    </span>
            }
        </Link>

    )
}

export default NavBtn