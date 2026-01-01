import React from 'react'

const LogoutBtn = () => {
    return (
        <button
            className='w-full h-fit px-3 p-2 hover:bg text-rose-600 dark:text-rose-400 dark:hover:bg-rose-500 dark:hover:text-Dtext  hover:bg-rose-100 rounded-sm duration-200 flex flex-row gap- items-center text-sm gap-2'
        >
            <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M15 11H8v2h7v4l6-5-6-5z"></path><path d="M5 21h7v-2H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path></svg>
            Logout
        </button>
    )
}

export default LogoutBtn