import React from 'react'

const WishCard = ({ name, price, category, image, stock }) => {
    return (
        <div
            className='flex flex-row items-center w-full h-fit rounded-md '
        >

            {/* delete button container */}
            <div
                className='h-full flex items-center justify-start p-5 w-1/12'
            >
                <button
                    className='text-accent dark:text-Daccent hover:bg-rose-300 hover:text-rose-600 p-1 duration-200 rounded-full dark:hover:text-rose-50 dark:hover:bg-rose-500'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
                </button>
            </div>

            {/* image and product details */}
            <div
                className='flex flex-row items-start gap-2 w-3/12'
            >
                {/* image */}
                <div
                    className='w-24 h-24 p-1 rounded-md bg-white'
                >
                    <img    
                        src={image} 
                        alt="item" 
                        className='w-full h-full rounded-md'
                    />
                </div>
                {/* name and category */}
                <div
                    className='flex flex-col gap-0 w-fit h-full pt-1'
                >
                    <h1
                        className='font-medium text-base/tight text-text dark:text-Dtext'
                    >
                        {name}
                    </h1>  
                    <p
                        className='text-sm/tight text-accent dark:text-Daccent'
                    >
                        {category}
                    </p>
                </div>
            </div>

            {/* price */}
            <div
                className='flex w-3/12 h-full items-center justify-center'
            >
                <p
                    className='text-accent dark:text-Daccent font-medium text-sm'
                >
                    £{price}
                </p>
            </div>

            {/* stock */}
            <div
                className='flex w-3/12 h-full items-center justify-center'
            >
                <p
                    className={`font-medium text-sm ${stock > 0 ? 'text-pri dark:text-Dpri' : 'text-rose-500 dark:text-rose-400'}`}
                >
                    {
                        stock > 0
                        ? 'In stock'
                        : 'Out of stock'
                    }
                    
                </p>
            </div>

            {/* add to cart button */}
            <div
                className='w-3/12 h-full flex items-center justify-center'
            >
                <button
                    className='p-2 rounded-md bg-pri text-Dtext font-medium text-sm flex flex-row items-center gap-2 hover:bg-sec dark:bg-Dpri dark:hover:bg-Dsec dark:text-text duration-200'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2l3.24-7.4c.14-.31.11-.67-.08-.95S21.34 7 21 7H7.33L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33zM19.47 9l-2.62 6h-6.18l-2.5-6z"></path></svg>
                    Add to cart
                </button>
            </div>

        </div>
    )
}

export default WishCard