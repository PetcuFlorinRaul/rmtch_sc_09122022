import React from 'react'
import HomeIcon from '../SVGComponents/HomeIcon'
import ImagesIcon from '../SVGComponents/ImagesIcon'
import PagesIcon from '../SVGComponents/PagesIcon'
import PDFIcon from '../SVGComponents/PDFIcon'
import SubpagesIcon from '../SVGComponents/SubpagesIcon'
import LeftMenuContainer from './LeftMenuComponents/LeftMenuContainer'
import LeftMenuLinkItem from './LeftMenuComponents/LeftMenuLinkItem'

function LeftMenu() {
  return (
    <LeftMenuContainer>
      <LeftMenuLinkItem 
        title='Home'
        to='/'
        icon={<HomeIcon />}
      />
      <LeftMenuLinkItem 
        title='Pages'
        to='/pages'
        icon={<PagesIcon />}
      />
      <LeftMenuLinkItem 
        title='Subpages'
        to='/subpages'
        icon={<SubpagesIcon />}
      />
      <LeftMenuLinkItem 
        title='Images'
        to='/images'
        icon={<ImagesIcon />}
      />
      <LeftMenuLinkItem 
        title='PDF Files'
        to='pdf_files'
        icon={<PDFIcon />}
      />
    </LeftMenuContainer>
  )
}

export default LeftMenu