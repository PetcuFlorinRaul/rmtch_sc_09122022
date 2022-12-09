import { motion } from 'framer-motion'
import CreatePagePlusIcon from '../../PagesManagerPage/PageManagerHomePage/CreatePagePlusIcon'


function PDFUploadButton(
    props: {
        onClick: React.Dispatch<React.SetStateAction<boolean>>
    }
) {
  return (
    <motion.div
            whileTap={{
                scale: 0.97
            }}
            className='ml-auto cursor-pointer'
            onClick={() => props.onClick(true)}
        >
            <div
                className='flex items-center
                        p-2
                        bg-blue-500 hover:bg-blue-600/90
                        rounded-md
                        transition-colors duration-200 ease-out'
            >
                <div
                    className='w-5 h-5
                            flex items-center justify-center'
                >
                    <CreatePagePlusIcon />
                </div>
                <p
                    className='text-white text-sm'
                >
                    Upload PDF File
                </p>
            </div>
        </motion.div>
  )
}

export default PDFUploadButton