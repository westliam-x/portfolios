import Image from "next/image";
import crypto from '../public/crypto.png';
import farm from '../public/farm.png';
import maykolly from '../public/maykolly-redesigned.png';
import codeGenerator from '../public/codeGenerator.png';
import commerce from '../public/tailindCommerce.png';
import Fylo from '../public/Fylo.png'
import abel from '../public/abel-tee.png'
import adoption from '../public/adopt.png'
import ecomm from '../public/ecomm.png'
import crms from '../public/crms.png'
import housing2 from '../public/housing.png'
function Portfolio(){
    return(
    <div>
        <div >
        <h3 className=" lg:text-4xl text-3xl py-4 text-center"> <b>Projects I am proud of</b> </h3>
        <p className="text-md py-2 leading-8 text-gray-800  dark:text-white text-center">
            These are just a few finished projects that I built from scratch with
             <span className="text-teal-500"> beautiful UI designs, </span>
             and a simple layout for easy navigation,
            <span className="text-teal-500"> elegant code </span>
           for easy maintainance and reusability, meeting the requirements of clients.
        </p>
        
       </div>
       <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        
        
        <a href = "https://ailanthushospitalityservices.com.ng/"target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={housing2} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a>
        
        
        
        <a href = "https://pet-westliam-x.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={adoption} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a>
       
      
       
         {/* <a href = "http://westliam-projects.buzz/southernview/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={codeGenerator} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
         </a> */}

  <a href = "https://ailanthusfarmproducts.com.ng/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={farm} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a>
{/* 
<a href = "https://ecommerce-landing-page-6oan.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={commerce} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a>
        
                        
        <a href = "http://westliam-projects.buzz/queensplastic/" target="_blank" rel="noopener noreferrer">                 
            <div className=" basis-1/3 flex-1">
                <Image src={ecomm} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a> */}

        {/* <a href="http://westliam-projects.buzz/crms/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={crms} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a>             */}
        
       <a href = "https://westliam-x.github.io/crypto-landing-page/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">     
                <Image src={crypto} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a>


        {/* <a href="https://westliam-x.github.io/maykolly-restaurant/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={maykolly} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a> */}

        <a href="https://westliam-x.github.io/abel-tee/" target="_blank" rel="noopener noreferrer">
            <div className=" basis-1/3 flex-1">
                <Image src={abel} 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    layout="responsive"
                />
            </div>
        </a>
                        
                        
       </div>
    </div>
    );
}
export default Portfolio;
