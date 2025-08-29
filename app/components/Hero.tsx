"use client";
import { motion } from "framer-motion";

import Image from "next/image";


export const Hero = () => {
    return (
        <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#340F41_35%,#8C5DA4_55%,#242424_85%)]">
            <div className="absolute  bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2
                          bg-[radial-gradient(closest-side,#000_85%,#8E4AC5)] top-[450px] border-[1px] border-[#9E4AC5]/30 " />

            <div className="container relative mx-auto px-4 pt-12 pb-24 ">
                <div className="flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-8 mt-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-transparent rounded-full blur-3xl "></div>
                        <Image
                        src="/assets/profilepic.png"
                        alt="profile pic"
                        className="relative z-10 w-40 sm:w-48 md:w-[250px] h-auto"
                        width={250}
                        height={250}
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 250px"
                        priority
                        fetchPriority="high"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-6xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                            Hi, I am <br/> Johann <span className="text-blue-950"> OFFOUMOU </span>
                        </h1>
                        <p className="text-xl text-white/60  max-w-lg mx-auto leading-relaxed mb-6">
                            I am a joung fullstack devoloper focusing on creating websites, app that provides user with best experience
                        </p>

                        <div className="flex gap-4 justify-center" >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="bg-gradient-to-r from-purple-700/80 to-purple-500/60 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-200 transition-colors "
                            >
                                Contact Me
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className=" px-6 py-3 rounded-full border-purple-800 text-white font-semibold hover:bg-blue-200 transition-colors "
                            >
                                View Work
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
                <motion.div></motion.div>
            </div>
        </div>
    )
}