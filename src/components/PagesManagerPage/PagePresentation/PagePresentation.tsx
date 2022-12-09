import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import moment from 'moment'
import { useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react'

import DeletePageIcon from '../PageManagerHomePage/DeletePageIcon';
import EditPageIcon from '../PageManagerHomePage/EditPageIcon';
import PagePresentationContainer from './PagePresentationContainer'

function PagePresentation() {
    
    const [deletePagePlaceHolder, setDeletePagePlaceholder] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    const [pageLoad, setPageLoad] = useState<boolean>(false);

    const navigate = useNavigate();

    const {pageID} = useParams()

    const truePageID = Number(pageID!)

    const [pageData, setPageData] = useState<any>();

    async function getPageData(url: string, pageID: number) {

        setPageLoad(true);

        axios.get(
            url,
            {
                params: {
                    pageID: pageID
                }
            }
        ).then((res: any) => {
            return res
        })
        .then((res) => {
            console.log(res.data)
            setPageData(res.data)
            setPageLoad(false)
        })
        .catch((err) => {
            console.log(err)
            setPageLoad(false)
        })
        
      }
    
    async function deletePage(url: string) {
        setLoading(true)
        await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                pageID: truePageID
            })
        })
        .then((res) => {
            return res
        })
        .then((result) => {
            console.log(result)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    function deletePageConfirmationPlaceholder() {
        setDeletePagePlaceholder(true);
    }

    useEffect(() => {

        async function fetchData() {
            await getPageData('http://localhost:5000/pages/find_page', Number(pageID))
        }
    
        fetchData();
    
      }, [])

    return (
        <PagePresentationContainer>
            {
                pageLoad ? "Loading" : pageData && (
                    <div
                        className='float-left
                                bg-white
                                p-4 mr-8 mb-8
                                rounded-xl
                                shadow-md
                                w-full h-full max-h-full
                                flex flex-col'
                    >
                        <div
                            className='flex items-center
                                    mb-8'
                        >
                            <p
                                className='text-xl font-bold'
                            >
                                {pageData.pageName}
                            </p>
                            <motion.div
                                whileTap={{
                                    scale: 0.96
                                }}
                                onClick={() => {
                                    navigate(`/edit_page/${truePageID}`)
                                }}
                                className='flex items-center justify-center
                                        w-8 h-8
                                        bg-blue-600 hover:bg-blue-600/80
                                        cursor-pointer
                                        ml-auto mr-2
                                        rounded-md
                                        transition-colors duration-200 ease-out'
                            >
                                <EditPageIcon />
                            </motion.div>
                            <motion.div
                                onClick={() => {
                                    deletePageConfirmationPlaceholder()
                                }}
                                whileTap={{
                                    scale: 0.96
                                }}
                                className='flex items-center justify-center
                                        w-8 h-8
                                        bg-red-600 hover:bg-red-600/80
                                        cursor-pointer
                                        rounded-md
                                        transition-colors duration-200 ease-out'
                            >
                                <DeletePageIcon />
                            </motion.div>
                        </div>
                        <p>
                        <div
                            className='flex items-center w-full mb-2'
                        >
                            <p>
                                Created at:&nbsp;&nbsp;&nbsp;
                            </p>
                            <span className='font-medium'>{moment(pageData.created_at).format('D MMM YYYY, HH:mm')}</span>
                        </div>
                        <div
                            className='flex items-center w-full mb-2'
                        >
                            <p>
                                Updated at:&nbsp;
                            </p>
                            <span className='font-medium'>{moment(pageData.updated_at).format('D MMM YYYY, HH:mm')}</span>
                        </div>
                        </p>
                        <p
                            className='font-medium'
                        >
                            Preview:
                        </p>
                        <div
                            className='flex flex-col
                                    w-full
                                    min-h-[600px]
                                    overflow-y-scroll
                                    border-[1px] border-black/70'
                        >
                            {parse(pageData.pageContent)}
                        </div>
                        {
                            deletePagePlaceHolder && (
                                <div
                                    className='absolute
                                            w-full h-full
                                            bg-black/40
                                            top-0
                                            left-0
                                            flex items-center justify-center'
                                >
                                    <div
                                        className='bg-white
                                                p-4
                                                rounded-md
                                                flex flex-col items-center'
                                    >
                                        <p>
                                            Are you sure you want to delete this page: <span className='font-semibold'>{pageData.pageName}</span>?
                                        </p>
                                        <div
                                            className='mt-4
                                                    w-full 
                                                    flex items-center'
                                        >
                                            <motion.div
                                                whileTap={{
                                                    scale: 0.96
                                                }}
                                                onClick={() => setDeletePagePlaceholder(false)}
                                                className='p-2 pt-1 pb-1
                                                        flex items-center justify-center
                                                        bg-blue-600 hover:bg-blue-600/80
                                                        text-white
                                                        rounded-md
                                                        cursor-pointer
                                                        transition-colors duration-200 ease-out'
                                            >
                                                Cancel
                                            </motion.div>
                                            <motion.div
                                                whileTap={{
                                                    scale: 0.96
                                                }}
                                                onClick={() => {
                                                    deletePage('http://localhost:5000/pages/delete_page')
                                                }}
                                                className='p-2 pt-1 pb-1
                                                        flex items-center justify-center
                                                        bg-red-600 hover:bg-red-600/80
                                                        text-white
                                                        rounded-md
                                                        ml-auto
                                                        cursor-pointer
                                                        transition-colors duration-200 ease-out'
                                            >
                                                {loading ? "Loading..." : "Delete"}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </PagePresentationContainer>
    )
}

export default PagePresentation