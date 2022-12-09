import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CreatePagePlusIcon from './CreatePagePlusIcon'

function CreatePageButton() {
  return (
    <motion.div
        whileTap={{
            scale: 0.97
        }}
        className='ml-auto'
    >
        <Link
            to={'create_page'}
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
                Create new page
            </p>
        </Link>
    </motion.div>
  )
}

export default CreatePageButton