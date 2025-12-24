import React from 'react'

const Navbar = () => {
  return (
    <div
      className='w-full col-span-12 p-4 px-44 h-full'
    >
      <div
        className='flex flex-row items-center justify-between dark:bg-DSBG bg-SBG px-10 p-3 shadow shadow-Daccent dark:shadow-slate-950 border-2 border-accent/10 rounded-md'
      >

        {/* logo/home button */}
        <button
          className='dark:text-Dpri text-pri flex flex-row items-center gap-2'
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M17.24 20H6.76l-2.45-9h15.38z"></path><path d="M9 13h2v5H9zM13 13h2v5h-2z"></path></svg>
          <span
            className='text-2xl font-bold'
          >
            Shopi
          </span>
        </button>

      </div>

    </div>
  )
}

export default Navbar