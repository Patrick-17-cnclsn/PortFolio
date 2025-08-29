"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const baseImages =[
    {src: "/assets/udemy.png", alt: "udemy"},
    {src: "/assets/logitech.png", alt: "logitech"},
    {src: "/assets/elementor.png", alt: "elementor"},
    {src: "/assets/oracle.png", alt: "oracle"},
    {src: "/assets/fiverr.png", alt: "fiverr"},
    {src: "/assets/udemy.png", alt: "udemy"},
    {src: "/assets/logitech.png", alt: "logitech"},
    {src: "/assets/elementor.png", alt: "elementor"},
    {src: "/assets/oracle.png", alt: "oracle"},
    {src: "/assets/fiverr.png", alt: "fiverr"},
]

const images = [...baseImages, ...baseImages];

export const LogoAnimation = () => {
    return (
        <div className="bg-black  py-4 glassmorphism ">
            <div className="container mx-auto">
                <div className="overflow-hidden bg-black">
                    <motion.div
                        className="flex flex-none gap-8 pr-14  "
                        animate={{
                            translateX: '-50%',

                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear',
                        }}
                    >
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                width={100}
                                height={30}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>

    );
}