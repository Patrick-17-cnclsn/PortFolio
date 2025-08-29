
import { AiFillGithub, AiOutlineTwitter,  AiFillInstagram } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";




const socialsLinks = [
    { icon: <AiFillGithub/>, href: "https://github.com/Patrick-17-cnclsn"},
    { icon: <AiOutlineTwitter/>, url: "https://twitter.com/johan_patrick0" },
    { icon: <AiFillInstagram/>, url: "https://www.instagram.com/johan_patrick0/" },
    { icon: <SiLinkedin/>, url: "https://www.linkedin.com/in/johan-patrick0/" },
]


export const Footer = () => {
    return (
        <footer className="relative py-8 max-w-[1200px] mx-auto px-4 ">
            <div className="md:hidden absolute inset-0 overflow-hidden" >
                <div className="absolute top-[30%] left-1/4 w-[100px] h-[100px] bg-gray-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="absolute top-[16%] left-1/2 w-[150px] h-[70px] bg-gray-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="absolute top-[35%] left-2/3 w-[100px] h-[100px] bg-gray-400 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 "></div>
            </div>

            <div className="hidden md:block absolute inset-0 overflow-hidden" >
                <div className="absolute top-[30%] left-1/4 w-[00px] h-[200px] bg-gray-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="absolute top-[16%] left-1/2 w-[250px] h-[150px] bg-gray-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 "></div>
                <div className="absolute top-[35%] left-2/3 w-[100px] h-[100px] bg-gray-400 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 "></div>
            </div>

            <div className="  text-center  ">
                <h1 className="hidden md:block text-[10rem] md:text-[7rem] lg:text-[15rem] font-bold text-white/80 opacity-10" >
                    OFFOUMOU JOHANN
                </h1>
                <h1 className="sm:hidden text-6xl font-bold text-white/80 opacity-10" >
                    OFFOUMOU <br/> JOHANN
                </h1>

            </div>

            <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="text-white/60 text-sm" >
                    &copy; {new Date().getFullYear()} . All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap" >
                    { socialsLinks.map((link, index) => (
                        <li key={index} className="text-white/60 hover:text-white transition-colors" >
                            <a href={link.href} target="_blank" rel="noopener noreferrer" >
                                {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>

        </footer>
    )
}