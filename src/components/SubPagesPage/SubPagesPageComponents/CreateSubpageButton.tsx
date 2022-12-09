import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CreatePagePlusIcon from '../../PagesManagerPage/PageManagerHomePage/CreatePagePlusIcon'

function CreateSubpageButton() {
  return (
    <motion.div
        whileTap={{
            scale: 0.97
        }}
        className='ml-auto'
    >
        <Link
            to={'create_subpage'}
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
                Create new subpage
            </p>
        </Link>
    </motion.div>
  )
}

export default CreateSubpageButton