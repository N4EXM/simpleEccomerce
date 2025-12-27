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
            className='p-1 rounded-full hover:bg-BG dark:hover:bg-DBG duration-200 text-text/70 dark:text-Dtext/70'
            onClick={() => setHiddenActive(!hiddenActive)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/></svg>
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