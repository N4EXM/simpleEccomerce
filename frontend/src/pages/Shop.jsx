import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import ChecboxkBtn from '../components/buttons/CheckboxBtn'

const Shop = () => {

  const [filters,setFilters] = useState([])

  const categories = [
    'Computers',
    'Smartphones',
    'Tablets',
    'Consoles',
    'Smart appliances'
  ]
  
  

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
            className='flex flex-col items-start justify-start gap-10 p-5 rounded-md bg-SBG dark:bg-DSBG w-full h-full shadow shadow-Daccent dark:shadow-slate-950 overflow-y-scroll scrollbar-hide'
          >
            
            {/* categories */}
            <div
              className='w-full h-fit flex flex-col gap-4'
            >
              
              {/* name */}
              <div
                className='flex flex-col gap-1.5 w-full h-fit'
              >
                <h1
                  className='font-semibold text-lg'
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
                      ftn={() => {}}
                      name={category}
                      value={false}
                    />
                  ))
                }
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