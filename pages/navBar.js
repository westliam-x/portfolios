import {BsFillMoonStarsFill} from 'react-icons/bs';
function Nav(){
   
    return(
       <div className=' py-10 mb-6 flex justify-between'>
         <h1 className=' text-xl font-burtons'>Westliam</h1>
         <ul className=' flex items-center'>
            <li>
                <BsFillMoonStarsFill className=' cursor-pointer text-xl'/>
                </li>
            <li>
                <a className=' bg-blue-700 text-white px-4 py-2 rounded-md ml-8' href="/westliam resume.png" download> 
  
                    Resume
                    </a>
                    </li>
         </ul>
       </div>
    );
}
export default Nav;