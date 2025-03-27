'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";

const servicesData = [
    {
        id: 1,
        icon: "services-icons.svg",
        title: "Web Development Technology",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        services: [
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            }
        ]
    },
    {
        id: 2,
        icon: "services-icons.svg",
        title: "Web Development Technology",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        services: [
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            }
        ]
    },
    {
        id: 3,
        icon: "services-icons.svg",
        title: "Web Development Technology",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        services: [
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            }
        ]
    },
    {
        id: 4,
        icon: "services-icons.svg",
        title: "Web Development Technology",
        services: [
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 5,
        icon: "services-icons.svg",
        title: "Web Development Technology",
        services: [
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 6,
        icon: "services-icons.svg",
        title: "Web Development Technology",
        services: [
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
                icon: "services-icons.svg",
                title: "Web Development Technology",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
];


const Services = () => {
    const [viewDialog, setViewDialog] = useState(false)
    const [serviceContent, setServiceContent] = useState({});
    return <>


        <div className="bg-black">
            <section className="container mx-auto py-12 px-6">
                <h3 className="text-lg font-semibold uppercase tracking-wide text-primary-foreground">Services of <span className="text-teal-400">Neo Digital</span></h3>
                <h2 className="text-3xl font-bold mt-2 text-primary-foreground">Lorem Ipsum Simply Dummy Text</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {servicesData?.map((service, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-xl text-black shadow-md" onClick={() => {
                            setViewDialog(!viewDialog);
                            setServiceContent(service);
                        }}>
                            <div className="flex items-center space-x-4">
                                <div className="">
                                    <img src={service.icon} alt="Icon" className="w-30" />
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mt-2">{service.title}</h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>



            <section className="relative bg-[url(/about-count-img.jpg)] bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12">
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative mx-auto text-center text-white">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
                        Lorem Ipsum Of Simply Dummy Text
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-teal-400">10+</p>
                            <p className="text-lg text-gray-300 font-medium">Active Clients</p>
                        </div>

                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-teal-400">50+</p>
                            <p className="text-lg text-gray-300 font-medium">Projects Done</p>
                        </div>

                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-teal-400">25+</p>
                            <p className="text-lg text-gray-300 font-medium">Team Advisors</p>
                        </div>
                    </div>

                </div>
            </section>

            <div className="container mx-auto px-6 py-12 text-center">
                <p className="text-sm text-primary-foreground uppercase font-semibold">Services of <span className="text-teal-400 font-semibold">NEO</span> Digital</p>
                <h2 className="text-3xl font-bold mt-2 text-primary-foreground">Lorem Ipsum Simply Dummy Text</h2>

                <div className="relative flex flex-col md:flex-row items-center justify-center mt-12 gap-12">
                    <div className="text-center max-w-xs">
                        <div className="bg-white p-4 rounded-lg inline-block shadow-lg">
                            <img src="step-1.png" alt="Icon 1" />
                        </div>
                        <h3 className="text-teal-400 mt-4 font-semibold">Lorem Ipsum Dummy Text</h3>
                        <p className="text-gray-300 mt-2 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="hidden md:block absolute border-dashed border-t-2 border-gray-400 w-50 top-10 left-1/3"></div>

                    <div className="text-center max-w-xs">
                        <div className="bg-white p-4 rounded-lg inline-block shadow-lg">
                            <img src="step-2.png" alt="Icon 2" />
                        </div>
                        <h3 className="text-teal-400 mt-4 font-semibold">Lorem Ipsum Dummy Text</h3>
                        <p className="text-gray-300 mt-2 text-sm">It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>

                    <div className="hidden md:block absolute border-dashed border-t-2 border-gray-400 w-50 top-10 right-1/3"></div>

                    <div className="text-center max-w-xs">
                        <div className="bg-white p-4 rounded-lg inline-block shadow-lg">
                            <img src="step-3.png" alt="Icon 3" />
                        </div>
                        <h3 className="text-teal-400 mt-4 font-semibold">Your Content Goes Here</h3>
                        <p className="text-gray-300 mt-2 text-sm">It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                </div>
            </div>

            <section className="bg-black text-center py-16 relative">

                <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?stars,space')] opacity-20"></div>

                <div className="relative z-10">
                    <h1 className="text-white text-4xl font-extrabold">
                        Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo
                    </h1>
                    <p className="text-gray-300 mt-2">Lorem Ipsum is simply dummy text of the printing</p>

                    <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-teal-600 transition">
                        Enquiry Now
                    </button>
                </div>
            </section>
        </div>

        <Dialog open={viewDialog} onOpenChange={setViewDialog}>
            <DialogContent className="lg:max-w-[900px]">
                <DialogHeader>
                    <DialogTitle>{serviceContent?.title!}</DialogTitle>
                    <DialogDescription>
                        <div className="bg-black text-white">
                            <section className="py-10 px-6 md:px-10 lg:px-10">
                                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                            {serviceContent?.title!}
                                        </h2>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {serviceContent?.description!}
                                        </p>
                                        <button className="bg-teal-400 text-black px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-teal-500">
                                            Enquiry Now
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <img src="contact-img.png" alt="services" className="w-full max-w-md" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                    {serviceContent.services?.map((service, index) => (
                                        <div key={index} className="bg-gray-100 p-6 rounded-xl text-black shadow-md" >
                                            <div className="flex items-center space-x-4">
                                                <div className="">
                                                    <img src={service.icon} alt="Icon" className="w-30" />
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-lg mt-2">{service.title}</h3>
                                            <p className="text-gray-600 mt-2">{service.description}</p>
                                        </div>
                                    ))}

                                </div>


                            </section>

                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
}

export default Services;