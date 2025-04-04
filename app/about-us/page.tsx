'use client';
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutUs = () => {
    return <>


        <div className="bg-black">

            <section className="container m-auto text-white m-auto py-10 px-6 md:px-12">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    <div className="">
                        <img src="about-img-1.png" alt="developemnt services" title="developemnt services" className="w-full max-w-sm sm:max-w-md lg:max-w-lg" />


                        {/* <DotLottieReact src="https://lottie.host/bad20bd1-aa9a-4885-b3bc-cd1d1c036759/wkl9CwSWrn.lottie" loop autoplay/> */}
                        





                    </div>


                    <div className="text-center lg:text-left">
                        <p className="text-white uppercase text-xs sm:text-sm font-semibold border-l-4 border-teal-400 pl-2 inline-block">
                            Meaning of NEO DIGITAL
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
                            <span className="text-teal-400">NEO</span> DIGITAL Is Focused On <span className="text-teal-400"> Great Collaboration</span>
                        </h2>
                        <p className="mt-4 text-gray-300 text-sm sm:text-base">
                            NEO DIGITAL stands for development of A to Z technologies, a one-stop shop for all possible technology services.
                        </p>
                        <p className="mt-4 text-gray-400 text-sm sm:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
            </section>



            <section className="container m-auto text-white m-auto py-10 px-6 md:px-12">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    <div className="text-center lg:text-left">
                        <p className="text-white uppercase text-xs sm:text-sm font-semibold border-l-4 border-teal-400 pl-2 inline-block">
                            Choose Us
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
                            Our <span className="text-teal-400">Vision</span>
                        </h2>
                        <p className="mt-4 text-gray-300 text-sm sm:text-base">
                            NEO DIGITAL always does a strong commitment with clients to deliver top-notch quality product with on-time deliverability. When something is important enough, odds get their way out.
                        </p>
                        <p className="mt-4 text-gray-400 text-sm sm:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className="grid justify-items-end">
                        <img src="about-img-2.png" alt="developemnt services" title="developemnt services" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />


                    </div>

                </div>
            </section>



            <section className="relative bg-[url(/about-count-img.jpg)] bg-cover bg-center bg-no-repeat py-10 px-6 md:px-12">
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container m-auto relative mx-auto text-center text-white">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
                        Lorem Ipsum Of Simply Dummy Text
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
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



            {/* <section className="relative bg-black py-12 px-6">
                <div className=" mx-auto">

                    <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-4">

                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-7 shadow-lg flex flex-col items-center bg-[#EAF3FF]">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl">
                                <img src="about-icon-1.png" alt="icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Machine Learning</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>


                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-7 shadow-lg flex flex-col items-center bg-[#FFEBE6]">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl">
                                <img src="about-icon-2.png" alt="icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Web3</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>


                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-7 shadow-lg flex flex-col items-center bg-[#E5F9FF]">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl">
                                <img src="about-icon-3.png" alt="icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Mobile Application</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>


                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-7 shadow-lg flex flex-col items-center bg-[#FFF3E9]">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl">
                                <img src="about-icon-4.png" alt="icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Marketing</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </section> */}



            <section className="container m-auto relative bg-black py-10 px-6">
                <div className=" mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#EAF3FF] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                                <img src="about-icon-1.png" alt="services icon" title="services icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Machine Learning</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>


                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#FFEBE6] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                                <img src="about-icon-2.png" alt="services icon" title="services icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Web3</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>


                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#E5F9FF] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                                <img src="about-icon-3.png" alt="services icon" title="services icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Mobile Application</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>


                        <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#FFF3E9] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                                <img src="about-icon-4.png" alt="services icon" title="services icon" className="w-8 h-8" />
                            </div>
                            <h3 className="mt-4 font-bold text-lg">Marketing</h3>
                            <p className="text-gray-600 text-center mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="container m-auto text-center py-10 relative">

                <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?stars,space')] opacity-20"></div>

                <div className="relative z-10">
                    <h1 className="text-white text-4xl font-extrabold">
                        Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo
                    </h1>
                    <p className="text-gray-300 mt-2">Lorem Ipsum is simply dummy text of the printing</p>

                    <Link href={"/contact-us"}>
                        <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-teal-600 transition">
                            Enquiry Now
                        </button>
                    </Link>
                </div>
            </section>


        </div>

    </>
}

export default AboutUs;