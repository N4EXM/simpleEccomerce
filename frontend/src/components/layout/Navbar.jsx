import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useClickOutside from '../../hooks/useClickOutside'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../hooks/ThemeContext'
import ToggleSwitch from '../buttons/ToggleSwitch'


const Navbar = () => {

  // toggle
  const [isUserDropActive, setIsUserDropActive] = useState(false)
  
  // context
  const { user } = useAuth()
  const { theme, toggleTheme } = useTheme()

  const ckeckClickRef = useClickOutside(() => setIsUserDropActive(false))

  return (
    <div
      className='w-full col-span-12 p-4 px-20 h-full row-span-2 flex items-center justify-center relative'
    >
      <div
        className='flex flex-row items-center justify-between dark:bg-DSBG bg-SBG px-10 p-3 shadow shadow-Daccent dark:shadow-slate-950 rounded-md text-text dark:text-Dtext w-full'
      >

        {/* logo/home button */}
        <Link
          className='bg-linear-to-r from-Dpri to-pri bg-clip-text text-transparent flex flex-row items-center gap-3'
          to={'/'}
        >
          <svg className='text-Dpri' xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M17.24 20H6.76l-2.45-9h15.38z"></path><path d="M9 13h2v5H9zM13 13h2v5h-2z"></path></svg>
          <span
            className='text-2xl font-bold'
          >
            Shopi
          </span>
        </Link>

        {/* search bar and nav buttons */}
        <div
          className='flex flex-row items-center gap-10 w-fit h-fit'
        >

          {/* search bar */}
          <div
            className='relative w-fit h-fit'
          >
            <input 
              type="text" 
              className='w-56 h-fit p-1.5 pl-8.5 rounded-md border-2 border-Daccent/50   dark:border-accent/50 dark:bg-DBG text-xs outline-none'
              placeholder='Search an item...'  
            />
            <span
              className='top-px left-0.5 p-2 w-fit h-fit absolute text-text/70 dark:text-Dtext/70'
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m17.06,14.94l-2.8-1.34c1.08-1.23,1.74-2.84,1.74-4.6,0-3.86-3.14-7-7-7s-7,3.14-7,7,3.14,7,7,7c1.76,0,3.37-.66,4.6-1.74l1.34,2.8h0s5,5,5,5l2.12-2.12-5-5h0Zm-8.06-.94c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z"></path></svg>
            </span>
          </div>

          {/* buttons */}
          <div
            className='flex flex-row items-center gap-3 w-fit h-fit'
          >

            {/* wishlist */}
            <Link
              className='hover:bg-pri dark:hover:bg-Dpri p-1 rounded-full duration-200 hover:text-Dtext'
              to={'/Wishlist'}
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path></svg>
            </Link>

            {/* cart */}
            <Link
              className='hover:bg-pri dark:hover:bg-Dpri p-1 rounded-full duration-200 hover:text-Dtext'
              to={'/Cart'}
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2l3.24-7.4c.14-.31.11-.67-.08-.95S21.34 7 21 7H7.33L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33zM19.47 9l-2.62 6h-6.18l-2.5-6z"></path></svg>
            </Link>

            {/* user dropdown */}
            <button
              className='hover:bg-pri dark:hover:bg-Dpri p-1 rounded-full duration-200 hover:text-Dtext'
              to={'/Dashboard'}
              onClick={() => setIsUserDropActive(true)}
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path></svg>
            </button>

          </div>


        </div>

      </div>

      {
        isUserDropActive
        &&  <div
              className={`absolute top-26 z-10 right-20 w-58 min-h-36 h-fit bg-SBG dark:bg-DSBG rounded-md shadow shadow-Daccent dark:shadow-slate-950 ${isUserDropActive ? 'flex' : 'hidden'}`}
              ref={ckeckClickRef}
            >
              {
                user === null
                ? <div
                    className='flex flex-col w-full h-full p-1 gap-1'
                  >
                    <button
                      className='p-2 flex flex-row items-center gap-2 hover:bg-text/10 dark:hover:bg-Dpri w-full h-fit text-text dark:text-Dtext duration-200 rounded'
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m19,3H5c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM5,19V5h14v14s-14,0-14,0Z"></path><path d="M8.5 10.5A1.5 1.5 0 1 0 8.5 13.5 1.5 1.5 0 1 0 8.5 10.5z"></path><path d="M11 11H17V13H11z"></path><path d="M7 7H17V9H7z"></path><path d="M7 15H17V17H7z"></path></svg>
                      Register
                    </button>
                    <button
                      className='p-2 flex flex-row items-center gap-2 hover:bg-text/10 dark:hover:bg-Dpri w-full h-fit text-text dark:text-Dtext duration-200 rounded'
                    >
                      <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M18 4H20V20H18z"></path><path d="M10 17 16 12 10 7 10 11 3 11 3 13 10 13 10 17z"></path></svg>
                      Log in
                    </button>

                    <span className='w-full h-[1.5px] bg-accent/20'></span>

                    <div
                      className='flex flex-row items-center gap-2 p-2 px-4 w-full h-full text-text dark:text-Dtext'
                    >
                      {
                        theme === 'light'
                        ? <>
                            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9M13 19h-2v3h2v-3M13 2h-2v3h2V2M2 11h3v2H2zM19 11h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zM7.76 6.34 6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zM16.24 17.66l1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path></svg>
                            Light
                          </>
                        : <>
                            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m20.71,13.51c-.78.23-1.58.35-2.38.35-4.52,0-8.2-3.68-8.2-8.2,0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1-.26-.26-.64-.36-1-.25C4.91,3.35,2,7.28,2,11.8c0,5.62,4.57,10.2,10.2,10.2,4.53,0,8.45-2.91,9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25Zm-8.51,6.49c-4.52,0-8.2-3.68-8.2-8.2,0-3.03,1.63-5.73,4.18-7.15-.03.34-.05.68-.05,1.02,0,5.62,4.57,10.2,10.2,10.2.34,0,.68-.02,1.02-.05-1.42,2.56-4.12,4.18-7.15,4.18Z"></path><path d="M18 2 16.75 4.75 14 6 16.75 7.25 18 10 19.25 7.25 22 6 19.25 4.75 18 2z"></path></svg>
                            Dark
                          </>
                      }
                      <ToggleSwitch
                        onChange={() => toggleTheme()}
                        enabledColor={
                          theme === 'light'
                          ? 'bg-emerald-500'
                          : 'bg-emerald-400'
                        }
                        disabledColor={
                          theme === 'light'
                          ? 'bg-slate-500'
                          : 'bg-slate-700'
                        }
                      />
                    </div>

                  </div>
                : <div>

                  </div>
              }
            </div>   
      }

    </div>
  )
}

export default Navbar