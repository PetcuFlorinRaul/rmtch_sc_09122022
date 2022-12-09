import JoditEditor from 'jodit-react';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { AnimatePresence, motion } from 'framer-motion';
import ErrorIcon from '../../SVGComponents/ErrorIcon';
import { useNavigate } from 'react-router-dom';

interface BodyData {
  pageContent: string;
  pageName: string;
  subpagesEnabled: boolean;
}

interface SubmitErrors {
  value?: string;
  pageName?: string;
  subpagesEnabled?: string;
}

function PageManagerCreatePage() {

  const navigate = useNavigate();

  const [value, setValue] = useState<string>("");

  const [pageTitle, setPageTitle] = useState<string>("");

  const [subpagesState, setSubPagesState] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [errorsObject, setErrorsObject] = useState<SubmitErrors>({});

  async function uploadPage(url: string, data: BodyData) {

    setLoading(true);

    await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      setTimeout(() => {
        setLoading(false)
        console.log(res)
        navigate('/pages')
      }, 500);
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })

  } 

  async function createPage(pageName: string, value: string, subpagesState: boolean) {

    let errors: SubmitErrors = {};

    if(pageName.trim() === "") {
      errors.pageName = "Page name must be provided"
    }
    if(value.trim() === "") {
      errors.value = "Page content must be provided"
    }
    if(typeof(subpagesState) !== "boolean") {
      errors.subpagesEnabled = "Subpages option must be true or false"
    }

    if(Object.keys(errors).length > 0) {
      setErrorsObject(errors);
    }
    else {

      setErrorsObject({})

      await uploadPage('http://localhost:5000/pages/create_page', {
        pageName: pageTitle,
        pageContent: value,
        subpagesEnabled: subpagesState
      })
    }
  }

  useEffect(() => {
    console.log(errorsObject)
  },[errorsObject])

  return (
    <div
      className='w-full h-[calc(100vh-97px)]
                flex
                bg-slate-200
                p-4'
    >
      <div
        className='flex flex-col
                  w-[48%]
                  bg-white
                  p-4
                  rounded-xl
                  shadow-md
                  overflow-y-auto'
      >
        <div
          className='flex'
        >
          <p
            className='mr-2'
          >
            Page name:
          </p>
          <input 
            className='outline-none
                      flex-1
                      border-b-[1px] border-black'
            value={pageTitle}
            onChange={(e) => {
              setPageTitle(e.target.value)
            }}
          />
        </div>
          <div
            className='mt-2
                      flex items-center
                      h-8 min-h-8 max-h-8'
          > 
            <AnimatePresence mode='wait'>
              {errorsObject.pageName && (
                <motion.div
                  initial={{
                    left: -10,
                    opacity: 0
                  }}
                  animate={{
                    left: 0,
                    opacity: 1
                  }}
                  exit={{
                    left: -10,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                  className='flex items-center relative'
                >
                  <div
                    className='flex items-center justify-center
                              w-6 h-6'
                  >
                    <ErrorIcon />
                  </div>
                  <p className='text-red-600 text-sm ml-2'>{errorsObject.pageName}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        <div
          className='flex mt-4 items-center'
        >
          <p>
            Subpages:
          </p>
          <div
            onClick={() => setSubPagesState(!subpagesState)}
            className={`w-12
                      p-[2px]
                      flex
                      ml-2
                      ${!subpagesState ? 'bg-red-400' : 'bg-green-400'}
                      rounded-full
                      border-[2px] border-gray-200
                      cursor-pointer`}
          >
            <div 
              className={`w-4 h-4 rounded-full bg-slate-100
                        relative
                        ${!subpagesState ? 'left-0' : 'left-[calc(100%-16px)]'}
                        transition-all duration-200`}
            />
          </div>
        </div>
        <div
          className='mt-4 w-full h-full
                    overflow-y-auto
                    border-[2px] border-black/40
                    rounded-md'
        >
          <JoditEditor 
            value={value}
            onChange={(content) => setValue(content)}
          />
        </div>
        <div
          className='w-full
                    flex items-center
                    mt-auto
                    p-2 pt-4'
        >
          {errorsObject.value && (
                <motion.div
                  initial={{
                    left: -10,
                    opacity: 0
                  }}
                  animate={{
                    left: 0,
                    opacity: 1
                  }}
                  exit={{
                    left: -10,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                  className='flex items-center relative'
                >
                  <div
                    className='flex items-center justify-center
                              w-6 h-6'
                  >
                    <ErrorIcon />
                  </div>
                  <p className='text-red-600 text-sm ml-2'>{errorsObject.value}</p>
                </motion.div>
              )}
          <motion.div
            whileTap={{
              scale: 0.95
            }}
            onClick={() => createPage(pageTitle, value, subpagesState)}
            className='p-2
                      flex items-center justify-center
                      text-white
                      ml-auto
                      bg-blue-500 hover:bg-blue-600/90
                      rounded-md
                      transition-colors duration-200 ease-out
                      cursor-pointer
                      h-[40px] w-[114px]'
          >
            {
              loading ? <p>Loading...</p> : <p>Create Page</p>
            }
          </motion.div>
        </div>
      </div>
      <div
        className='flex flex-col
                  w-[50%]
                  bg-white
                  p-4
                  ml-auto
                  rounded-xl
                  shadow-md
                  overflow-y-auto'
      >
        <div
          className='flex flex-col'
        >
          <div
            className='flex items-center justify-center
                      w-fit
                      p-2 
                      pl-4 pr-4
                      bg-slate-200
                      rounded-tl-md rounded-tr-md'
          >
            <p
              className='text-xl font-medium'
            >
              Ramtech
            </p>
          </div>
          <div
            className='bg-slate-200
                      p-4
                      rounded-tr-xl'
          >
            <div
              className='p-2
                        bg-white
                        rounded-full'
            >
              <p>
                http://www.ramtech.uaic.ro/<span className='text-red-600'>{pageTitle.toLowerCase().replaceAll(' ', '_')}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className='w-full h-full
                    flex flex-col
                    border-[1px]
                    rounded-b-xl
                    p-4
                    overflow-y-auto'
        > 
          <AnimatePresence mode='wait'>
            {
              subpagesState && (
                <div
                  className='flex flex-col
                            mb-8'
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      top: -20
                    }}
                    animate={{
                      opacity: 1,
                      top: 0
                    }}
                    exit={{
                      opacity: 0,
                      top: -20
                    }}
                    className='flex justify-center
                              text-xl font-semibold
                              mb-4'
                  >
                    {pageTitle}
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      top: -20
                    }}
                    animate={{
                      opacity: 1,
                      top: 0
                    }}
                    exit={{
                      opacity: 0,
                      top: -20
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2
                    }}
                    className='flex items-center justify-around relative'
                  >
                    <div
                      className='p-[6px]
                                border-[2px] border-blue-500
                                rounded-md
                                text-blue-700 hover:text-white
                                hover:bg-blue-500
                                cursor-pointer'
                    >
                      Subpage
                    </div>
                    <div
                      className='p-[6px]
                                border-[2px] border-blue-500
                                rounded-md
                                text-blue-700 hover:text-white
                                hover:bg-blue-500
                                cursor-pointer'
                    >
                      Subpage
                    </div>
                    <div
                      className='p-[6px]
                                border-[2px] border-blue-500
                                rounded-md
                                text-blue-700 hover:text-white
                                hover:bg-blue-500
                                cursor-pointer'
                    >
                      Subpage
                    </div>
                    <div
                      className='p-[6px]
                                border-[2px] border-blue-500
                                rounded-md
                                text-blue-700 hover:text-white
                                hover:bg-blue-500
                                cursor-pointer'
                    >
                      Subpage
                    </div>
                  </motion.div>
                </div>
              )
            }
          </AnimatePresence>
          {parse(value)}
        </div>
      </div>
    </div>
  )
}

export default PageManagerCreatePage