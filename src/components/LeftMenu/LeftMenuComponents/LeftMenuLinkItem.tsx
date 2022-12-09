import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LeftMenuLinkItem(props: {
    title: string;
    to: string;
    icon?: JSX.Element
}) {
  return (
    <motion.div
        whileTap={{
            scale: 0.97
        }}
        className='flex items-center
                  w-11/12
                  hover:bg-slate-200
                  rounded-md
                  transition-colors duration-200 ease-out
                  mb-2'
    >   
        <div
            className='w-6 h-6
                      flex items-center justify-center
                      ml-2'
        >
            {props.icon}
        </div>
        <Link
            to={props.to}
            className='w-full h-full
                      p-2
                      font-medium'
        >
            {props.title}
        </Link>
    </motion.div>
  )
}

export default LeftMenuLinkItem