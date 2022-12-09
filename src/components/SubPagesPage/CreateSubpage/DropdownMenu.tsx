import {useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import useFetchDataOnce from '../../../hooks/useFetchDataOnce'


function DropdownMenu(
    props: {
        selectPageFunction: React.Dispatch<React.SetStateAction<SelectedPage>>
    }
) {

    const {data: pagesData} = useFetchDataOnce('http://localhost:5000/pages/get_pages_with_subpages')
    
  return (
    <motion.div
                initial={{
                  top: 30,
                  opacity: 0
                }}
                animate={{
                  top: 36,
                  opacity: 1
                }}
                exit={{
                  top: 20,
                  opacity: 0
                }}
                transition={{
                  duration: 0.1
                }}
                className='p-2
                          w-full
                          absolute
                          bg-slate-200
                          top-[36px]
                          left-0
                          z-10
                          rounded-md
                          rounded-tl-none rounded-tr-none'
              >
               {
                (pagesData !== undefined || null) && pagesData.map((page: any) => (
                    <div
                        onClick={() => props.selectPageFunction({
                            pageId: page.pageId,
                            pageName: page.pageName
                        })}
                        className='p-2
                                  bg-slate-300/0 hover:bg-slate-300
                                  mb-2
                                  rounded-md
                                  transition-colors duration-200 ease-out
                                  cursor-pointer'
                    >
                        {page.pageName}
                    </div>
                ))
               }
              </motion.div>
  )
}

export default DropdownMenu