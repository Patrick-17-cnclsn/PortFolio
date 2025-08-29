"use client"

import { motion } from "framer-motion"

export const Contact = () => {
    return (

        <section id="contact" className="text-white min-h-screen  py-12  bg-gradient-to-r from-purple-950/30 to-blue-950 shelter shadow-lg ">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4  rounded-2xl shadow-lg "
            >
                <div className="space-y-8 grid-cols-2 mx-auto ">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-7xl font-bold text-white"
                    >
                        Get in <span className="text-blue-950">Touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="p-4 rounded-2xl space-y-4"
                    >
                        <div className="space-y-2" >
                            <p className="text-lg text-gray-300" >Phone</p>
                            <a
                                href="tel:+2348033333333"
                                className="text-xl font-semibold hover:text-gray-200 transition duration-300  items-center gap-1"
                            >
                                +33 0743597358
                            </a>
                        </div>

                        <div className="space-y-2" >
                            <p className="text-lg text-gray-300">Email</p>
                            <a
                                href="mailto:johan@doe.com"
                                className="text-xl font-semibold hover:text-gray-200 transition duration-300 items-center gap-1 "
                            >
                                offoumoupatrick0@gmail.com
                            </a>
                        </div>

                        <div className="space-y-2" >
                            <p className="text-lg text-gray-300">Office</p>
                            <address className="text-xl not-italic leading-relaxed">
                                37 Rue Paul Lafargue, <br/>France<br/> 93380 Saint-Denis
                            </address>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.0763031669235!2d2.3691435124081734!3d48.97107189265009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6697c1eca7e91%3A0x67aa29de7dec3ef4!2s37%20Rue%20Paul%20Lafargue%2C%2093380%20Saint-Denis!5e0!3m2!1sfr!2sfr!4v1756322478130!5m2!1sfr!2sfr"
                                width="auto"
                                height="auto"
                                style={{ border: 0 , borderRadius: "20px"}}
                                title="Google Maps"
                                loading="lazy"
                            >
                            </iframe>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}