import { FaReact, FaNodeJs } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const HeroSection = ({ profileImage }) => {
    return (
        <section className="relative text-center bg-black text-white flex flex-col justify-center items-center m-0 md:m-auto gap-20 md:gap-28 p-4 md:p-0 h-screen-minus-80">
            <div className="relative flex flex-col gap-3 md:gap-6 w-full">
                <h2 className="text-3xl md:text-5xl font-medium relative z-10 flex justify-start items-center gap-4">
                    <span className="font-thin text-4xl md:text-6xl tracking-widest"> &#x2774; </span>
                    <span className="tracking-widest">Creative &amp;</span>
                </h2>
                <h2 className="text-3xl md:text-5xl font-medium relative z-10 flex justify-center md:justify-start items-center gap-4 tracking-widest">
                    <FaReact className="text-red-600 text-3xl md:text-5xl hidden md:flex" />
                    <FaNodeJs className="text-red-600 text-3xl md:text-5xl hidden md:flex" />
                    <SiExpress className="text-red-600 text-3xl md:text-5xl hidden md:flex" />
                    <SiMongodb className="text-red-600 text-3xl md:text-5xl hidden md:flex" />
                    Experienced
                </h2>
                <h2 className="text-3xl md:text-5xl font-medium relative z-10 flex flex-col md:flex-row justify-center items-center gap-3 tracking-widest">
                    <span className='flex'>MERN Stack</span> <span className='flex gap-2 ml-auto md:ml-0'>Developer <RiTailwindCssFill className="text-red-600 text-3xl md:text-5xl hidden md:flex"/><span className='font-thin text-4xl md:text-6xl md:hidden'> &#x2775; </span></span>
                    <span className='font-thin text-4xl md:text-6xl hidden md:flex'> &#x2775; </span>
                </h2>
            </div>
            <div className='flex gap-4 md:hidden'>
                <FaReact className="text-red-600 text-3xl" />
                <FaNodeJs className="text-red-600 text-3xl" />
                <SiExpress className="text-red-600 text-3xl" />
                <SiMongodb className="text-red-600 text-3xl" />
                <RiTailwindCssFill className="text-red-600 text-3xl"/>
            </div>
            <p className="relative z-10 text-base md:text-lg">Hello! I'm an experienced web developer specialized in Angular and JavaScript based in Australia</p>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-40 blur-3xl absolute -left-20 md:-left-80 -top-24 md:-top-48"></div>
                <div className="w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-40 blur-3xl absolute -right-16 md:-right-80 -bottom-10 md:-bottom-20"></div>
            </div>
            <img src="../src/assets/transparentStar.png" className="fixed top-24 right-36 h-5 w-5" alt="star icon 1" />
            <img src="../src/assets/bardlogo.png" className="fixed bottom-24 left-36 h-8 w-8" alt="star icon 2" />
        </section>
    );
};

export default HeroSection;
