import { useEffect } from 'react'

import useFetchData from "../../../hooks/useFetchData"
import AnimatedLoadingSVG from '../../SVGComponents/AnimatedLoadingSVG';
import CreatePageButton from "./CreatePageButton"
import PageManagerHomePageCard from './PageManagerHomePageCard';
import PageManagerHomePageTopBar from "./PageManagerHomePageTopBar"

function PageManagerHomePage() {

    const {data, loading, getData} = useFetchData();

    function refreshData() {
        getData('http://localhost:5000/pages/get_pages')
    }

    useEffect(() => {
      
        getData('http://localhost:5000/pages/get_pages')

    }, [])
    

    useEffect(() => {

        console.log(data)
        data && console.log(data.reverse())

    }, [data])

    return (
        <div
            className="w-full h-full max-h-full
                    bg-slate-200
                    flex flex-col"
        >
            <PageManagerHomePageTopBar>
                <div
                    className="flex flex-col"
                >
                    <p
                        className="text-2xl font-bold"
                    >
                        Pages
                    </p>
                    <p>
                        Here you can create, modify and delete pages
                    </p>
                </div>
                <CreatePageButton />
            </PageManagerHomePageTopBar>  
            {
                ((data && !loading) && data.length > 0) && (
                    <div
                        className='w-full h-full max-h-full
                                overflow-y-auto
                                inline-block
                                pl-[64px] pt-10'
                    >
                        {
                            (data && !loading) && data.map((page: any) => (
                                <PageManagerHomePageCard 
                                    page={page}
                                    refreshFunction={refreshData}
                                />
                            ))
                        }
                    </div>
                )
            }
            {
                ((data && !loading) && data.length < 1) && (
                    <div
                        className='w-full h-full max-h-full
                                  flex items-center justify-center'
                    >
                        <p>
                            No pages
                        </p>
                    </div>
                )
            }
            {
                loading && (
                    <div
                        className='w-full h-full max-h-full
                                  flex items-center justify-center'
                    >
                        <div
                            className='flex items-center justify-center
                                      w-24 h-24'
                        >
                            <AnimatedLoadingSVG />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PageManagerHomePage