import Image from "next/image";
import crypto from '../public/crypto.png';
import housing from '../public/housing.png';
import html from '../public/html-project.png';
import codeGenerator from '../public/codeGenerator.png';
function Card(){
    return(
    <div className="lg:flex gap-10">
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-200  dark: text-gray-800">
        <div >
       <Image src={html} width="100%" />
       <h3 className=" text-lg font-medium pt-8 pb-2">Exquisite UI Designs</h3>
       <p className="py-2">Creating beautiful UI designs to satisfy your needs and the needs of your clients</p>
        <h4 className="text-teal-600 py-4">Design tools I use:</h4>
        <p className="text-grey-800 py-1">Canva</p>
        <p className="text-grey-800 py-1">Figma</p>
        <p className="text-grey-800 py-1">Paint 3D</p>
    </div>
    </div>
    <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark: bg-slate-200 dark: text-gray-800">
        <div >
       <Image src={housing} width="100%" />
       <h3 className=" text-lg font-medium pt-8 pb-2">Elegant Code</h3>
       <p className="py-2">You have an idea for your next web project? I can make it a reality </p>
        <h4 className="text-teal-600 py-4">Coding tools I use:</h4>
        <p className="text-grey-800 py-1">React Js, Node Js</p>
        <p className="text-grey-800 py-1">HTML,CSS, PHP, MySQL</p>
        <p className="text-grey-800 py-1"> Wordpress, Bootstrap</p>
    </div>
    </div>
    <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-200 dark: text-gray-800">
        <div >
       <Image src={codeGenerator} width="100%" />
       <h3 className=" text-lg font-medium pt-8 pb-2">Professional Documentation</h3>
       <p className="py-2">I can help with your next big project, collaborating and helping you with your documentation</p>
        <h4 className="text-teal-600 py-4">Documents I hanle:</h4>
        <p className="text-grey-800 py-1">Reqirement Document</p>
        <p className="text-grey-800 py-1">Terms and condition</p>
        <p className="text-grey-800 py-1">Proposal document</p>
    </div>
    </div>
    
    </div>
       
    );
}
export default Card;