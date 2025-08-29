"use client"

import React, {useEffect} from "react";
import {
    SiNodedotjs,
    SiPython,
    SiNextdotjs,
    SiTailwindcss,
    SiGit,
    SiJetbrains,
    SiReact,
    SiJavascript
}

from "react-icons/si"
import {motion, useAnimation } from "framer-motion"
import {useInView } from "react-intersection-observer";



const stackItems = [
    { id: 1, name: "React", icon: <SiReact size={100}/>, color: 'text-green-200'},
    { id: 2, name: "Node.js", icon: <SiNodedotjs size={100}/>, color: 'text-green-200'},
    { id: 3, name: "Python", icon: <SiPython size={100}/>, color: 'text-green-200'},
    { id: 4, name: "Next.js", icon: <SiNextdotjs size={100}/>, color: 'text-green-200'},
    { id: 5, name: "Tailwind", icon: <SiTailwindcss size={100}/>, color: 'text-green-200'},
    { id: 6, name: "Git", icon: <SiGit size={100}/>, color: 'text-green-200'},
    { id: 7, name: "JavaScript", icon: <SiJavascript size={100}/>, color: 'text-green-200'},
]

    const baseStack = {
        hidden: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? 100 : -100
        }),
        visible:{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            }
        },
    }

export const Stack = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    return (
        <section id="stack" className=" bg-gray-950 py-12  ">
            <div className="max-w-[250px] mx-auto text-center  " ref={ref}>
                <h2 className="text-7xl text-gray-200 font-bold mb-10">My Stack</h2>
                <div className="grid gap-8" >
                    {stackItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            initial="hidden"
                            animate={controls}
                            variants={baseStack}
                            className="bg-white/10 flex justify-center items-center flex-row rounded-xl shadow-lg p-4 hover:shadow-2xl"
                        >
                            <div className={`mb-4 ${item.color}`}>
                                {item.icon}
                                <p className="text-white/20 text-3xl transform roate-[-90deg]">{item.name}</p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}