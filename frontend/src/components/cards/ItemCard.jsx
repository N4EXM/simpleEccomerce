import React from 'react'

const ItemCard = ({image, name, size, discount, stock, price, brand, rating, category, id}) => {
    return (
        <div
            className='flex flex-col w-full max-h-80 h-96 shadow shadow-Daccent dark:shadow-slate-950 rounded-md bg-slate-100 dark:bg-DSBG'
        >

            {/* images */}
            <div
                className='w-full h-6/9 rounded-t-md overflow-y-hidden bg-white p-4  relative'
            >
                <img 
                    src={image} 
                    alt="productImage" 
                    className='rounded-t-md w-full h-full'
                />
                <span
                    className={`absolute right-3 top-3 text-xs font-medium bg-thi text-pri p-1 px-2 rounded-md ${discount !== null ? 'block' : 'hidden'}`}
                >
                    {discount * 100}% OFF
                </span>
                <button
                    className='absolute top-2 left-2 p-1 text-rose-500'
                >
                    {
                        id == 1
                        ?   <svg  
                                xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M11.29 20.69c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.29-2.29-5.84-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41z"></path>
                            </svg>
                        :   <svg  
                                xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#000000"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path>
                            </svg>
                    }
                </button>
            </div>

            {/* details */}
            <div
                className='flex flex-col justify-between w-full h-3/9 p-3 pt-2'
            >

                {/* name, category and rating */}
                <div
                    className='flex flex-col gap-0 w-full h-fit'
                >

                    <div
                        className='flex flex-row items-center justify-between w-full h-fit'
                    >
                        <h1
                            className='font-medium text-text dark:text-Dtext'
                        >
                            {name}
                        </h1>
                        <p
                            className='text-sm text-accent dark:text-Daccent flex flex-row items-center gap-1'
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill={"#fbbf24"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                            <span
                                className=' text-xs'
                            >
                                {rating}
                            </span>
                        </p>
                    </div>
                    <p
                        className='text-xs text-accent dark:text-Daccent font-light'
                    >
                        {category}
                    </p>
                </div>

                {/* price and add to cart button */}
                <div
                    className='flex flex-row items-end justify-between w-full h-fit'
                >
                    {
                        discount !== null
                        ?   <div
                                className='flex flex-row items-center gap-1 w-fit h-fit text-sm'
                            >   
                                {/* discounted price */}
                                <p
                                    className='text font-semibold text-text dark:text-Dtext '
                                >
                                    £{price - (price * discount)}
                                </p>
                                <svg className='text-accent/80 dark:text-Daccent/80' xmlns="http://www.w3.org/2000/svg" width={6} height={6} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 5a7 7 0 1 0 0 14 7 7 0 1 0 0-14"></path></svg>
                                <p
                                    className='text-accent/80 dark:text-Daccent/80 font-semibold line-through'
                                >
                                    £{price}
                                </p>
                            </div>
                        :   <p
                                className='text-text dark:text-Dtext text-sm font-semibold'
                            >
                                £{price}
                            </p>
                    }
                    <button
                        className='p-1 rounded-sm bg-pri hover:bg-sec dark:hover:bg-Dsec duration-200  text-Dtext dark: dark:bg-Dpri'
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M15 13v-3h3V8h-3V5h-2v3h-3v2h3v3z"></path><path d="M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2L21.66 9h-2.18l-2.62 6h-6.18L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33z"></path></svg>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ItemCard