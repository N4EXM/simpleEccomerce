import React, { useState } from 'react'

const CartCard = ({ image, name, brand, category, discount, size, rating, stock, price }) => {

    const [quantity, setQuantity] = useState(0)
    const [subtotal, setSubtotal] = useState(0)

    const handleQuantityChange = (quantityChange) => {
        setQuantity(quantityChange)
        setSubtotal(quantityChange * price)
    } 

    return (
        <div
            className='flex flex-row gap-4 w-full h-fit  rounded-md'
        >
            
            {/* delete button container */}
            <div
                className='w-1/12 h-full flex items-center justify-center'
            >
                <button
                    className='text-accent dark:text-Daccent hover:bg-rose-300 hover:text-rose-600 p-1 duration-200 rounded-full dark:hover:text-rose-50 dark:hover:bg-rose-500'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
                </button>
            </div>

            {/* image, name and brand category */}
            <div
                className='w-5/12 h-full rounded-md flex flex-row gap-4'
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
                className='w-2/12 h-full flex items-center justify-center'
            >
                <p
                    className='font-medium text-text dark:text-Dtext'
                >
                    £{price}
                </p>
            </div>

            {/* quantity */}
            <div
                className='flex items-center w-2/12 h-full justify-center'
            >

                <div
                    className='flex flex-row items-center border-2 border-gray-300 rounded-md w-fit text-text dark:text-Dtext dark:border-gray-700'
                >
                    <button
                        className='p-1 hover:text-Dtext hover:bg-pri rounded-l duration-200'
                        onClick={() => handleQuantityChange(quantity - 1)}
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24"><path d="M3 11h18v2H3z"></path></svg>
                    </button>
                    <input
                        className='px-2 border-x-2 appearance-none border-gray-300 dark:border-gray-700 bg-SBG dark:bg-DSBG outline-none max-w-11 w-11 text-center'
                        value={quantity}
                        type='number'
                        onChange={(e) => handleQuantityChange(e.target.value)}
                    />
                    <button
                        className='p-1 hover:text-Dtext hover:bg-pri rounded-r duration-200'
                        onClick={() => handleQuantityChange(quantity + 1)}
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>
                    </button>
                </div>

            </div>

            {/* subtotal */}
            <div
                className='w-2/12 h-full flex items-center justify-center'
            >
                <p
                    className='font-medium text-text dark:text-Dtext'
                >
                    £{subtotal}
                </p>
            </div>

        </div>
    )
}

export default CartCard