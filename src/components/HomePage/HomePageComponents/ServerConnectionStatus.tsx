import React from 'react'

function ServerConnectionStatus(props: {
    serverStauts?: boolean
}) {
  return (
    <div
        className='flex items-center
                  bg-white
                  w-fit
                  p-4 
                  ml-4
                  rounded-md'
    >
        <p
            className='mr-2
                      '
        >
            Server status: 
        </p>
        <div
            className='flex items-center
                      font-medium'
        >
            {props.serverStauts === true ? "Connected" : "Disconnected"}
            {
                props.serverStauts === true ? (
                    <div 
                        className='w-3 h-3 rounded-full bg-green-500 ml-2'
                    />
                ) : (
                    <div 
                        className='w-3 h-3 rounded-full bg-red-500 ml-2'
                    />
                )
            }
        </div>
    </div>
  )
}

export default ServerConnectionStatus