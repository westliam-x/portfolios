import Image from "next/image";
import avatar from "../public/avatar.png"
import westliam2 from '../public/westliam2.png';
function About(){
    return(
    <div className="relative m-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-90 md:w-90" >
       <Image src={avatar} layout="fill" objectFit="cover" />
    </div>
       
    );
}
export default About;