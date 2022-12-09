import axios from 'axios';
import React, { useState } from 'react'
import PDFIcon from '../../SVGComponents/PDFIcon';
import PDFImageForPage from '../../SVGComponents/PDFImageForPage';
import RefreshIcon from '../../SVGComponents/RefreshIcon';
import UploadIcon from '../../SVGComponents/UploadIcon';
import PDFHomePageTopBar from './PDFHomePageTopBar'
import PDFPageContainer from './PDFPageContainer';
import PDFSContainer from './PDFSContainer';
import PDFUploadButton from './PDFUploadButton'

function PDFHomePage() {

    const [loading, setLoading] = useState<boolean>(false)
    const [uploadPDFMenu, setUploadPDFMenu] = useState<boolean>(false);
    const [trigger_refresh, setTriggerRefresh] = useState<boolean>(false);


    //PDF File processing

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    function fileHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files![0];
        setSelectedFile(file)
    }
    
    function uploadPDF() {
        const formData = new FormData()
        formData.append("pdf", selectedFile!);
        setLoading(true);
        setTriggerRefresh(false)
        axios.post("http://localhost:5000/pdfs/upload_pdf", formData).then(() => {
            setSelectedFile(null)
            setLoading(false)
            setTriggerRefresh(true)
            setUploadPDFMenu(false)
        })
    }

    function cancelPDF() {
        setSelectedFile(null);
        setUploadPDFMenu(false);
    }

  return (
    <div
        className='w-full h-[calc(100vh-90px)]
                  bg-slate-200'
    >
        <PDFHomePageTopBar>
            <div
                className="flex flex-col"
            >
                <p
                    className="text-2xl font-bold"
                >
                    PDF Files
                </p>
                <p>
                    Here you can upload, modify and delete PDF Files
                </p>
            </div>
            <PDFUploadButton 
                onClick={() => setUploadPDFMenu(true)}
            />
        </PDFHomePageTopBar>
        {
            uploadPDFMenu && (
                <div
                    className='absolute
                            w-full h-full
                            bg-black/40
                            top-0 left-0
                            flex items-center justify-center'
                >
                    <div
                        className='bg-white
                                p-4
                                rounded-md
                                flex flex-col
                                min-w-[400px]'
                    >
                        <div>
                            <p
                            className='text-2xl'
                            >
                                Upload a new PDF File
                            </p>
                            <div
                            className='flex items-center w-full
                                        mt-4'
                            >
                                <label
                                    className='
                                            p-2
                                            bg-blue-500 hover:bg-blue-600/90
                                            rounded-md
                                            text-white
                                            cursor-pointer
                                            flex items-center'
                                    htmlFor='upload-file'
                                >
                                    {
                                        (selectedFile !== null && selectedFile !== undefined) && (
                                            <div
                                                className='flex group'
                                            >
                                                <RefreshIcon />
                                                <p
                                                    className='ml-2'
                                                >
                                                    Choose other PDF File
                                                </p> 
                                            </div>  
                                        )
                                    }
                                    {
                                        (selectedFile === null || selectedFile === undefined) && (
                                            <div
                                                className='flex group'
                                            >
                                                <UploadIcon />
                                                <p
                                                    className='ml-2'
                                                >
                                                    Select a PDF File
                                                </p>
                                            </div>
                                        )
                                    }
                                </label>
                                <input 
                                    type="file" 
                                    className='ml-2 mr-auto hidden'
                                    id='upload-file'
                                    // value={imageInputState} 
                                    accept='application/pdf'
                                    onChange={(e) => fileHandler(e)}
                                />
                            </div>
                            <div
                                className='mt-4'
                            >
                                {
                                    selectedFile && (
                                        <div
                                            className='flex
                                                    border-[1px] border-black
                                                    rounded-md
                                                    p-2'
                                        >
                                            <div
                                                className='h-[72px] w-[72px]
                                                        flex items-center justify-center'
                                            >
                                                <PDFImageForPage />
                                            </div>
                                            <div>
                                                <p>
                                                    File name:&nbsp;
                                                    <span className='text-blue-700 font-semibold'>
                                                        {
                                                            selectedFile?.name
                                                        }
                                                    </span>
                                                </p>
                                                <p>
                                                    File type:&nbsp;
                                                    <span className='text-blue-700 font-semibold'>
                                                        {
                                                            selectedFile?.type.slice(12, selectedFile?.type.length).toUpperCase()
                                                        }
                                                    </span>
                                                </p>
                                                <p>
                                                    File size:&nbsp;
                                                    <span className='text-blue-700 font-semibold'>
                                                        {
                                                            (selectedFile?.size / (1024*1024)).toFixed(2) + " " + 'MB'
                                                        }
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    !selectedFile && (
                                        <div
                                            className='w-full h-[72px]
                                                    flex items-center justify-center
                                                    border-[1px] border-black
                                                    rounded-md'
                                        >
                                            <p>
                                                No file selected
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                            <div
                                className='flex items-center
                                        mt-4'
                            >
                                <div
                                    className={`flex items-center justify-center
                                            p-2
                                            ${selectedFile ? "bg-green-500" : "bg-green-500/60"}
                                            ${selectedFile ? "hover:bg-green-600" : "bg-green-500/60"}
                                            ${selectedFile ? "cursor-pointer" : "cursor-default"}
                                            rounded-md
                                            text-white
                                            transition-colors duration-200 ease-out
                                            ml-auto`}
                                    onClick={() => uploadPDF()}
                                >
                                    {loading ? "Loading..." : "Upload"}
                                </div>
                                <div
                                    className='flex items-center justify-center
                                            p-2
                                            bg-red-600 hover:bg-red-800
                                            rounded-md
                                            ml-2
                                            text-white
                                            cursor-pointer
                                            transition-colors duration-200 ease-out'
                                    onClick={() => cancelPDF()}
                                >
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        <PDFSContainer 
            triggerRefresh={trigger_refresh}
        />
    </div>
  )
}

export default PDFHomePage