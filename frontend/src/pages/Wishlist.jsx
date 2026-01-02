import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Separator from '../components/layout/Separator'
import { items } from '../fakeData'
import WishCard from '../components/cards/WishCard'


const Wishlist = () => {
    
    const [wishlistItems, setWishlistItems] = useState(items)

    return (
        <Layout>

            {/* main container */}
            <div
                className='w-full col-span-12 row-start-3 row-span-11 grid grid-cols-12 grid-rows-12'
            >

                {/* main content */}
                <div
                    className='flex flex-col gap-4 w-full h-full col-span-12 row-span-12 p-20'
                >

                    {/* title */}
                    <div
                        className='flex flex-col gap-2 w-full h-fit'
                    >
                        <h1
                            className='font-semibold text-2xl text-text dark:text-Dtext'
                        >
                            Wishlist
                        </h1>
                        <Separator/>
                    </div>
                    
                    {/* attributes */}
                    <div
                        className='flex flex-row items-start bg-SBG dark:bg-DSBG text-text dark:text-Dtext shadow shadow-Daccent dark:shadow-DSBG rounded-md w-full h-fit p-4 pl-22'
                    >

                        {/* product */}
                        <div
                            className='w-3/12 h-full flex items-center justify-start'
                        >
                            <p
                                className='font-medium'
                            >
                                Product
                            </p>
                            
                        </div>

                        {/* price */}
                        <div
                            className='w-3/12 h-full flex items-center justify-center'
                        >
                            <p
                                className='font-medium'
                            >
                                Price
                            </p>
                            
                        </div>

                        {/* stock status */}
                        <div
                            className='w-3/12 h-full flex items-center justify-center'
                        >
                            <p
                                className='font-medium'
                            >
                                Stock status
                            </p>
                            
                        </div>

                    </div>

                    {/* items */}
                    <div
                        className='flex flex-col gap-2 w-full h-full overflow-y-scroll scrollbar-hide'
                    >   
                        {
                            wishlistItems.map((item, index) => (
                                
                                <div
                                    className='flex flex-col gap-2 w-full h-full'
                                >
                                    <WishCard
                                        name={item.name}
                                        price={item.price}
                                        category={item.category}
                                        image={item.image}
                                        stock={item.stock}
                                    />

                                    {
                                        index + 1 !== wishlistItems.length
                                        && <Separator/>
                                        
                                    }
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default Wishlist