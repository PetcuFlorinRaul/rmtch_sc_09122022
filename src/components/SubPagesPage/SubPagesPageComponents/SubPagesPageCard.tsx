import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import moment from 'moment'
import { useEffect, useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom'

import DeletePageIcon from '../../PagesManagerPage/PageManagerHomePage/DeletePageIcon';
import EditPageIcon from '../../PagesManagerPage/PageManagerHomePage/EditPageIcon';


function SubPagesPageCard(
    props: {
        subpage: any;
        refreshFunction: Function;
    }
) {

    const [deleteSubPagePlaceHolder, setDeleteSubPagePlaceholder] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    
    
    async function deleteSubPage(url: string) {
        setLoading(true)
        await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                subpageID: props.subpage.id
            })
        })
        .then((res) => {
            return res
        })
        .then((result) => {
            console.log(result)
            setTimeout(() => {
                setLoading(false)
                props.refreshFunction()
            }, 1000);
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
            throw new Error(err)
        })
    }

    function deleteSubPageConfirmationPlaceholder() {
        setDeleteSubPagePlaceholder(true);
    }

    return (
        <div
            className='float-left
                    bg-white
                    p-4 mr-8 mb-8
                    rounded-xl
                    shadow-md
                    w-[760px] max-w-[760px] h-[800px] min-h-[800px]
                    flex flex-col'
        >
            <div
                className='flex items-center
                        mb-8'
            >
                <p
                    className='text-xl font-bold'
                >
                    {props.subpage.subPageName}
                </p>
                <motion.div
                    whileTap={{
                        scale: 0.96
                    }}
                    onClick={() => {
                        navigate(`/edit_subpage/${props.subpage.id}`)
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
                        deleteSubPageConfirmationPlaceholder()
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
            <div
                className='flex items-center
                          mb-2'
            >
                <p>
                    Subpage for:&nbsp;
                    <Link 
                        to={`/pages/${props.subpage.page.id}`} 
                        className='font-medium
                                  text-black hover:text-black/70
                                  transition-colors duration-200 ease-out'
                    >
                        {props.subpage.page.pageName}
                    </Link>
                </p>
            </div>
            <p>
                <div
                    className='flex items-center w-full mb-2'
                >
                    <p>
                        Created at:&nbsp;&nbsp;&nbsp;
                    </p>
                    <span className='font-medium'>{moment(props.subpage.created_at).format('D MMM YYYY, HH:m')}</span>
                </div>
                <div
                    className='flex items-center w-full mb-2'
                >
                    <p>
                        Updated at:&nbsp;
                    </p>
                    <span className='font-medium'>{moment(props.subpage.updated_at).format('D MMM YYYY, HH:m')}</span>
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
                {parse(props.subpage.subPageContent)}
            </div>
            {
                deleteSubPagePlaceHolder && (
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
                                Are you sure you want to delete this page: <span className='font-semibold'>{props.subpage.subPageName}</span>?
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
                                    onClick={() => setDeleteSubPagePlaceholder(false)}
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
                                        deleteSubPage('http://localhost:5000/subpages/delete_subpage')
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

export default SubPagesPageCard