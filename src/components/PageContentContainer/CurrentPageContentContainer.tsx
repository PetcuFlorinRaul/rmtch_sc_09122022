import React from 'react'

function CurrentPageContentContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='w-full h-[100vh+20px] 
                  flex flex-col'
    >
        {props.children}
    </div>
  )
}

export default CurrentPageContentContainer