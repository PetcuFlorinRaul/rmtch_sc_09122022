import axios from "axios"
import {useEffect, useState} from 'react'
import useFetchData from "../../../hooks/useFetchData"

function ImagesContainer(props: {
  triggerRefresh: boolean
}) {

  function deleteImage(imageID: number) {
    axios({
      method: "POST",
      url: "http://192.168.100.5:5000/images/delete_image",
      data: {
        imageID: imageID
      }
    })
    .then(() => {
      refreshData()
    })
  }

  const {data, loading, getData} = useFetchData()

  function refreshData() {
      getData('http://localhost:5000/images/get_images')
  }
  
  useEffect(() => {

      getData('http://localhost:5000/images/get_images')

  }, [])

  useEffect(() => {

      if(props.triggerRefresh === true) {
        refreshData()
        console.log(data)
      }

  }, [props.triggerRefresh])
  

  return (
    <div
      className="w-full 
                flex-1
                overflow-y-auto
                p-4
                inline-block"
    >
      {
        data && data.map((image: any) => (
          <div
            className="w-[500px] p-4 rounded-md bg-white float-left mr-8 mt-8"
          >
            <div
              className="w-full
                        flex
                        items-center
                        justify-center
                        border-[1px] border-black
                        min-h-[300px]"
            >
              <a target="_blank"
                href={image.imageLink}>
              <img className="max-h-[300px]" src={image.imageLink} />
              </a>
            </div>
            <div>
              <p className="mt-4 font-semibold">
                Image name: 
              </p>
              <p>
                {image.imageName}
              </p>
              <p className="mt-4 font-semibold"> 
                Image link:
              </p>
              <a
                target="_blank"
                href={image.imageLink}
                className=""
              >
                {image.imageLink}
              </a>
            </div>
            <div
              className="w-full flex mt-4"
            >
              <div
                className="p-4 pt-1 pb-1
                          bg-red-700 hover:bg-red-600
                          text-white
                          rounded-md
                          cursor-pointer"
                onClick={() => deleteImage(image.id)}
              >
                Delete
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ImagesContainer