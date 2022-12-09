import { Outlet } from 'react-router-dom'

import LeftMenu from '../LeftMenu/LeftMenu'
import CurrentPageContentContainer from '../PageContentContainer/CurrentPageContentContainer'
import PageContentContainer from '../PageContentContainer/PageContentContainer'
import PageSecondaryContainer from '../PageContentContainer/PageSecondaryContainer'
import TopNavBar from '../TopNavBar/TopNavBar'

function MainPage() {
  return (
    <PageContentContainer>
        <TopNavBar />
        <PageSecondaryContainer>
          <LeftMenu />
          <CurrentPageContentContainer>
            <Outlet />
          </CurrentPageContentContainer>
        </PageSecondaryContainer>
    </PageContentContainer>
  )
}

export default MainPage