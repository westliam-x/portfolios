import Image from "next/image";
import avatar from "../public/avatar.png"
function About(){
    return(
    <div className="relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96" >
       <Image src={avatar} layout="fill" objectFit="cover" />
    </div>
       
    );
}
export default About;
