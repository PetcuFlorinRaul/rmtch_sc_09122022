import axios from 'axios'
import {useEffect} from 'react'
import useFetchData from '../../../hooks/useFetchData'
import PDFImageForPage from '../../SVGComponents/PDFImageForPage'

function PDFSContainer(props: {
    triggerRefresh: boolean
}) {

    function deletePDF(pdfID: number) {
        axios({
          method: "POST",
          url: "http://192.168.100.5:5000/pdfs/delete_pdf",
          data: {
            pdfID: pdfID
          }
        })
        .then(() => {
          refreshData()
        })
      }
    
      const {data, loading, getData} = useFetchData()
    
      function refreshData() {
          getData('http://localhost:5000/pdfs/get_pdfs')
      }
      
      useEffect(() => {
    
          getData('http://localhost:5000/pdfs/get_pdfs')
    
      }, [])
    
      useEffect(() => {
    
          if(props.triggerRefresh === true) {
            refreshData()
            console.log(data)
          }
    
      }, [props.triggerRefresh])

  return (
    <div
        className="w-full 
                flex-1
                overflow-y-auto
                p-4
                inline-block"
    >
        {
            data && data.map((pdf: any) => (
                <div
                    className='flex items-center
                              bg-white
                              rounded-md
                              p-4
                              float-left
                              mt-4 ml-4
                              flex-col'
                >
                    <div
                        className='w-full h-full flex items-center'
                    >
                        <div>
                            <PDFImageForPage />
                        </div>
                        <div
                            className='ml-2'
                        >
                            <p
                                
                            >
                                <span className='font-semibold'>PDF name:</span> {pdf.pdfName}
                            </p>
                            <p className='mt-2'>
                                <span className='font-semibold'>PDF link:</span> <a target={"_blank"} href={pdf.pdfLink}>{pdf.pdfLink}</a>
                            </p>
                            <p className='mt-2'>
                                <span className='font-semibold'>PDF size:</span> {pdf.pdfSize}
                            </p>
                        </div>
                    </div>
                    <div
                        className='w-full flex mt-4'
                    >
                        <div
                            className='bg-red-700 p-2 pt-1 pb-1
                                      rounded-md
                                      text-white
                                      cursor-pointer
                                      ml-auto'
                            onClick={() => deletePDF(pdf.id)}
                        >
                            Delete
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default PDFSContainer