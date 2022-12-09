import React from 'react'

function AppContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='w-full h-screen
                  flex flex-col'
    >
        {props.children}
    </div>
  )
}

export default AppContainer