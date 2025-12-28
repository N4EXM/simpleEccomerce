import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import ChecboxkBtn from '../components/buttons/CheckboxBtn'
import DualRangeSlider from '../components/inputs/DualRangeSlider'
import FilterSubMenu from '../components/layout/ShoppingPage/FilterSubMenu'
import { items } from '../fakeData'
import ItemCard from '../components/cards/ItemCard'

const Shop = () => {

  // state
  const [filterOptions, setFilterOptions] = useState({
    Reviews: [],
    Brands: [],
    Sizes: [],
    Categories: [],
    priceRange: { min: 0, max:75 }
  })
  const [originalItems, setOriginalItems] = useState(items)
  const [filteredItems, setFilteredItems] = useState(items)

  const categories = [
    'Computers',
    'Smartphones',
    'Tablets',
    'Headphones',
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

  const ratings = [
    5,4,3,2,1
  ]

  // const handleToggleFilter = (option, category) => {
  //   setFilterOptions(prev => {
  //     if (category === 'Categories') {
  //       return {
  //         ...prev,
  //         categories: prev.Categories.includes(option)
  //           ? prev.Categories.filter(item => item !== option)
  //           : [...prev.Categories, option]
  //       }
  //     }
      
  //     if (category === 'Brands') {
  //       return {
  //         ...prev,
  //         brands: prev.Brands.includes(option)
  //           ? prev.Brands.filter(item => item !== option)
  //           : [...prev.Brands, option]
  //       }
  //     }
      
  //     if (category === 'Sizes') {
  //       return {
  //         ...prev,
  //         sizes: prev.Sizes.includes(option)
  //           ? prev.Sizes.filter(item => item !== option)
  //           : [...prev.Sizes, option]
  //       }
  //     }
      
  //     if (category === 'reviews') {
  //       return {
  //         ...prev,
  //         reviews: prev.Reviews.includes(option)
  //           ? prev.Reviews.filter(item => item !== option)
  //           : [...prev.Reviews, option]
  //       }
  //     }
      
  //     return prev
  //   })

  //   return true
  // }

  const handleToggleFilter = (option, category) => {
    setFilterOptions(prev => ({
      ...prev,
      [category]: prev[category].includes(option)
        ? prev[category].filter(item => item !== option)
        : [...prev[category], option]
    }))
  }

  const handleFilterItems = () => {

    

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

    return parseFloat(value)
  };

  const handleMinValChange = (e) => {

    const newValue = handlePositiveNumberInput(e)

    setFilterOptions(prev => ({

      ...prev,
      priceRange: {
        ...prev.priceRange,
        min: newValue
      }

    }))

  }

  const handleMaxValChange = (e) => {

    const newValue = handlePositiveNumberInput(e)

    setFilterOptions(prev => ({

      ...prev,
      priceRange: {
        ...prev.priceRange,
        max: newValue
      }

    }))

  }

  useEffect(() => {
    console.log(filterOptions)
  }, [filterOptions])

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

              {/* rating */}
              <FilterSubMenu
                name={'Reviews'}
              >
                {
                  ratings.map((rating) => {
                  
                    let numOfStars = ''

                    for (let i = 0; i < rating; i++) {
                    
                      numOfStars = numOfStars + '★'
                    
                    }

                    return (

                      <div
                        className='flex flex-row items-center gap-2'
                      >
                        <ChecboxkBtn
                          key={rating}
                          ftn={handleToggleFilter}
                          value={rating}
                          option={'Reviews'}
                        />
                        <span
                          className='text-amber-500 dark:text-amber-400'
                        >
                          {numOfStars}
                        </span>
                      </div>

                    )
                  })
                }
              </FilterSubMenu>

              {/* categories */}
              <FilterSubMenu
                name={'Categories'}
              >
                {
                  categories.map((category) => (
                    <ChecboxkBtn
                      key={category}
                      ftn={handleToggleFilter}
                      value={category}
                      option={'Categories'}
                    />
                  ))
                }
              </FilterSubMenu>

              {/* brands */}
              <FilterSubMenu
                name={'Brands'}
              >
                {
                  brands.map((category) => (
                    <ChecboxkBtn
                      key={category}
                      ftn={handleToggleFilter}
                      value={category}
                      option={'Brands'}
                    />
                  ))
                }
              </FilterSubMenu>

              {/* size */}
              <FilterSubMenu
                name={'Sizes'}
              >
                {
                  sizes.map((size) => (
                    <ChecboxkBtn
                      key={size}
                      ftn={handleToggleFilter}
                      value={size}
                      option={'Sizes'}

                    />
                  ))
                }
              </FilterSubMenu>

              {/* price range */}
              <FilterSubMenu
                name={'Price'}
              >
                {/* input boxes */}
                <div
                  className='w-full h-fit flex flex-row items-center gap-2'
                >

                  {/* min value */}
                  <input 
                    type="number"
                    className='w-1/2 h-fit p-2 pl-2.5 rounded-md border-2 border-Daccent dark:border-accent text-sm outline-none '
                    placeholder='Min'
                    value={filterOptions.priceRange.min}
                    onChange={handleMinValChange}
                  />

                  {/* max value */}
                  <input 
                    type="number" 
                    className='w-1/2 h-fit p-2 pl-2.5 rounded-md border-2 border-Daccent dark:border-accent text-sm outline-none'
                    placeholder='Max'
                    value={filterOptions.priceRange.max}
                    onChange={handleMaxValChange}
                  />

                </div>
              </FilterSubMenu>

            </div>

          </div>

        </div>

        {/* items container */}
        <div
          className='col-span-8 row-span-full w-full h-full p-8 grid grid-cols-3 overflow-y-scroll gap-5 scrollbar-hide'
        >
          {
            filteredItems.map((item) => (
              <ItemCard
                image={item.image}
                name={item.name}
                size={item.size}
                discount={item.discount}
                stock={item.stock}
                brand={item.brand}
                rating={item.rating}
                price={item.price}
                category={item.category}
              />
            ))
          }
        </div>

      </div>

    </Layout>
  )
}

export default Shop