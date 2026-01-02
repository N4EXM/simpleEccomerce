import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import headphone1 from '../assets/headphone1.jpg'


const ItemPage = () => {

  const [itemDetails, setItemDetails] = useState({
    id: 0,
    name: 'Headphone 1',
    category: 'Headphones',
    brand: 'Samsung',
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat debitis natus itaque dolor corrupti, officia, obcaecati harum ipsa et totam.',
    stock: false,
    discount: 0.5,
    rating: 3.5,
    image: headphone1
  })

  return (
    <Layout>
      
      {/* main content */}
      <div
        className='col-span-12 row-span-11 row-start-3 w-full h-full grid grid-cols-12 grid-row-12 px-20'
      >
        
        {/* image container */}
        <div
          className='col-span-6 row-span-6 w-full h-full p-10 flex'
        >

          <div
            className='w-fit h-fit flex items-center justify-center p-2 rounded-md bg-white'
          >
            <img 
              src={itemDetails.image} 
              alt="" 
              className='w-3/4 h-3/4'
            />
          </div>

        </div>

        {/* details container */}
        <div
          className='col-span-6 row-span-6 w-full h-full flex flex-col gap-7 p-10 pl-0 pt-14'
        >

          {/* category, name, stock and reviews */}
          <div
            className='flex flex-col gap-1 w-full h-fit'
          >
            {/* category */}
            <p
              className='font-medium text-accent/50 dark:text-Daccent/50'
            >
              {itemDetails.category}
            </p>

            {/* name and stock status */}
            <div
              className='flex flex-row items-center gap-4 w-fit h-fit'
            >
              <h1
                className='text-2xl font-medium text-text dark:text-Dtext'
              >
                {itemDetails.name}
              </h1>
              <p
                className={`${itemDetails.stock ? 'bg-thi/30 text-sec dark:bg-emerald-200/95 dark:text-pri dark:border-pri border-pri' : 'bg-rose-200 text-rose-600 dark:bg-rose-300 dark:text-rose-600 dark:border-rose-700 border-rose-700'} text-xs font-medium p-1 px-2.5 border rounded-xl `}
              >
                {
                  itemDetails.stock
                  ? 'In Stock'
                  : 'Out Of Stock'
                }
              </p>
            </div>

            {/* stars */}
            <div
              className='flex flex-row items-center gap-2 w-fit h-fit pt-1'
            >
              <div
                className='flex flex-row items-center gap-0'
              >
                {
                  Array.from({ length: 5 }, (_,index) => {
                  
                    const ratingDifference = 5 - Math.floor(itemDetails.rating)

                    return (
                      <svg className={`${index <= ratingDifference ? 'text-amber-400' : 'text-slate-300 dark:text-accent'} text-xl rounded-md`} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
                    )

                  })
                }
              </div>
              <p
                className='dark:text-Daccent text-accent'
              >
                {itemDetails.rating}
              </p>

            </div>

          </div>

          {/* price */}
          <div
            className='flex flex-row items-center gap-2'
          >
            <p
              className='text-2xl text-text dark:text-Dtext font-medium'
            >
                £{
                  itemDetails.discount !== null
                  ? itemDetails.price - (itemDetails.price * itemDetails.discount)
                  : itemDetails.price
                }
            </p>
            {
              itemDetails.discount !== null 
              &&  <>
                    <svg  xmlns="http://www.w3.org/2000/svg" width={6} height={6} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20"></path></svg>
                    <p
                      className='text-accent line-through text-2xl font-medium'
                    >
                      £{itemDetails.price}
                    </p>
                  </>
            }
          </div>

        </div>

      </div>

    </Layout>
  )
}

export default ItemPage