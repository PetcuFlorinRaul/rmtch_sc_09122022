import React from 'react'

function TopNavBarContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='flex items-center
                  w-full h-[97px]
                  border-b-[1px]
                  border-black/30'
    >
        {props.children}
    </div>
  )
}

export default TopNavBarContainer