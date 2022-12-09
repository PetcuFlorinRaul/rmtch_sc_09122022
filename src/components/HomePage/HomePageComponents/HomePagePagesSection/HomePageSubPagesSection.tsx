import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


import HomePagePagesSectionContainer from './HomePagePagesSectionContainer'
import HomePagePagesSectionPagesContainer from './HomePagePagesSectionPagesContainer'
import useFetchData from '../../../../hooks/useFetchData';
import HomePagePagesSectionPageCard from './HomePagePagesSectionPageCard';
import GoToPageArrow from './GoToPageArrow';
import RefreshIcon from '../../../SVGComponents/RefreshIcon';
import HomePageSubPagesSectionSubPagesContainer from './HomePageSubPagesSectionSubPagesContainer';
import HomePageSubPagesSectionContainer from './HomePageSubPagesSectionContainer';
import HomePageSubPagesSectionSubPageCard from './HomePageSubPagesSectionSubPageCard';

function HomePageSubPagesSection() {

    const {data, loading, getData} = useFetchData()

    function refreshData() {
        getData('http://localhost:5000/subpages/get_subpages')
    }
    
    useEffect(() => {

        getData('http://localhost:5000/subpages/get_subpages')

    }, [])

    useEffect(() => {

        console.log(data)

    }, [data])

    return (
        <HomePageSubPagesSectionContainer>
            <div
                className='flex items-center mb-4 w-full'
            >
                <p
                    className='font-medium text-lg'
                >
                    Sub pages
                </p>
                <motion.div
                    whileTap={{
                        scale: 0.90
                    }}
                    onClick={() => refreshData()}
                    className='flex items-center justify-center
                              w-7 h-7
                              ml-3
                              p-1
                              rounded-md
                              hover:bg-slate-300/70
                              cursor-pointer
                              transition-colors duration-200 ease-out'   
                >
                    <RefreshIcon />
                </motion.div>
                <Link 
                    to={'/subpages'}
                    className='font-medium 
                              flex items-center
                              ml-auto
                              hover:opacity-60
                              transition-opacity duration-200 ease-out'
                >
                    Go to sub pages
                    <div>
                        <GoToPageArrow />
                    </div>
                </Link>
            </div>
            <HomePageSubPagesSectionSubPagesContainer>
                {
                    loading && (<p>Loading...</p>)
                }
                {
                    (data && !loading) && data.length > 0 ? data.map((subpage: any) => (
                        <HomePageSubPagesSectionSubPageCard 
                            subpageName={subpage.subPageName}
                            id={subpage.id}
                            createdAt={subpage.created_at}
                            updatedAt={subpage.updated_at}
                            pageName={subpage.page.pageName}
                        />
                    )) : (
                        <>
                            {
                                !loading && (<p>
                                                No pages created yet
                                            </p>)
                            }
                        </>
                    )
                }
            </HomePageSubPagesSectionSubPagesContainer>
        </HomePageSubPagesSectionContainer>
    )
}

export default HomePageSubPagesSection