import UELogo from '../../SVGComponents/UELogo'

function TopNavBarUELogo() {
  return (
    <a
        href='https://european-union.europa.eu/'
        className='flex flex-col items-center
                  ml-8  p-2 max-h-[96px]'
    >
        <div
            className='w-24 h-24 max-h-[96px]
                      flex items-center justify-center'
        >
            <UELogo/>
        </div>
        <p
            className='
                      text-sm font-medium text-[#0e47cb]'
        >
            UNIUNEA EUROPEANĂ
        </p>
    </a>
  )
}

export default TopNavBarUELogo;