import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { truncateText } from '../../utils/textUtils'

const UserSubDetails = () => {

    const { user } = useAuth()

    return (
        <div
            className='flex flex-row gap-0 w-full h-fit px-3 p-2 rounded-md hover:bg-gray-300 relative dark:hover:bg-gray-800 cursor-pointer duration-200'
        >
            {/* user image container */}
            <div
                className='w-1/5 flex items-start justify-start'
            >
                {/* user image */}
                <div
                    className='p-1 border-2 border-pri rounded-full flex items-center justify-center'
                >
                    {
                        user?.avatar_url === null
                        ?   <svg  
                                className='text-accent dark:text-Daccent'
                                xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">
                                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                            </svg>
                        :   <img 
                                src={user?.avatar_url} 
                                alt=""
                                className='h-6 w-6 rounded-full' 
                            />
                    }
                </div>
            </div>        

            {/* user details */}
            <div
                className='w-4/5 h-fit flex flex-col gap-0'
            >
                <h1
                    className='font-semibold text-sm/tight text-text dark:text-Dtext'
                >
                    {user.name}
                </h1>
                <p
                    className='text-xs/tight dark:text-Daccent text-accent'
                >
                    {truncateText(user.email, 20)}
                </p>
            </div>
        </div>
    )
}

export default UserSubDetails