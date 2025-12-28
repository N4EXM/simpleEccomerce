import React, { useState } from 'react'

const FilterSubMenu = ({ children, name }) => {

  const [hiddenActive, setHiddenActive] = useState(false)

  return (
    <div
      className={`h-fit w-full flex flex-col gap-4 `}
    >
      {/* name */}
      <div
        className='flex flex-col gap-1.5 w-full h-fit'
      >
        <div
          className='flex flex-row items-center justify-between w-full h-fit'
        >
          <h1
            className='font-semibold'
          >
            {name}
          </h1>
          <button
            className={`p-1 rounded-full hover:bg-BG dark:hover:bg-DBG duration-200 text-text/70 dark:text-Dtext/70 ${hiddenActive ? 'rotate-180' : 'rotate-0'}`}
            onClick={() => setHiddenActive(!hiddenActive)}
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M17.35 8H6.65c-.64 0-.99.76-.56 1.24l5.35 6.11c.3.34.83.34 1.13 0l5.35-6.11C18.34 8.76 18 8 17.36 8Z"></path></svg>
          </button>
        </div>
        <span className='w-full h-0.5 rounded-md bg-pri dark:bg-Dpri'></span>
      </div>
      
      <div
        className={`${hiddenActive ? 'hidden' : 'flex'} transition-all ease-in-out duration-200 flex flex-col gap-2 w-full h-fit`}
      >
        {children}
      </div>
    </div>
  )
}

export default FilterSubMenu