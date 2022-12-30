import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';

function Intro(){
    return(
    <div className=' py-6 mb-12 '>
        <div className=' text-center px-2 py-10'>
        <h2 className=' text-2xl py-2 text-teal-500 font-medium md:text-6xl'>William Emelifonwu</h2>
         <h3 className=' text-2xl py-2 md:text-3xl'>Frontend Developer</h3> 
         <p className=' text-base py-5 leading-8 text-gray-800  max-w-1xl mx-auto dark:text-white'>
            I create, design and develop the frontend of websites and web applications.
         Currently a freelancer, learning how to improve my skills anyway possible
         </p>
        </div>
        <div className=' text-5xl justify-center gap-16 text-gray-600 flex'>
            {/* <a className=' hover:text-blue-800' href="https://twitter.com/Westliam_x"><AiFillTwitterCircle/></a> */}
            <a className=' hover:text-teal-500'  href="https://www.linkedin.com/in/william-emelifonwu-27a7b51bb"><AiFillLinkedin size={30}/></a>
            <a className=' hover:text-teal-500'  href="https://github.com/westliam-x"> <AiFillGithub size={30}/></a>
            <a className=' hover:text-teal-500'  href="mailto:emelifonwuw@gmail.com"> <AiFillMail size={30}/></a>
        </div>
    </div>
       
    );
}
export default Intro;