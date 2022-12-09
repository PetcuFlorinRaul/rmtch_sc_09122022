import axios from 'axios';
import { useEffect, useState } from 'react'
import RefreshIcon from '../../SVGComponents/RefreshIcon';
import UploadIcon from '../../SVGComponents/UploadIcon';
import ImagesContainer from './ImagesContainer';
import ImagesPageHomePageTopBar from './ImagesPageHomePageTopBar'
import UploadImageButton from './UploadImageButton'

function ImagesPageHomepage() {

  const [uploadImageMenu, setUploadImageMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)

  const [trigger_refresh, setTriggerRefresh] = useState<boolean>(false);

  //image processing
  const imageInputState = '';

  const [imagePreviewSource, setImagePreviewSource] = useState<string>('');
  const [imageName, setImageName] = useState<string>("");
  const [imageNameError, setImageNameError] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  function previewImage(file: File) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          setImagePreviewSource(reader.result! as string);
      }
      setImageFile(file);
  };

  function handleImageInputChange(e: any) {
      const file = e.target.files[0];
      previewImage(file);
  };

  function cancelImageInput() {
    setImagePreviewSource('');
    setUploadImageMenu(false);
    setImageName('');
    setImageNameError(false);
    setImagePreviewSource('')
  };

  async function upload_image_request() {

    const formData = new FormData()
    formData.append("image", imageFile!);

    setLoading(true);
    setTriggerRefresh(false)


    axios.post("http://localhost:5000/images/upload_image", formData).then(() => {
      setImageFile(null)
      setUploadImageMenu(false)
      setLoading(false)
      setImagePreviewSource('')
      setTriggerRefresh(true)
      // setTriggerRefresh(false)
    })

  }

  function uploadImage() {
    upload_image_request()
  };
  

  return (
    <div
        className='w-full h-[calc(100vh-90px)]
                  bg-slate-200
                  flex flex-col'
    >
      <ImagesPageHomePageTopBar>
        <div
            className="flex flex-col"
        >
            <p
                className="text-2xl font-bold"
            >
                Images
            </p>
            <p>
                Here you can upload, categorize and delete images
            </p>
        </div>
        <UploadImageButton 
          onClick={setUploadImageMenu}
        />
        {
          uploadImageMenu && (
            <div
              className='absolute
                        bg-black/40
                        w-full h-full
                        flex items-center justify-center
                        top-0 left-0'
            >
              <div
                className='p-4
                          bg-white
                          rounded-md
                          min-w-[700px] max-w-[700px]
                          flex flex-col'   
              >
                <p
                  className='text-2xl'
                >
                  Upload a new image
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
                      imagePreviewSource ? (
                        <div
                          className='flex group'
                        >
                          <RefreshIcon />
                          <p
                            className='ml-2'
                          >
                            Choose another image
                          </p>
                        </div>
                      ) : 
                      (<div
                        className='flex group'
                      >
                        <UploadIcon />
                        <p
                          className='ml-2'
                        >
                          Select an image
                        </p>
                      </div>)
                    }
                  </label>
                  <input 
                    type="file" 
                    className='ml-2 mr-auto hidden'
                    id='upload-file'
                    value={imageInputState} 
                    onChange={(e) => handleImageInputChange(e)}
                  />
                </div>
                
                <div
                  className='w-full h-full 
                            flex items-center justify-center
                            mt-4'
                >
                  {
                    imagePreviewSource && (
                      <img 
                        className='max-h-[50vh]'
                        src={imagePreviewSource} 
                        alt="" 
                      />
                    )
                  }
                </div>
                <div
                  className={`w-full 
                            flex items-center
                            ${imagePreviewSource && "border-t-[1px] border-black/40"}
                            mt-4
                            pt-4`}
                >
                  <div
                    className={`flex items-center justify-center
                              p-2
                              ${imagePreviewSource ? "bg-green-500" : "bg-green-500/60"}
                              ${imagePreviewSource ? "hover:bg-green-600" : "bg-green-500/60"}
                              ${imagePreviewSource ? "cursor-pointer" : "cursor-default"}
                              rounded-md
                              text-white
                              transition-colors duration-200 ease-out
                              ml-auto`}
                    onClick={() => uploadImage()}
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
                    onClick={() => cancelImageInput()}
                  >
                    Cancel
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </ImagesPageHomePageTopBar>
      <ImagesContainer 
        triggerRefresh={trigger_refresh}
      />
    </div>
  )
}

export default ImagesPageHomepage