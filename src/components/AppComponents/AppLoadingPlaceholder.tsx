import {motion} from 'framer-motion';
import AnimatedLoadingSVG from '../SVGComponents/AnimatedLoadingSVG';
import AnimatedLogoForIntro from '../SVGComponents/AnimatedLogoForIntro'
import RDLogo from '../SVGComponents/RDLogo';
import { useState } from 'react'

function AppLoadingPlaceholder() {

    const [loading, setLoading] = useState<boolean>(false)

    setTimeout(() => {
        setLoading(true)
    }, 2500);
    
    return (
        <motion.div
            className='w-full h-full
                    flex flex-col items-center justify-center'
            initial={{
                opacity: 1 
            }}
            exit={{
                opacity: 0
            }}
        >
            <div
                className='w-[600px] h-[112px]
                        flex
                        mt-20'
            >
                <motion.div
                    initial={{
                        marginLeft: 244
                    }}
                    animate={{
                        marginLeft: 0
                    }}
                    transition={{
                        delay: 1.85,
                        duration: 0.3,
                        ease: "easeOut"
                    }}
                    className='w-28 h-28
                            flex flex-col items-center justify-center'       
                >
                    <AnimatedLogoForIntro />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        left: -30
                    }}
                    animate={{
                        opacity: 1,
                        left: 0
                    }}
                    transition={{
                        delay: 2.1,
                        ease: "easeOut"
                    }}
                    className='relative'
                >
                    <p
                        className='font-kanit text-6xl font-semibold
                                ml-4'
                    >
                        RAMTECH
                    </p>
                    <p
                        className='text-[#42A9EA] text-lg font-medium
                                ml-4 mt-2'
                    >
                        Research Center on Advanced Materials & Technologies
                    </p>
                </motion.div>
            </div>
            <div
                className='flex flex-col items-center
                        mt-24 h-[80px]'
            >
                {
                    loading && (
                        <>
                            {/* <motion.p  
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                className='font-medium'
                            >
                                Loading the app
                            </motion.p> */}
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                className='w-16 h-16 max-h-[56px]
                                        flex items-center justify-center'
                            >
                                <AnimatedLoadingSVG />
                            </motion.div>
                        </>
                    )
                }
            </div>
            <div
                className='absolute
                        bottom-0
                        flex items-center'           
            >
                <p
                    className='text-lg font-medium
                            mr-2'
                >
                    Powered by 
                </p>
                <div
                    className='flex items-center justify-center
                            w-10 h-10'
                >
                    <RDLogo />
                </div>
            </div>
        </motion.div>
    )
}

export default AppLoadingPlaceholder