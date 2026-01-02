import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { items } from '../fakeData'
import CartCard from '../components/cards/CartCard'
import Separator from '../components/layout/Separator'
import { GBP_format } from '../utils/textUtils'


const Cart = () => {

  // state
  const [cart, setCart] = useState(items)
  const pricingDetails = {
    subTotal: 334.4,
    shipping: 12.5,
    taxes: 3,
  }
  
  const totalPrice = pricingDetails.subTotal + pricingDetails.shipping + pricingDetails.taxes

  return (
    
    <Layout>

      {/* main content */}
      <div
        className='col-span-12 row-start-3 row-span-11 w-full h-full grid grid-cols-12 grid-rows-12'
      > 

        {/* item list container */}
        <div
          className='col-span-8 pl-20 row-span-12 p-8 flex flex-col gap-4'
        >

          {/* title */}
          <div
            className='flex flex-col gap-2 w-full h-fit'
          >
            <h1
              className='font-semibold text-2xl text-text dark:text-Dtext'
            >
              Your Cart
            </h1>
            <Separator/>
          </div>

          {/* attributes */}
          <div
            className='flex flex-row items-center bg-SBG dark:bg-DSBG text-text dark:text-Dtext shadow shadow-Daccent dark:shadow-DSBG rounded-md w-full h-fit p-4 pl-16'
          >

            {/* product */}
            <p
              className='w-6/12 h-fit font-medium '
            >
              Product
            </p>

            <p
              className='h-fit font-medium w-2/12'
            >
              Price
            </p>

            <p
              className='h-fit font-medium w-2/12'
            >
              Quantity
            </p>

            <p
              className='h-fit font-medium w-2/12 text-center'
            >
              Subtotal
            </p>

          </div>

          {/* items */}
          <div
            className='flex flex-col gap-2 w-full h-full overflow-y-scroll scrollbar-hide '
          >
            {
              cart.map((item, index) => (
                
                <div
                  className='flex flex-col w-full h-fit gap-2'
                >
                  <CartCard
                    image={item.image}
                    name={item.name}
                    brand={item.brand}
                    category={item.category}
                    price={item.price}
                  />
                  {
                    index + 1 !== items.length
                    &&  <Separator/>
                  }
                </div>
              ))
            }
          </div>

        </div>

        {/* total pricing container */}
        <div
          className='col-span-4 row-span-12 flex flex-col gap-8 w-full min-h-3/5 h-fit p-8 pr-20'
        >

          <div
            className='w-full h-full bg-SBG dark:bg-DSBG rounded-md p-5 flex flex-col gap-4 shadow shadow-Daccent dark:shadow-black'
          > 

            {/* title */}
            <div
              className='flex flex-col gap-2 text-lg font-semibold text-text dark:text-Dtext  '
            >
              Order Summary
              <Separator/>
            </div>

            {/* details */}
            <div
              className='flex flex-col gap-3 w-full h-full'
            >

              {/* total num of items */}
              <div
                className='flex flex-row items-center justify-between w-full h-fit font-medium px-1'
              >
                <p
                  className='text-accent/80 dark:text-Daccent/80 '
                >
                  Items
                </p>
                <p
                  className='text-text dark:text-Dtext'
                >
                  {items.length}
                </p>
              </div>

              {/* Sub total */}
              <div
                className='flex flex-row items-center justify-between w-full h-fit font-medium px-1'
              >
                <p
                  className='text-accent/80 dark:text-Daccent/80 '
                >
                  Sub Total
                </p>
                <p
                  className='text-text dark:text-Dtext'
                >
                  {GBP_format(pricingDetails.subTotal)}
                </p>
              </div>

              {/* shipping */}
              <div
                className='flex flex-row items-center justify-between w-full h-fit font-medium px-1'
              >
                <p
                  className='text-accent/80 dark:text-Daccent/80 '
                >
                  Shipping
                </p>
                <p
                  className='text-text dark:text-Dtext'
                >
                  {GBP_format(pricingDetails.shipping)}
                </p>
              </div>

              {/* Sub total */}
              <div
                className='flex flex-row items-center justify-between w-full h-fit font-medium px-1'
              >
                <p
                  className='text-accent/80 dark:text-Daccent/80 '
                >
                  Taxes
                </p>
                <p
                  className='text-text dark:text-Dtext'
                >
                  {GBP_format(pricingDetails.taxes)}
                </p>
              </div>

              {/* total price */}
              <div
                className='flex flex-col gap-3 w-full h-fit'
              >
                <Separator/>
                <div
                  className='flex flex-row items-center justify-between w-full h-fit px-1'
                >
                  <p
                    className='text-accent/80 dark:text-Daccent/80 font-medium'
                  >
                    Total: 
                  </p>
                  <p
                    className='font-medium text-text dark:text-Dtext'
                  >
                    {GBP_format(totalPrice)}
                  </p>
                </div>
              </div>

            </div>

            {/* purchase button */}
            <button
              className='dark:text-text text-Dtext p-2 rounded-md bg-pri dark:bg-Dpri hover:bg-sec dark:hover:bg-Dsec font-medium'
            >
              Proceed to Checkout
            </button>

          </div>

        </div>

      </div>

    </Layout>

  )
}

export default Cart