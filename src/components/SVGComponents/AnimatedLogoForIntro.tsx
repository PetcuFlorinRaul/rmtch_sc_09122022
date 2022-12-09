import {motion} from 'framer-motion';

function AnimatedLogoForIntro() {
  return (
    <motion.svg width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
        {/* <motion.rect width="164" height="164" fill="#D9D9D9"/> */}
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} width="41" height="41" fill="#016738"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 1.05}} y="41" width="41" height="41" fill="#00BAB9"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.95}} y="82" width="41" height="41" fill="#2BAAE1"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.85}} y="123" width="41" height="41" fill="#0370BB"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.75}} x="41" y="123" width="41" height="41" fill="#858585"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.65}} x="82" y="123" width="41" height="41" fill="#858585"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.55}} x="123" y="123" width="41" height="41" fill="#F55C23"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.45}} x="123" y="82" width="41" height="41" fill="#ED1B24"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 1.35}} x="82" y="82" width="41" height="41" fill="#F8A434"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 1.45}} x="41" y="82" width="41" height="41" fill="#038839"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 1.15}} x="41" y="41" width="41" height="41" fill="#3DB64F"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 1.25}} x="82" y="41" width="41" height="41" fill="#D8E020"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.35}} x="123" y="41" width="41" height="41" fill="#C3272B"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.25}} x="123" width="41" height="41" fill="#662E91"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.15}} x="82" width="41" height="41" fill="#FBEF1D"/>
        <motion.rect initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1, delay: 0.1}} x="41" width="41" height="41" fill="#8AC742"/>
        <path d="M82.1327 28L164 164H0L82.1327 28Z" fill="white"/>
        <path d="M163.867 164L82 28V164H163.867Z" fill="url(#paint0_linear_0_1)"/>
        <defs>
            <linearGradient id="paint0_linear_0_1" x1="122.934" y1="28" x2="122.934" y2="164" gradientUnits="userSpaceOnUse">
                <stop stop-color="#898CA0"/>
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
            </linearGradient>
        </defs>
    </motion.svg>
  )
}

export default AnimatedLogoForIntro