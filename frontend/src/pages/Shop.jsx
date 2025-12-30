import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import CheckboxFilterBtn from '../components/buttons/CheckboxFilterBtn'
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
    priceRange: { min: 0, max: 1000 }
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

    // filter through reviews
    let filterItems = originalItems

    if (filterOptions.Reviews.length > 0) {

      filterItems = filterItems.filter(item => 
        filterOptions.Reviews.some(review => 
        Math.floor(item.rating) >= review // 4 star filter shows 4.0, 4.5, 5.0
      ))

    }

    // filter through brands
    if (filterOptions.Brands.length > 0) {

      filterItems = filterItems.filter(item => 
        filterOptions.Brands.some(brand => 
          item.brand.toLowerCase() == brand.toLowerCase()
        )
      )

    }

    // filter through categories
    if (filterOptions.Categories.length > 0) {

      filterItems = filterItems.filter(item => 
        filterOptions.Categories.some(category => 
          item.category.toLowerCase() == category.toLowerCase()
        )
      )

    }

    // filter through sizes
    if (filterOptions.Sizes.length > 0) {

      filterItems = filterItems.filter(item => 
        filterOptions.Sizes.some(size => 
          item.size.toLowerCase() == size.toLowerCase()
        )
      )

    }

    // filter through price range
    filterItems = filterItems.filter(item =>
      item.price >= filterOptions.priceRange.min && item.price <= filterOptions.priceRange.max
    )
    
    console.log(filterItems)
    setFilteredItems(filterItems)

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
    handleFilterItems()
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
                        key={rating}
                        className='flex flex-row items-center gap-2'
                      >
                        <CheckboxFilterBtn
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
                    <CheckboxFilterBtn
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
                    <CheckboxFilterBtn
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
                    <CheckboxFilterBtn
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
                    value={
                      filterOptions.priceRange.min === null
                      ? 0
                      : filterOptions.priceRange.min
                    }
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
          className='col-span-8 row-span-full w-full h-full p-8 grid lg:grid-cols-3 overflow-y-scroll gap-5 scrollbar-hide md:grid-cols-2'
        >
          {
            filteredItems.length > 0
            ? filteredItems.map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
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
            : <div
                className='flex items-center justify-center w-full h-full col-span-3'
              >

                <div
                  className='flex flex-col gap-4 w-full h-full items-center justify-center bg-SBG dark:bg-DSBG rounded-md'
                >
                  <span
                    className='bg-BG dark:bg-DBG p-3 w-fit h-fit rounded-full text-pri dark:text-Dpri shadow shadow-Daccent dark:shadow-slate-950'
                  >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M2.21 9.39c-.19.25-.25.57-.17.87l2.8 10.26c.24.87 1.03 1.47 1.93 1.47h10.47c.9 0 1.69-.61 1.93-1.47l2.8-10.26c.08-.3.02-.62-.17-.87a.99.99 0 0 0-.79-.39h-1.42l-3.71-6.5-1.74.99 3.15 5.5H6.72l3.15-5.5-1.74-.99L4.42 9H3a1 1 0 0 0-.79.39M13 13h2v5h-2zm-4 0h2v5H9z"></path></svg>
                  </span>

                  {/* text */}
                  <div
                    className='flex flex-col gap-1 w-fit h-fit text-center'
                  >
                    <h1
                      className='text-xl font-semibold text-text dark:text-Dtext'
                    >
                      Oops!
                    </h1>
                    <p
                      className='text-accent dark:text-Daccent text-sm w-70'
                    >
                      looks like no items match these filters try changing the filters 
                    </p>
                  </div>

                </div>

              </div>
          }
        </div>

      </div>

    </Layout>
  )
}

export default Shop