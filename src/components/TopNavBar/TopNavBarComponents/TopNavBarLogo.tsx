import React from 'react'
import Logo from '../../SVGComponents/Logo'

function TopNavBarLogo() {
  return (
    <div
      className='flex p-2'
    >
        <div
          className='w-16 h-16
                    flex items-center justify-center
                    mr-2'
        >
            <Logo />
        </div>
        <div
          className='flex flex-col'
        >
          <p
            className='font-kanit font-semibold text-3xl
                      '
          >
            RAMTECH
          </p>
          <p
            className='text-[#42A9EA] text-md font-medium
                      mt-1'
          >
            Research Center on Advanced Materials & Technologies
          </p>
        </div>
    </div>
  )
}

export default TopNavBarLogo