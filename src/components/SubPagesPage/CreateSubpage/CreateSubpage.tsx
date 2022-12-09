import JoditEditor from 'jodit-react';
import { useEffect, useState, createRef } from 'react';
import parse from 'html-react-parser';
import { AnimatePresence, motion } from 'framer-motion';
import ErrorIcon from '../../SVGComponents/ErrorIcon';
import { useNavigate } from 'react-router-dom';
import SelectPageForSubpage from './SelectPageForSubpage';

interface BodyData {
  subpageContent: string;
  subpageName: string;
  pageID: number;
}

interface SubmitErrors {
  value?: string;
  pageName?: string;
  id?: string;
}



function CreateSubpage() {

  const navigate = useNavigate();

  const [value, setValue] = useState<string>("");

  const [subpageTitle, setSubpageTitle] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [errorsObject, setErrorsObject] = useState<SubmitErrors>({});

  const [selectedPage, setSelectedPage] = useState<SelectedPage>({});


  async function uploadSubPage(url: string, data: BodyData) {

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
        navigate('/subpages')
      }, 500);
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })

  } 

  async function createPage(pageName: string, value: string, pageID: number | undefined) {

    let errors: SubmitErrors = {};

    if(pageName.trim() === "") {
      errors.pageName = "Subage name must be provided"
    }
    if(value.trim() === "") {
      errors.value = "Subpage content must be provided"
    }
    if(pageID === undefined) {
      errors.id = "Subpage must have a page selected for"
    }

    if(Object.keys(errors).length > 0) {
      setErrorsObject(errors);
    }
    else {

      setErrorsObject({})

      console.log({
        subpageName: subpageTitle,
        subpageContent: value,
        pageID: selectedPage.pageId!
      })

      await uploadSubPage('http://localhost:5000/subpages/create_subpage', {
        subpageName: subpageTitle,
        subpageContent: value,
        pageID: selectedPage.pageId!
      })
    }
  }

  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage])

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
            Subpage name:
          </p>
          <input 
            className='outline-none
                      flex-1
                      border-b-[1px] border-black'
            value={subpageTitle}
            onChange={(e) => {
              setSubpageTitle(e.target.value)
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
        <SelectPageForSubpage 
          selectPageFunction={setSelectedPage}
          selectedPage={selectedPage}
        />
        <AnimatePresence mode='wait'>
              {errorsObject.id && (
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
                  <p className='text-red-600 text-sm ml-2'>{errorsObject.id}</p>
                </motion.div>
              )}
            </AnimatePresence>
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
            onClick={() => createPage(subpageTitle, value, selectedPage.pageId)}
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
                http://www.ramtech.uaic.ro/{(selectedPage !== undefined && selectedPage.pageName !== undefined) ? selectedPage.pageName.toLocaleLowerCase().replaceAll(" ", "_") + "/": ""}<span className='text-red-600'>{subpageTitle.toLowerCase().replaceAll(' ', '_')}</span>
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
          {parse(value)}
        </div>
      </div>
    </div>
  )
}

export default CreateSubpage