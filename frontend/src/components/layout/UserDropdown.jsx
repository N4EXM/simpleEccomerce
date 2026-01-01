import React from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import { truncateText } from '../../utils/textUtils'
import { useAuth } from '../../context/AuthContext'
import NavBtn from '../buttons/NavBtn'
import { useTheme } from '../../context/ThemeContext'
import Separator from './Separator'
import LogoutBtn from '../buttons/LogoutBtn'
import UserSubDetails from './UserSubDetails'
import DarkModeToggle from '../buttons/DarkModeToggle'

const UserDropdown = () => {

    // context
    const { user } = useAuth()
    const { theme } = useTheme()

    // ref
    const ckeckClickRef = useClickOutside(() => setIsUserDropActive(false))


    const userPaths = [
        {
            name: 'Dashboard',
            path: '/Dashboard',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="m20,11h-6c-.55,0-1,.45-1,1v8c0,.55.45,1,1,1h6c.55,0,1-.45,1-1v-8c0-.55-.45-1-1-1Zm-1,8h-4v-6h4v6Z"></path><path d="m10,15h-6c-.55,0-1,.45-1,1v4c0,.55.45,1,1,1h6c.55,0,1-.45,1-1v-4c0-.55-.45-1-1-1Zm-1,4h-4v-2h4v2Z"></path><path d="m20,3h-6c-.55,0-1,.45-1,1v4c0,.55.45,1,1,1h6c.55,0,1-.45,1-1v-4c0-.55-.45-1-1-1Zm-1,4h-4v-2h4v2Z"></path><path d="m10,3h-6c-.55,0-1,.45-1,1v8c0,.55.45,1,1,1h6c.55,0,1-.45,1-1V4c0-.55-.45-1-1-1Zm-1,8h-4v-6h4v6Z"></path></svg>,
            notifActive: false
        },
        {
            name: 'Cart',
            path: '/Cart',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2l3.24-7.4c.14-.31.11-.67-.08-.95S21.34 7 21 7H7.33L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33zM19.47 9l-2.62 6h-6.18l-2.5-6z"></path></svg>,
            notifActive: true,
            notifVal: user?.cartItems
        },
        {
            name: 'Wishlist',
            path: '/Wishlist',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path></svg>,
            notifActive: true,
            notifVal: user?.wishItems            
        },

    ]

    const paths = [
        {
            name: 'Login',
            path: '/Login',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="M18 4H20V20H18z"></path><path d="M10 17 16 12 10 7 10 11 3 11 3 13 10 13 10 17z"></path></svg>,
            notifActive: false
        },
        {
            name: 'Register',
            path: '/Register',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24"><path d="m19,3H5c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM5,19V5h14v14s-14,0-14,0Z"></path><path d="M8.5 10.5A1.5 1.5 0 1 0 8.5 13.5 1.5 1.5 0 1 0 8.5 10.5z"></path><path d="M11 11H17V13H11z"></path><path d="M7 7H17V9H7z"></path><path d="M7 15H17V17H7z"></path></svg>,
            notifActive: false
        },
    ]

    return (

        <div
            className={`absolute top-26 z-10 right-20 min-h-32 h-fit bg-SBG dark:bg-DSBG rounded-md shadow shadow-Daccent dark:shadow-slate-950 ${user == null ? 'min-w-56 w-fit' : 'min-w-64 w-fit'}`}
            ref={ckeckClickRef}
        >
            {
                user === null
                ?   <div
                        className='flex flex-col w-full h-full p-1 gap-2'
                    >
                        
                        {
                            paths.map((path) => (
                                <NavBtn
                                    path={path.path}
                                    name={path.name}
                                    icon={path.icon}
                                    notifActive={path.notifActive}
                                />
                            ))
                        }

                        <Separator/>

                        <DarkModeToggle/>
                        
                    </div>
                :   <div
                        className='flex flex-col w-full h-full p-1 gap-2'
                    >

                        <UserSubDetails/>

                        <Separator/>

                        {/* user navs */}
                        <div
                            className='flex flex-col gap-2 w-full h-fit'
                        >
                            {
                                userPaths.map((path) => (
                                    <NavBtn
                                        path={path.path}
                                        name={path.name}
                                        icon={path.icon}
                                        notifActive={path.notifActive}
                                        notifVal={path.notifVal}
                                    />
                                ))
                            }
                        </div>
    
                        <Separator/>
    
                        <DarkModeToggle/>

                        <Separator/>
    
                        <LogoutBtn/>
    
                    </div>
            }
        </div>

    )
}

export default UserDropdown