import React, { useState } from 'react'
import CheckboxBtn from '../../components/buttons/CheckboxBtn'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const Login = () => {

    // context
    const { theme,toggleDarkMode } = useTheme()

    // toggles
    const [showPassword, setShowPassword] = useState(false)

    // state
    const [formDetails, setFormDetails] = useState({
        email: '',
        password: '',
        rememberMe: false
    })

    const [error, setError] = useState('')
    
    return (
        <div
            className='grid grid-cols-5 w-full h-screen font-poppins bg-BG dark:bg-DBG p-5 gap-5'
        >

            {/* big picture thing */}
            <div
                className='col-span-3 dark:bg-emerald-800 bg-emerald-500 rounded-md flex flex-col items-start justify-between px-10 py-8 shadow shadow-Daccent dark:shadow-slate-950 relative'
            >

                {/* top part */}
                <div
                    className='flex flex-row items-center justify-between w-full h-fit z-10'
                >

                    {/* title */}
                    <div
                        className='flex flex-row items-center gap-3 w-fit h-fit'
                    >
                        <i
                            className='p-1.5 rounded-md border-2 border-Dtext text-Dtext'
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24"><path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M13 13h2v5h-2zm-4 0h2v5H9z"></path></svg>
                        </i>
                        <p
                            className='text-2xl font-semibold text-Dtext'
                        >
                            Shopi
                        </p>
                    </div>
                    
                    <Link
                        className='text-Dtext flex flex-row items-center gap-2'
                        to={'/'}
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="m6 12 6 5v-4h6v-2h-6V7z"></path></svg>
                        Go back to shopping
                    </Link>

                    {/* toggle theme btn */}
                    <button
                        className='absolute bottom-5 right-5 dark:bg-DBG bg-BG p-2 rounded-full text-pri dark:text-Dpri'
                        onClick={() => toggleDarkMode()}
                    >
                        {
                            theme === 'light'
                            ? <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9M13 19h-2v3h2v-3M13 2h-2v3h2V2M2 11h3v2H2zM19 11h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zM7.76 6.34 6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zM16.24 17.66l1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path></svg>
                            : <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="m20.71,13.51c-.78.23-1.58.35-2.38.35-4.52,0-8.2-3.68-8.2-8.2,0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1-.26-.26-.64-.36-1-.25C4.91,3.35,2,7.28,2,11.8c0,5.62,4.57,10.2,10.2,10.2,4.53,0,8.45-2.91,9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25Zm-8.51,6.49c-4.52,0-8.2-3.68-8.2-8.2,0-3.03,1.63-5.73,4.18-7.15-.03.34-.05.68-.05,1.02,0,5.62,4.57,10.2,10.2,10.2.34,0,.68-.02,1.02-.05-1.42,2.56-4.12,4.18-7.15,4.18Z"></path><path d="M18 2 16.75 4.75 14 6 16.75 7.25 18 10 19.25 7.25 22 6 19.25 4.75 18 2z"></path></svg>
                        }
                    </button>

                </div>

                {/* bottom part */}
                <div
                    className='flex flex-col gap-3 w-full h-fit z-10'
                >
                    <h1
                        className='text-2xl text-Dtext font-semibold'
                    >
                        Start shopping and save on money
                    </h1>
                    <p
                        className='pr-16 text-Dtext/90'
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dolores cum delectus consectetur? Quas eius voluptate quo!
                    </p>
                </div>
                

            </div>

            {/* form */}
            <div
                className='shadow shadow-Daccent dark:shadow-slate-950 col-start-4 w-full h-full col-span-2 bg-SBG dark:bg-DSBG rounded-md p-16 py-24 flex flex-col gap-10'
            >

                {/* title */}
                <div
                    className='flex flex-col gap-4 w-full h-fit'
                >
                    <h1
                        className='text-5xl font-bold text-text dark:text-Dtext'
                    >
                        Sign In
                    </h1>
                    <p
                        className='font-medium text-accent dark:text-Daccent'
                    >
                        Welcome back! Enter your details to keep shopping.
                    </p>
                </div>

                {/* fields */}
                <div
                    className='flex flex-col gap-3 w-full h-fit'
                >

                    {/* email */}
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h6
                            className='font-medium text-text dark:text-Dtext'
                        >
                            Email: 
                        </h6>
                        <input 
                            type="email" 
                            className='w-full border-2  border-pri dark:border-Dpri p-2 pl-3 rounded-md outline-none text-text dark:text-Dtext '
                            value={formDetails.email}
                            onChange={(e) => setFormDetails({...formDetails, email: e.target.value})}
                            placeholder='Enter a email...'
                        />
                    </div>

                    {/* password */}
                    <div
                        className='flex flex-col gap-1 w-full h-fit relative'
                    >
                        <h6
                            className='font-medium text-text dark:text-Dtext'
                        >
                            Password: 
                        </h6>
                        <input 
                            type={
                                showPassword
                                ? 'text'
                                : 'password'
                            } 
                            className='w-full border-2  border-pri dark:border-Dpri p-2 pl-3 rounded-md outline-none text-text dark:text-Dtext '
                            value={formDetails.password}
                            onChange={(e) => setFormDetails({...formDetails, password: e.target.value})}
                            placeholder='Enter a password...'

                        />
                        <button
                            className='text-accent dark:text-Daccent p-2 absolute top-7.5 right-1'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {
                                showPassword
                                ?   <svg  
                                        xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                                    </svg>
                                :   <svg  
                                        xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                                    </svg>
                            }
                        </button>
                    </div>

                    {/* rememberMe */}
                    <div
                        className='flex items-start justify-start w-full h-fit pt-2'
                    >
                        <CheckboxBtn
                            purpose={'remember me'}
                            ftn={() => setFormDetails({ ...formDetails, rememberMe: !formDetails.rememberMe })}
                            value={formDetails.rememberMe}
                        />
                    </div>


                </div>

                {/* error */}
                <p
                    className='text-center text-rose-500 px-8 h-10'
                >
                    {error}
                </p>

                {/* register and login button */}
                <div
                    className='flex flex-col gap-2 w-full h-fit'
                >
                    {/* login button */}
                    <button
                        className='w-full h-fit p-2 bg-pri hover:bg-sec dark:bg-Dpri dark:hover:bg-Dsec rounded-md text-Dtext font-semibold duration-200 shadow shadow-Daccent dark:shadow-slate-950 '
                    >
                        Log in
                    </button>
                    <Link
                        className='text-sm dark:text-Daccent text-accent w-full text-center hover:text-pri dark:hover:text-Dpri duration-200'
                        to={'/Register'}
                    >
                        Don't have an account? Sign up
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Login