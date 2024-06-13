import React from 'react'
import Sidebar from './Sidebar'

const layout = ({ children }) => {
  return (
    <div>

      <div className='grid grid-rows-2 grid-flow-col gap-2'>
        <div className='row-span-2'>
          <Sidebar />
        </div>
        <div className='col-span-1  mt-5'>
          {children}
        </div>
      </div>


    </div>
  )
}

export default layout
