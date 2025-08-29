import { Progress } from "@/components/ui/progress"


import Image from "next/image"


export const About = () => {
    return (
        <section id="about" className="text-white p-8 bg-gray-950 shadow-lg ">
            <h2 className="text-6xl font-bold mb-8">About <span className="text-blue-950">Me</span> </h2>
            <div className="grid md:grid-cols-2 gap-4 bg-gray-950/20 p-6 rounded-lg shadow-lg ">

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Background</h3>
                    <p className="text-white/50 mb-6">
                        I'am a passionate full-stack developer with a strong fundation in computer science and a love
                        creating innovative web solution. My journer in tech started with a curiosity  about how things
                        work, which led me to pursus a career in web development.
                        web development.
                    </p>
                    <div className="border border-white/20 rounded-lg p-6">
                        <code className="text-gray-200">
                        const skills = [<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"JavaScript"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"React"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"Next.js"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"Node.js"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"Express"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"MongoDB"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"PostgreSQL"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"Git"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"Tailwind CSS"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"Python"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"SQL"`},<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;{`"AWS"`},<br/>
                            ];
                        </code>
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Expertise</h3>
                    <p> I specialize in building robust and scalable web applications using modern technologies. </p>
                    <div className="mt-4 relative border border-white/20 rounded-lg overflow-hidden">
                          <Image
                              src="/assets/proj5.png"
                              alt="Project 5"
                              width={1200}
                              height={675}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="w-full h-auto object-cover"
                          />
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">My School</h3>
                    <p> Student in BTS IT Services
                        for Organizations – Software Solutions and usiness Applications option (SIO SLAM) at IF2I, I specialize in the
                        development of web and software applications. Passionate about programming and problem-solving, I enjoy designing custom solutions that meet the real needs of users.
                    </p>
                    <div className="mt-4 relative border border-white/20 rounded-lg overflow-hidden">
                        <Image
                            src="https://jeunesdavenirs.fr/wp-content/uploads/2023/03/remise-diplome-f2i-1024x721.jpg"
                            alt="Remise de diplôme F2i"
                            width={1200}
                            height={675}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Skills</h3>
                    <p className="text-white/50 mb-4">
                        I am skilled in a wide range of technologies and I am constantly expanding.
                    </p>
                    <div className="grid gap-2 text-center">
                        <div className="border border-white/20 rounded-lg p-4">
                            <h4 className="text-gray-300 font-medium mb-2">Frontend</h4>
                            <ul className="text-white/50 space-y-1 text-sm ">
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Flutter</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 rounded-lg p-4">
                            <h4 className="text-gray-300 font-medium mb-2">Backend</h4>
                            <ul className="text-white/50 space-y-1 text-sm ">
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>PostgreSQL</li>
                                <li>AWS</li>
                                <li>MongoDB</li>
                                <li>Supabase</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=" border border-white/20 rounded-lg p-6">
                    <div>
                        <h3 className="text-2xl font-bold">Goals</h3>
                        <p className="text-white/30"> My goal is to continue growing as a developer, tackling challenging  </p>
                    </div>
                    <div className=" relative overflow-hidden border border-white/20 rounded-lg">
                        <Image
                             src="/assets/proj6.png"
                             alt="Project 6"
                             width={1200}
                             height={675}
                             sizes="(max-width: 768px) 100vw, 50vw"
                             className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-1 gap-4">
                    <div className="border border-white/20 rounded-lg p-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Front-End</label>
                                <Progress value={70} className="bg-gray-300/20 [&>div]:bg-gray-100/80 " />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Back-End</label>
                                <Progress value={65} className="bg-gray-300/20 [&>div]:bg-gray-100/80 " />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">DevOps</label>
                                <Progress value={50} className="bg-gray-300/20 [&>div]:bg-gray-100/80 " />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mt-4 mb-2"></h3>
                        <p className="text-white/50"> I believe in writin clean, maintainable code and following best
                            practices. My approach involves understanding client needs, and delivering high-quality
                            solutions on time .
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}