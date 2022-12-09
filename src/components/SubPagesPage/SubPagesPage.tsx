import { Outlet } from 'react-router-dom'
import SubPagesPageContainer from './SubPagesPageComponents/SubPagesPageContainer'

function SubPagesPage() {
  return (
    <SubPagesPageContainer>
      <Outlet />
    </SubPagesPageContainer>
  )
}

export default SubPagesPage