import React, { useContext, useState } from 'react'
import { ShopeContext } from '../context/ShopContext'

const Collection = () => {

  const { product } = useContext(ShopeContext);
  const { showFilter,setShowFilter} = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}

      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>

      {/*Category Filter  */}
       <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p>
              <input type="checkbox" id="all" name="all" value="all" />
            </p>
        </div>
       </div>
      </div>
      
    </div>
  )
}

export default Collection
