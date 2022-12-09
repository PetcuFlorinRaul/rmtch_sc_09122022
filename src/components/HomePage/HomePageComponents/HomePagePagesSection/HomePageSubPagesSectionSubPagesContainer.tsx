import React from 'react'

function HomePageSubPagesSectionSubPagesContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='flex items-center
                w-full
                overflow-y-auto
                p-2'   
    >
        {props.children}
    </div>
  )
}

export default HomePageSubPagesSectionSubPagesContainer