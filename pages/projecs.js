import Image from "next/image";
import crypto from '../public/crypto.png';
import housing from '../public/housing.png';
import html from '../public/html-project.png';
import codeGenerator from '../public/codeGenerator.png';
import react from '../public/React.png';
import shoe from '../public/shoe.png';
function Portfolio(){
    return(
    <div>
        <div >
        <h3 className=" lg:text-4xl text-3xl py-4 text-center"> <b>Projects I am proud of</b> </h3>
        <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
            These are just a few finished projects that I built from scratch with
             <span className="text-teal-500"> beautiful UI designs, </span>
             and a simple layout for easy navigation,
            <span className="text-teal-500"> elegant code </span>
           for easy maintainance and reusability, meeting the requirements of clients.
        </p>
        
       </div>
       <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        
        <div className=" basis-1/3 flex-1">
            <Image src={html} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"} 
                layout="responsive"
            />

        </div>
        
        <div className=" basis-1/3 flex-1">
            <Image src={crypto} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"} 
                layout="responsive"
            />

        </div>
        
        <div className=" basis-1/3 flex-1">
            <Image src={housing} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"} 
                layout="responsive"
            />

        </div>
        
        <div className=" basis-1/3 flex-1">
            <Image src={codeGenerator} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"} 
                layout="responsive"
            />

        </div>
        
        <div className=" basis-1/3 flex-1">
            <Image src={react} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"} 
                layout="responsive"
            />
        </div>

        <div className=" basis-1/3 flex-1">
            <Image src={shoe} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"} 
                layout="responsive"
            />
        </div>
       </div>
    </div>
    );
}
export default Portfolio;