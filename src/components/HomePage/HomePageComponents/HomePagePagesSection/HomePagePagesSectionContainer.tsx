import React from 'react'

function HomePagePagesSectionContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='w-[calc(100%-32px)]
                  flex flex-col
                  bg-white
                  rounded-md
                  p-4
                  ml-4 mt-8'
    >
        {props.children}
    </div>
  )
}

export default HomePagePagesSectionContainer