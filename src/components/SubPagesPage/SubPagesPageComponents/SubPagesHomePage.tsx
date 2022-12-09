import {useEffect} from 'react'
import CreateSubpageButton from './CreateSubpageButton'
import SubpagesPageTopBar from './SubpagesPageTopBar'
import useFetchData from '../../../hooks/useFetchData';
import SubPagesPageCard from './SubPagesPageCard';
import AnimatedLoadingSVG from '../../SVGComponents/AnimatedLoadingSVG';

function SubPagesHomePage() {

    const {data, loading, getData} = useFetchData();

    function refreshData() {
        getData('http://localhost:5000/subpages/get_subpages')
    }

    useEffect(() => {
      
        getData('http://localhost:5000/subpages/get_subpages')

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
        <SubpagesPageTopBar>
            <div
                className="flex flex-col"
            >
                <p
                    className="text-2xl font-bold"
                >
                    Subpages
                </p>
                <p>
                    Here you can create, modify and delete subpages 
                </p>
            </div>
            <CreateSubpageButton />
        </SubpagesPageTopBar>
        {
            ((data && !loading) && data.length > 0) && (
                <div
                    className='w-full h-full max-h-full
                            overflow-y-auto
                            inline-block
                            pl-[64px] pt-10'
                >
                    {
                        (data && !loading) && data.map((subpage: any) => (
                            <SubPagesPageCard 
                                subpage={subpage}
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

export default SubPagesHomePage