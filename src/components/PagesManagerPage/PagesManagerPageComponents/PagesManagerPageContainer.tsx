
function PagesManagerPageContainer(props: ComponentChildrenProps) {
  return (
    <div
        className='w-full h-[calc(100vh-90px)]
                  flex flex-col'
    >
        {props.children}
    </div>
  )
}

export default PagesManagerPageContainer