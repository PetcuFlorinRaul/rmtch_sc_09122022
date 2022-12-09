

function HomePageTopBar(props: ComponentChildrenProps) {
  return (
    <div
        className='flex items-center
                  bg-white
                  w-full
                  p-4
                  border-b-[1px] border-black/30
                  mb-8'
    >
        {props.children}
    </div>
  )
}

export default HomePageTopBar