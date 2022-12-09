import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


import HomePagePagesSectionContainer from './HomePagePagesSectionContainer'
import HomePagePagesSectionPagesContainer from './HomePagePagesSectionPagesContainer'
import useFetchData from '../../../../hooks/useFetchData';
import HomePagePagesSectionPageCard from './HomePagePagesSectionPageCard';
import GoToPageArrow from './GoToPageArrow';
import RefreshIcon from '../../../SVGComponents/RefreshIcon';

function HomePagePagesSection() {

    const {data, loading, getData} = useFetchData()

    function refreshData() {
        getData('http://localhost:5000/pages/get_pages')
    }
    
    useEffect(() => {

        getData('http://localhost:5000/pages/get_pages')

    }, [])

    useEffect(() => {

        console.log(data)

    }, [data])

    return (
        <HomePagePagesSectionContainer>
            <div
                className='flex items-center mb-4 w-full'
            >
                <p
                    className='font-medium text-lg'
                >
                    Pages
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
                    to={'/pages'}
                    className='font-medium 
                              flex items-center
                              ml-auto
                              hover:opacity-60
                              transition-opacity duration-200 ease-out'
                >
                    Go to pages
                    <div>
                        <GoToPageArrow />
                    </div>
                </Link>
            </div>
            <HomePagePagesSectionPagesContainer>
                {
                    loading && (<p>Loading...</p>)
                }
                {
                    (data && !loading) && data.length > 0 ? data.map((page: any) => (
                        <HomePagePagesSectionPageCard 
                            pageName={page.pageName}
                            id={page.id}
                            createdAt={page.created_at}
                            updatedAt={page.updated_at}
                            subpagesNumber={page.subPages.length}
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
            </HomePagePagesSectionPagesContainer>
        </HomePagePagesSectionContainer>
    )
}

export default HomePagePagesSection