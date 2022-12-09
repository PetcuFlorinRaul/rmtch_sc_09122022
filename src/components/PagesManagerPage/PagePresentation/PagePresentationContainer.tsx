import React from 'react'

function PagePresentationContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='w-full h-full
                  p-4 bg-slate-200'
    >
        {props.children}
    </div>
  )
}

export default PagePresentationContainer