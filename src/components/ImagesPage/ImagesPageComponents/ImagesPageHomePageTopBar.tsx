import React from 'react'

function ImagesPageHomePageTopBar(props: ComponentChildrenProps) {
  return (
    <div
    className='w-full
    p-4
    flex items-center
    bg-white
    border-b-[1px] border-black/30'
    >
        {props.children}
    </div>
  )
}

export default ImagesPageHomePageTopBar