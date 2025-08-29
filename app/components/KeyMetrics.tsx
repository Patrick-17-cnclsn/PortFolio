"use client"

import React from "react";
import { motion, useInView } from "framer-motion";

const baseMetrics = [
    {
        id: 1,
        value: '1+',
        label: 'Years of Experience',
        description: 'Dedicaded to the development of software solutions.',
    },
    {
        id: 2,
        value: '5+',
        label: 'Projects Completed',
        description: 'from small applications to large-scale systems.',
    },
    {
        id: 3,
        value: '7+',
        label: 'Technologies in continuous learning',
        description: 'Proficient in a wide range of technologies, including React, Next.js, Node.js, and more. Always eager to learn new technologies and stay updated with the latest trends in the industry.',
    },
    {
        id: 4,
        value: '89%',
        label: 'Code Quality',
        description: 'Code quality is measured by the number of bugs found in the code. Bugs are defined as errors that cause the code to behave in unexpected ways.',
    },
    {
        id: 5,
        value: '3+',
        label: 'Commits on GitHub',
        description: 'Actively contributing to open-source projects on GitHub is a great way to learn and grow in the tech community.',
    }

];

export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.section
          ref={ref}
          initial={{opacity: 0, y: 0}}
          animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 100}}
          transition={{duration: 0.8}}
          className=" mx-auto px-4 py-32 text-blue-950  bg-gray-900  "
        >
            <motion.h2
                initial={{opacity: 0, y: 20}}
                animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 100}}
                transition={{duration: 0.8}}
                className="text-6xl font-bold mb-12"
            >
                KEY METRICS
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                {baseMetrics.map((metric, index) => (
                    <motion.div
                        key={metric.id}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 20}}
                        transition={{duration: 0.8}}
                        className="flex flex-col border border-black/20 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow "
                    >
                        <motion.h3
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 20}}
                            transition={{duration: 0.8}}
                            className="text-4xl font-bold mb-4"
                        >
                            {metric.value}
                        </motion.h3>
                        <motion.p
                            initial={{opacity: 0}}
                            animate={isInView ? { opacity: 1} : { opacity: 0}}
                            transition={{ delay: 1 + index * 0.1, duration: 0.8}}
                            className="text-lg text-gray-400 mb-4"
                        >
                            {metric.label}
                        </motion.p>
                        <motion.p
                            initial={{opacity: 0}}
                            animate={isInView ? { opacity: 1} : { opacity: 0}}
                            transition={{ delay: 1 + index * 0.1, duration: 0.8}}
                            className="text-gray-400"
                        >
                            {metric.description}
                        </motion.p>

                    </motion.div>
                ))}


            </div>

        </motion.section>

    );
};