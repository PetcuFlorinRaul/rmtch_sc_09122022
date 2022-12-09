import React from 'react'
import TopNavBarContainer from './TopNavBarComponents/TopNavBarContainer'
import TopNavBarISLogo from './TopNavBarComponents/TopNavBarISLogo'
import TopNavBarLogo from './TopNavBarComponents/TopNavBarLogo'
import TopNavBarROLogo from './TopNavBarComponents/TopNavBarROLogo'
import TopNavBarUELogo from './TopNavBarComponents/TopNavBarUELogo'

function TopNavBar() {
  return (
    <TopNavBarContainer>
        <TopNavBarLogo />
        {/* <TopNavBarUELogo />
        <TopNavBarROLogo />
        <TopNavBarISLogo /> */}
    </TopNavBarContainer>
  )
}

export default TopNavBar