import ISLogo from '../../SVGComponents/ISLogo.png'

function TopNavBarISLogo() {
  return (
    <a  
        href='https://www.fonduri-ue.ro/'
        className='flex flex-col items-center
                  ml-8'
    >
        <div
            className='flex items-center justify-center
                      w-16 h-16 mt-[2px]'
        >
            <img 
                src={ISLogo}
                alt=''
            />
        </div>
        <p
            className='text-sm font-medium text-[#0e47cb]
                      '
        >
            INSTRUMENTE STRCTURALE 2007-2013
        </p>
    </a>
  )
}

export default TopNavBarISLogo