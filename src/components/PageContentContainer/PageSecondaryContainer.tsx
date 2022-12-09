import React from 'react'

function PageSecondaryContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='w-full h-full
                  flex'
    >
        {props.children}
    </div>
  )
}

export default PageSecondaryContainer