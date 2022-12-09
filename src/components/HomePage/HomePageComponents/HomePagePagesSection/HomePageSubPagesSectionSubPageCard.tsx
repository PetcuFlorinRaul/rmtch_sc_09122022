import moment from 'moment';
import { Link } from 'react-router-dom';
import ToRigthArrow from '../../../SVGComponents/ToRigthArrow';

function HomePageSubPagesSectionSubPageCard(props: {
    subpageName: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    pageName: string;
}) {

  return (
    <div
        className='p-4
                  bg-slate-100/50 hover:bg-slate-200/80
                  shadow-md
                  rounded-md
                  mr-4
                  min-w-fit
                  transition-colors duration-200 ease-out'
    >
        <div
            className='flex flex-col w-full'
        >
            <div
                className='flex items-center w-full mb-2'
            >
                <p>
                    Title:&nbsp; 
                </p>
                <span className='font-medium ml-auto'>{props.subpageName}</span>
            </div>
            <div
                className='flex items-center w-full mb-2'
            >
                <p>
                    Created at:&nbsp;
                </p>
                <span className='font-medium ml-auto'>{moment(props.createdAt).format('D MMM YYYY, HH:m')}</span>
            </div>
            <div
                className='flex items-center w-full mb-2'
            >
                <p>
                    Updated at:&nbsp;&nbsp;&nbsp;
                </p>
                <span className='font-medium ml-auto'>{moment(props.updatedAt).format('D MMM YYYY, HH:m')}</span>
            </div>
            <div
                className='flex items-center w-full mb-2'
            >
                <p>
                    Page:&nbsp;&nbsp;&nbsp;
                </p>
                <span className='font-medium ml-auto'>{props.pageName}</span>
            </div>
            <Link
                to={`/subpages/${props.id}`}
                className="mt-4 
                          w-fit
                          flex items-center
                          hover:opacity-70
                          transition-opacity duration-200 ease-out"
            >
                <p
                    className='font-medium'
                >
                    View sub page
                </p> 
                <div
                    className='w-5 h-5
                              flex items-center justify-center'           
                >
                    <ToRigthArrow />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default HomePageSubPagesSectionSubPageCard