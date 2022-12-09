import { Outlet } from 'react-router-dom'
import ImagesPageContainer from './ImagesPageComponents/ImagesPageContainer'

function ImagesPage() {
  return (
    <ImagesPageContainer>
      <Outlet />
    </ImagesPageContainer>
  )
}

export default ImagesPage