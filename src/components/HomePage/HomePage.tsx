import React from 'react'
import HomePagePagesSection from './HomePageComponents/HomePagePagesSection/HomePagePagesSection'
import HomePageSubPagesSection from './HomePageComponents/HomePagePagesSection/HomePageSubPagesSection'
import HomePageTitle from './HomePageComponents/HomePageTitle'
import HomePageTopBar from './HomePageComponents/HomePageTopBar'
import ServerConnectionStatus from './HomePageComponents/ServerConnectionStatus'

function HomePage(props: {
  serverStatus?: boolean
}) {
  return (
    <div
      className='w-full h-[calc(100vh-97px)]
                flex flex-col
                bg-slate-200
                overflow-auto
                pb-8'
    >
      <HomePageTopBar>
        <HomePageTitle />
      </HomePageTopBar>
      <ServerConnectionStatus 
        serverStauts={props.serverStatus}
      />
      <HomePagePagesSection />
      <HomePageSubPagesSection />
    </div>
  )
}

export default HomePage