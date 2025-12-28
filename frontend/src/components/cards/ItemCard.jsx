import React from 'react'

const ItemCard = ({image, name, size, discount, stock, price, brand, rating}) => {
    return (
        <div
            className='flex flex-col w-full max-h-80 h-96 shadow shadow-Daccent dark:shadow-slate-950 rounded-md bg-slate-100 dark:bg-DSBG'
        >

            {/* images */}
            <div
                className='w-full h-6/9 rounded-t-md overflow-y-hidden bg-white p-4 relative'
            >
                <img 
                    src={image} 
                    alt="productImage" 
                    className='rounded-t-md'
                />
                <span
                    className={`absolute right-3 top-3 text-xs font-semibold bg-thi text-pri p-1 px-2 rounded-md ${discount !== null ? 'block' : 'hidden'}`}
                >
                    {discount * 100}% OFF
                </span>
            </div>

            {/* details */}
            <div
                className='flex flex-col justify-between w-full h-3/9 p-3'
            >

                {/* name, brand and rating */}
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
                            <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"#fbbf24"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                            <span
                                className='pt-0.5'
                            >
                                {rating}
                            </span>
                        </p>
                    </div>
                    <p
                        className='text-sm text-accent dark:text-Daccent font-light'
                    >
                        {brand}
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
                        className='p-1 rounded-sm bg-pri text-Dtext dark: dark:bg-Dpri'
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M15 13v-3h3V8h-3V5h-2v3h-3v2h3v3z"></path><path d="M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2L21.66 9h-2.18l-2.62 6h-6.18L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33z"></path></svg>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ItemCard