import { FaReact, FaNodeJs } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { MdOutlineDownloading } from "react-icons/md";
import resume from "../assets/pushparaj_k_resume.pdf"


const HeroSection = () => {
    return (
        <section className="relative text-center text-white flex flex-col justify-center items-center m-0 md:m-auto gap-14 md:gap-14 p-4 md:p-0 h-screen-minus-80 z-40 md:h-[calc(100vh-92px)] overflow-auto scrollbar-hidden">
            <div className="relative flex flex-col gap-3 md:gap-6 w-full px-10">
                <h2 className="text-3xl md:text-5xl font-medium relative z-10 flex justify-start items-center gap-4">
                    <span className="font-thin text-4xl md:text-6xl tracking-widest animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}> &#x2774; </span>
                    <span className="tracking-widest animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
                        Creative &amp;
                    </span>
                </h2>
                <h2 className="text-3xl md:text-5xl font-medium relative z-10 flex justify-center md:justify-start items-center gap-4 tracking-widest">
                    <FaReact className="text-red-600 text-3xl md:text-5xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }} />
                    <FaNodeJs className="text-red-600 text-3xl md:text-5xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "0.8s" }} />
                    <SiExpress className="text-red-600 text-3xl md:text-5xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "1.0s" }} />
                    <SiMongodb className="text-red-600 text-3xl md:text-5xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "1.2s" }} />
                    <span className="tracking-widest animate__animated animate__fadeInUp" style={{ animationDelay: "1.4s" }}>
                        Experienced
                    </span>
                </h2>
                <h2 className="text-3xl md:text-5xl font-medium relative z-10 flex flex-col md:flex-row justify-center items-center gap-3 tracking-widest">
                    <span className="flex animate__animated animate__fadeInUp" style={{ animationDelay: "1.6s" }}>
                        MERN Stack
                    </span>
                    <span className="flex gap-2 ml-auto md:ml-0 animate__animated animate__fadeInUp" style={{ animationDelay: "1.8s" }}>
                        Developer
                        <RiTailwindCssFill className="text-red-600 text-3xl md:text-5xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "2.0s" }} />
                        <span className="font-thin text-4xl md:text-6xl md:hidden"> &#x2775; </span>
                    </span>
                    <span className="font-thin text-4xl md:text-6xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "2.2s" }}>
                        &#x2775;
                    </span>
                </h2>
            </div>

            <div className='flex gap-4 md:hidden'>
                <FaReact className="text-red-600 text-3xl animate__animated animate__fadeInUp" style={{ animationDelay: "2.4s" }} />
                <FaNodeJs className="text-red-600 text-3xl animate__animated animate__fadeInUp" style={{ animationDelay: "2.6s" }} />
                <SiExpress className="text-red-600 text-3xl animate__animated animate__fadeInUp" style={{ animationDelay: "2.8s" }} />
                <SiMongodb className="text-red-600 text-3xl animate__animated animate__fadeInUp" style={{ animationDelay: "3.0s" }} />
                <RiTailwindCssFill className="text-red-600 text-3xl animate__animated animate__fadeInUp" style={{ animationDelay: "3.2s" }} />
            </div>
            <p className="relative z-10 text-base md:text-lg px-10 animate__animated animate__fadeInUp" style={{ animationDelay: "3.4s" }}>Coding with the spirit of 'Pushpa, Pushpa Raj' 💥—never backing down, always innovating</p>
            
            {/* Download Resume Button */}
            <a href={resume} download className="bg-red-500 hover:bg-red-700 text-white text-xs py-1 px-4 rounded-full shadow-lg transition duration-300 ease-in-out animate__animated animate__fadeInUp flex gap-3 items-center ml-auto" style={{ animationDelay: "3.6s" }}>
               <MdOutlineDownloading /> Download Resume
            </a>
        </section>
    );
};

export default HeroSection;
