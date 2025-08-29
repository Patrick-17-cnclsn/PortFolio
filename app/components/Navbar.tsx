"use client"

import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Services", path: "#services" },
    { title: "Contact", path: "#contact" },
    { title: "Stack", path: "#stack" },

]


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className=" z-50 fixed flex  justify-center w-full text-white font-bold">

            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
                           hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                <ul className="flex flex-row p-2 space-x-4">
                    {navLinks.map((link, index) => (
                        <li key={index} className="transform  hover:text-white/50 transition-all duration-300 ease-in-out">
                            <Link href={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div onClick={toggleMenu} className="md:hidden absolute
            top-5 right-14 rounded z-50 text-white/50 border-white/70 p-2" >

                {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>

            <div>
                {isOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                        <div className="bg-black/70 p-4 rounded-lg">
                            <ul className="flex flex-col items-center space-y-4">
                                {navLinks.map((link, index) => (
                                    <li key={index} className="transform hover:text-white/50 transition-all duration-300 ease-in-out">
                                        <Link href={link.path} onClick={closeMenu}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

        </div>

    )
}