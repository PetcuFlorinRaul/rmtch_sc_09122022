

function LeftMenuContainer(props: ComponentChildrenProps) {
  return (
    <div
      className='w-[250px] h-full
                border-r-[1px]
                border-black/30
                flex flex-col items-center
                pt-3'
    >
        {props.children}
    </div>
  )
}

export default LeftMenuContainer