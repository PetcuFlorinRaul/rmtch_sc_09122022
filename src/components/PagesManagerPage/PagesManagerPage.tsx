import { Outlet } from 'react-router-dom'
import PagesManagerPageContainer from './PagesManagerPageComponents/PagesManagerPageContainer'

function PagesManagerPage() {
  return (
    <PagesManagerPageContainer>
      <Outlet />
    </PagesManagerPageContainer>
  )
}

export default PagesManagerPage