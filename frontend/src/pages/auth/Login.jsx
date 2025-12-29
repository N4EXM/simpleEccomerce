import React, { useState } from 'react'

const Login = () => {

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
        className='grid grid-cols-5 w-full h-screen font-poppins bg-BG dark:bg-DBG p-5'
    >

        {/* form */}
        <div
            className='shadow shadow-Daccent dark:shadow-slate-950 col-start-4 w-full h-full col-span-2 bg-SBG dark:bg-DSBG rounded-md p-20 flex flex-col gap-10'
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
                        className='w-full border-2  border-pri dark:border-Dpri p-2 pl-3 rounded-md outline-none text-text dark:text-Dtext'
                        value={formDetails.email}
                        onChange={(e) => setFormDetails({...formDetails, email: e.target.value})}
                        placeholder='Enter a email...'
                    />
                </div>

                {/* password*/}
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
                        className='w-full border-2  border-pri dark:border-Dpri p-2 pl-3 rounded-md outline-none text-text dark:text-Dtext'
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
                </div>

            </div>

        </div>


    </div>
  )
}

export default Login