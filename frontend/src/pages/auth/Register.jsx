import React, { useState } from 'react'
import CheckboxBtn from '../../components/buttons/CheckboxBtn'
import { Link } from 'react-router-dom'

const Register = () => {

    // toggles
    const [showPassword, setShowPassword] = useState(false)

    // state
    const [formDetails, setFormDetails] = useState({
        name: '',
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
                className='col-span-3 bg-linear-to-br from-pri to-sec dark:from-Dpri dark:to-pri rounded-md flex flex-col items-start justify-between px-10 py-8 shadow shadow-Daccent dark:shadow-slate-950 relative'
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
                            <svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M13 13h2v5h-2zm-4 0h2v5H9z"></path></svg>
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
                        <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m6 12 6 5v-4h6v-2h-6V7z"></path></svg>
                        Go back to shopping
                    </Link>

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

                {/* <svg className='absolute right-0 bottom-0 z-0 text-Dpri' xmlns="http://www.w3.org/2000/svg" width={512} height={512} fill={"currentColor"} viewBox="0 0 24 24"><path d="m21.38,2.08c-.37-.16-.8-.07-1.09.22L2.29,20.29c-.29.29-.37.72-.22,1.09.15.37.52.62.92.62h18c.55,0,1-.45,1-1V3c0-.4-.24-.77-.62-.92Z"></path></svg> */}
                

            </div>

            {/* form */}
            <div
                className='shadow shadow-Daccent dark:shadow-slate-950 col-start-4 w-full h-full col-span-2 bg-SBG dark:bg-DSBG rounded-md p-16 py-18 flex flex-col gap-10'
            >

                {/* title */}
                <div
                    className='flex flex-col gap-4 w-full h-fit'
                >
                    <h1
                        className='text-5xl font-bold text-text dark:text-Dtext'
                    >
                        Sign Up
                    </h1>
                    <p
                        className='font-medium text-accent dark:text-Daccent'
                    >
                        Welcome! Enter your details to start shopping and save.
                    </p>
                </div>

                {/* fields */}
                <div
                    className='flex flex-col gap-3 w-full h-fit'
                >

                    {/* name */}
                    <div
                        className='flex flex-col gap-1 w-full h-fit'
                    >
                        <h6
                            className='font-medium text-text dark:text-Dtext'
                        >
                            Name: 
                        </h6>
                        <input 
                            type="text" 
                            className='w-full border-2  border-pri dark:border-Dpri p-2 pl-3 rounded-md outline-none text-text dark:text-Dtext shadow shadow-Daccent dark:shadow-slate-950 '
                            value={formDetails.name}
                            onChange={(e) => setFormDetails({...formDetails, name: e.target.value})}
                            placeholder='Enter a name...'
                        />
                    </div>

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
                            className='w-full border-2  border-pri dark:border-Dpri p-2 pl-3 rounded-md outline-none text-text dark:text-Dtext shadow shadow-Daccent dark:shadow-slate-950 '
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
                            className='w-full border-2  border-pri dark:border-Dpri p-2 pl-3 rounded-md outline-none text-text dark:text-Dtext shadow shadow-Daccent dark:shadow-slate-950'
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
                                        xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
                                    </svg>
                                :   <svg  
                                        xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                                    </svg>
                            }
                        </button>
                        <h6
                          className='text-sm text-accent dark:text-Daccent'
                        >
                          Enter at least 8 characters
                        </h6>
                    </div>

                </div>

                {/* error */}
                <p
                    className='text-center text-rose-500 px-8 h-10'
                >
                    {error}
                </p>

                {/* register and Register button */}
                <div
                    className='flex flex-col gap-2 w-full h-fit'
                >
                    {/* Register button */}
                    <button
                      className='w-full h-fit p-2 bg-pri hover:bg-sec dark:bg-Dpri dark:hover:bg-Dsec rounded-md text-Dtext font-semibold duration-200 shadow shadow-Daccent dark:shadow-slate-950 '
                    >
                      Register
                    </button>
                    <Link
                      className='text-sm dark:text-Daccent text-accent w-full text-center hover:text-pri dark:hover:text-Dpri duration-200'
                        to={'/Login'}
                    >
                      Already have an account? Sign In
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Register