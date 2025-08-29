
const services = [
    { id: 1, title: "Web Development", description: "I create websites that provide a great user experience." },

    { id: 2, title: "Mobile App Development", description: "I create mobile apps that are easy to use and provide great functionality." },

]



export const Services = () => {


    return (
        <section id="services" className="text-white p-8  bg-gradient-to-r from-purple-950/30 to-blue-950  shadow-lg">
            <div className="container mx-auto flex flex-col  " >
                <div className="md:w-1/4 pr-8 md-12 md:mb-0 ">
                    <h2 className="text-6xl font-extrabold sticky" >SERVICES</h2>
                </div>

                <div className="md:w-3/4 pt-3" >
                    {services.map((service) => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-gray-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>

    )
}