import RoGuv from '../../SVGComponents/ROGuv.png'

function TopNavBarROLogo() {
  return (
    <a  
        href='https://gov.ro/ro/'
        className='flex flex-col items-center
                  ml-8'
    >
        <div
            className='flex items-center justify-center
                      w-16 h-16 mt-[2px]'
        >
            <img 
                src={RoGuv}
                alt=''
            />
        </div>
        <p
            className='text-sm font-medium text-[#0e47cb]
                      '
        >
            GUVERNUL ROMANIEI
        </p>
    </a>
  )
}

export default TopNavBarROLogo