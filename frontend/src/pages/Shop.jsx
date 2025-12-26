import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import ChecboxkBtn from '../components/buttons/CheckboxBtn'
import DualRangeSlider from '../components/inputs/DualRangeSlider'

const Shop = () => {

  // state
  const [filters,setFilters] = useState([])
  const [priceRange, setPriceRange] = useState({ min:0, max: 75 })


  const categories = [
    'Computers',
    'Smartphones',
    'Tablets',
    'Consoles',
    'Smart appliances'
  ]

  const sizes = [
    'S',
    'M',
    'L',
    'XL',
    '2XL'
  ]

  const brands = [
    'Nvidia',
    'Apple',
    'Samsung',
    'Xiaomi',
    'Lenovo'
  ]
  
  const handleToggleFilter = (option) => {

    if (filters.includes === option) {
      setFilters(filters.filter(prevFilter => prevFilter !== option))
      return 'removed'
    }
    else {
      setFilters([...filters, option])
      return 'added'
    }

  }

  const handlePositiveNumberInput = (e) => {
    // Get the input value
    let value = e.target.value;
    
    // Remove any non-numeric characters except decimal point
    value = value.replace(/[^0-9.]/g, '');
    
    // Remove extra decimal points (keep only first one)
    const decimalCount = value.split('.').length - 1;
    if (decimalCount > 1) {
      const parts = value.split('.');
      value = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Ensure the number is positive (remove leading minus sign)
    value = value.replace(/^-/, '');
    
    // Remove leading zeros except for "0."
    if (value.length > 1 && value[0] === '0' && value[1] !== '.') {
      value = value.substring(1);
    }
    

    // Update the input value
    e.target.value = value;

    return value
  };

  const handleMinValChange = (e) => {

    const newValue = handlePositiveNumberInput(e)

    setPriceRange({...priceRange, min: newValue})

  }

  const handleMaxValChange = (e) => {

    const newValue = handlePositiveNumberInput(e)

    setPriceRange({...priceRange, max: newValue})

  }

  useEffect(() => {
    console.log(filters)
  }, [filters])

  return (
    <Layout>
      
      <div
        className='w-full h-full col-span-12 row-start-3 row-span-11 grid grid-cols-12 grid-rows-12 px-12'
      >

        {/* filter options container */}
        <div
          className='col-span-4 row-span-full w-full h-full p-8 '
        >
          
          {/* filter options */}
          <div
            className='flex flex-col items-start justify-start gap-5 p-5 rounded-md bg-SBG dark:bg-DSBG w-full h-full shadow shadow-Daccent dark:shadow-slate-950 dark:text-Dtext'
          >

            {/* title */}
            <h1
              className='text-xl font-semibold'
            >
              Filter by: 
            </h1>

            <div
              className='flex flex-col gap-5 h-full w-full overflow-y-scroll scrollbar-hide'
            >

              {/* categories */}
              <div
                className='w-full h-fit flex flex-col gap-4 '
              >
                
                {/* name */}
                <div
                  className='flex flex-col gap-1.5 w-full h-fit'
                >
                  <h1
                    className='font-semibold'
                  >
                    Categories
                  </h1>
                  <span className='w-full h-0.5 rounded-md bg-pri dark:bg-Dpri'></span>
                </div>
                
                <div
                  className='flex flex-col gap-2 w-full h-fit'
                >
                  {
                    categories.map((category) => (
                      <ChecboxkBtn
                        key={category}
                        ftn={handleToggleFilter}
                        value={category}
                      />
                    ))
                  }
                </div>

              </div>

              {/* brands */}
              <div
                className='w-full h-fit flex flex-col gap-4 '
              >
                
                {/* name */}
                <div
                  className='flex flex-col gap-1.5 w-full h-fit'
                >
                  <h1
                    className='font-semibold'
                  >
                    Brands
                  </h1>
                  <span className='w-full h-0.5 rounded-md bg-pri dark:bg-Dpri'></span>
                </div>
                
                <div
                  className='flex flex-col gap-2 w-full h-fit'
                >
                  {
                    brands.map((category) => (
                      <ChecboxkBtn
                        key={category}
                        ftn={handleToggleFilter}
                        value={category}
                      />
                    ))
                  }
                </div>

              </div>

              {/* size */}
              <div
                className='w-full h-fit flex flex-col gap-4'
              >
                
                {/* name */}
                <div
                  className='flex flex-col gap-1.5 w-full h-fit'
                >
                  <h1
                    className='font-semibold'
                  >
                    Size
                  </h1>
                  <span className='w-full h-0.5 rounded-md bg-pri dark:bg-Dpri'></span>
                </div>
                
                <div
                  className='flex flex-col gap-2 w-full h-fit'
                >
                  {
                    sizes.map((size) => (
                      <ChecboxkBtn
                        key={size}
                        ftn={handleToggleFilter}
                        value={size}
                      />
                    ))
                  }
                </div>

              </div>

              {/* range */}
              <div
                className='w-full h-fit flex flex-col gap-4'
              >
                
                {/* name */}
                <div
                  className='flex flex-col gap-1.5 w-full h-fit'
                >
                  <h1
                    className='font-semibold'
                  >
                    Price
                  </h1>
                  <span className='w-full h-0.5 rounded-md bg-pri dark:bg-Dpri'></span>
                </div>

                {/* input boxes */}
                <div
                  className='w-full h-fit flex flex-row items-center gap-2'
                >

                  {/* min value */}
                  <input 
                    type="text"
                    className='w-1/2 h-fit p-2 pl-2.5 rounded-md border-2 border-Daccent dark:border-accent  text-sm '
                    placeholder='Min'
                    value={priceRange.min}
                    onChange={handleMinValChange}
                  />

                  {/* max value */}
                  <input 
                    type="text" 
                    className='w-1/2 h-fit p-2 pl-2.5 rounded-md border-2 border-Daccent dark:border-accent  text-sm '
                    placeholder='Max'
                    value={priceRange.max}
                    onChange={handleMaxValChange}
                  />

                </div>
                
                {/* <div
                  className='px-2'
                >
                  <DualRangeSlider
                    min={priceRange.min}
                    max={priceRange.max}
                    initialMin={0}
                    initialMax={100}
                    step={0}
                  />
                </div> */}
                

              </div>

            </div>

          </div>

        </div>

        {/* items container */}
        <div
          className='col-span-8 row-span-full w-full h-full p-8'
        >
          

        </div>

      </div>

    </Layout>
  )
}

export default Shop