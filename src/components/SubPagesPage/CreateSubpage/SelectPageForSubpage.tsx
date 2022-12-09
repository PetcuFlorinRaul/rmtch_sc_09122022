import {motion, AnimatePresence} from 'framer-motion'
import {createRef, useState} from 'react'
import useFetchDataOnce from '../../../hooks/useFetchDataOnce';
import DownArrow from '../../SVGComponents/DownArrow';



function SelectPageForSubpage(
    props: {
        selectPageFunction: React.Dispatch<React.SetStateAction<SelectedPage>>,
        selectedPage: SelectedPage
    }
) {

    const buttonRef = createRef<HTMLDivElement>();

    const [dropdownState, setDropdownState] = useState<boolean>(false);

    const downArrowAngle = dropdownState ? 180 : 0

    const {data: pagesData} = useFetchDataOnce('http://localhost:5000/pages/get_pages_with_subpages')

  return (
    <>
    <div
          className='flex mt-4 items-center'
        >
          <p>
            Select the page that will hold the subpages (page must have subpages enabled):
          </p>
        </div>
        <div
          className='w-full 
                    p-2
                    bg-slate-200
                    rounded-md
                    flex items-center
                    relative'
        >
          {props.selectedPage.pageName ? props.selectedPage.pageName : <p>Select a page...</p>}
          <motion.div
            animate={{
              rotate: downArrowAngle
            }}
            className='ml-auto'
          >
            <DownArrow />
          </motion.div>
          <div className='absolute w-full h-full bg-slate-300/0 hover:bg-white/20
                           left-0 top-0
                           rounded-md
                           cursor-pointer
                           transition-colors duration-200 ease-out' 
                onClick={() => setDropdownState(!dropdownState)}
          />
          <AnimatePresence>
          {
            dropdownState && (
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
                            onClick={() => {
                                props.selectPageFunction({
                                    pageId: page.id,
                                    pageName: page.pageName
                                })
                                setDropdownState(false)
                            }}
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
          </AnimatePresence>
        </div></>
  )
}

export default SelectPageForSubpage