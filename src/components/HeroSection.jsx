import { FaReact, FaNodeJs } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import transparentStar from '../assets/transparentStar.png';
import bardlogo from '../assets/bardlogo.png';


const HeroSection = () => {
    return (
        <section className="relative text-center bg-black text-white flex flex-col justify-center items-center m-0 md:m-auto gap-20 md:gap-28 p-4 md:p-0 h-screen-minus-80">
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
                        <RiTailwindCssFill className="text-red-600 text-3xl md:text-5xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "2.0s" }}/>
                        <span className="font-thin text-4xl md:text-6xl md:hidden"> &#x2775; </span>
                    </span>
                    <span className="font-thin text-4xl md:text-6xl hidden md:flex animate__animated animate__fadeInUp" style={{ animationDelay: "2.2s" }}>
                        &#x2775;
                    </span>
                </h2>
            </div>


            <div className='flex gap-4 md:hidden'>
                <FaReact className="text-red-600 text-3xl animate__animated animate__fadeInUp"  style={{ animationDelay: "2.4s" }}/>
                <FaNodeJs className="text-red-600 text-3xl animate__animated animate__fadeInUp"  style={{ animationDelay: "2.6s" }}/>
                <SiExpress className="text-red-600 text-3xl animate__animated animate__fadeInUp"  style={{ animationDelay: "2.8s" }}/>
                <SiMongodb className="text-red-600 text-3xl animate__animated animate__fadeInUp"  style={{ animationDelay: "3.0s" }}/>
                <RiTailwindCssFill className="text-red-600 text-3xl animate__animated animate__fadeInUp" style={{ animationDelay: "3.2s" }}/>
            </div>
            <p className="relative z-10 text-base md:text-lg px-10 animate__animated animate__fadeInUp" style={{ animationDelay: "3.4s" }}>Hello! I'm an experienced web developer specialized in Angular and JavaScript based in Australia</p>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-40 blur-3xl absolute -left-20 md:-left-80 -top-24 md:-top-48"></div>
                <div className="w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-40 blur-3xl absolute -right-16 md:-right-80 -bottom-10 md:-bottom-20"></div>
            </div>
            <img src={transparentStar} className="fixed top-24 right-36 h-5 w-5" alt="star icon 1" />
            <img src={bardlogo} className="fixed bottom-24 left-36 h-8 w-8" alt="star icon 2" />
        </section>
    );
};

export default HeroSection;
