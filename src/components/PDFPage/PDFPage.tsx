import React from 'react'
import { Outlet } from 'react-router-dom'
import PDFPageContainer from './PDFPageComponents/PDFPageContainer'

function PDFPage() {
  return (
    <PDFPageContainer>
        <Outlet />
    </PDFPageContainer>
  )
}

export default PDFPage