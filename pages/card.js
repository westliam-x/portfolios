
import {HiOutlineDocumentText} from 'react-icons/hi';
import {MdDesignServices} from 'react-icons/md'
import {BsCodeSlash} from 'react-icons/bs'
import file from '../public/file.ico'

function Card(){
    return(
    <div className="lg:flex gap-16">
        <div className=" text-center dark:shadow-slate-400 shadow-md transition-shadow p-10 rounded-xl my-10  dark:text-white">
        <div >
       {/* <Image src={design} width="100%" className=" m-auto" /> */}
       {/* <FontAwesomeIcon icon="fa-solid fa-pen-ruler" /> */}
       {/* <div className=' lg:ml-32'>
       <MdDesignServices size={70} />
       </div> */}
       
       <h3 className=" text-lg font-medium pt-8 pb-2">Exquisite UI Designs</h3>
       <p className="py-2">Creating beautiful UI designs to satisfy your needs and the needs of your clients</p>
        <h4 className="text-teal-500 py-4">Design tools I use:</h4>
        <div className='flex  m-1 items-center space-x-6 justify-center'>
        <p className="text-grey-800 py-1"> Canva </p>
        <p className="text-grey-800 py-1"> Figma </p>
        </div>
        
        <p className="text-grey-800 py-1">Paint 3D</p>
    </div>
    </div>


<div className=" text-center dark:shadow-slate-400 shadow-md transition-shadow p-10 rounded-xl my-10  dark:text-white">
        <div >
       {/* <Image src={code} width="100%" className=" m-auto  dark: text-white" /> */}
{/*        
       <BsCodeSlash  className=' lg:ml-32' size={70}/> */}
       <h3 className=" text-lg font-medium pt-8 pb-2">Elegant Code</h3>
       <p className="py-2">You have an idea for your next web project? I can make it a reality </p>
        <h4 className="text-teal-500 py-4">Coding tools I use:</h4>

       <p className="text-grey-800 py-1">HTML,CSS, React Js</p>
        <p className="text-grey-800 py-1"> Wordpress, Bootstrap</p>
       
    </div>
    </div>

    <div className=" text-center dark:shadow-slate-400 shadow-md transition-shadow p-10 rounded-xl my-10  dark:text-white">
        <div >
       {/* <Image src={file}  width="40%" className="dark:text-white m-auto"  /> */}
       {/* <HiOutlineDocumentText  className=' lg:ml-32' size={70} /> */}
       <h3 className=" text-lg font-medium pt-8 pb-2">Professional Documentation</h3>
       <p className="py-2">I can help with your next big project, collaborating and helping you with your documentation</p>
        <h4 className="text-teal-500 py-4">Documents I handle:</h4>
      
       <p className="text-grey-800 py-1">Requirement Document</p>
        <p className="text-grey-800 py-1">Terms and condition</p>
        <p className="text-grey-800 py-1">Proposal document</p>
      
    </div>
    </div>
    
    </div>
       
    );
}
export default Card;