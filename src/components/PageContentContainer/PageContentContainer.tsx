import { motion } from 'framer-motion';

function PageContentContainer(props: ComponentChildrenProps) {
  return (
    <motion.div   
      initial={{
        opacity: 0
      }} 
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.4
      }}
      className='flex flex-col
                w-full h-full
                font-montserrat'
    >
        {props.children}
    </motion.div>
  )
}

export default PageContentContainer