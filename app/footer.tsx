import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return <>

        <div className="bg-[url(/footer-img.jpg)] bg-cover w-full flex-md:flex-row flex-col justify-around items-start p-5">


            {/* <div className="flex p-5">
                <ul>
                    <p className="text-primary-foreground font-bold pb-4"><span className="text-green-600 font-bold">NEO</span> DIGITAL</p>
                    <div className="flex gap-6">
                        <FaTwitter className="text-white cursor-pointer hover:text-green-600" />
                        <FaFacebook className="text-white cursor-pointer hover:text-green-600" />
                        <FaLinkedinIn className="text-white cursor-pointer hover:text-green-600" />
                        <FaInstagram className="text-white cursor-pointer hover:text-green-600" />
                    </div>
                </ul>
            </div>

            <div className="flex p-5">
                <ul>
                    <p className="text-white font-bold pb-4">Services</p>
                    <li className="text-primary-foreground text-md pb-2 font-semibold hover:text-green-600 cursor-pointer">Contact Us</li>
                    <li className="text-primary-foreground text-md pb-2 font-semibold hover:text-green-600 cursor-pointer">Privacy Policy</li>
                    <li className="text-primary-foreground text-md pb-2 font-semibold hover:text-green-600 cursor-pointer">Terms & Conditions</li>
                </ul>
            </div>

            <div className="p-5">
                <ul>
                    <p className="text-white font-bold pb-4">Contact Us</p>
                    <li className="text-primary-foreground text-md pb-2 font-semibold"><span className="text-green font-bold">Phone:</span> +91-9012345678</li>
                    <li className="text-primary-foreground text-md pb-2 font-semibold"><span className="text-green font-bold">Email:</span> info@gmail.com</li>
                    <li className="text-primary-foreground text-md pb-2 font-semibold"><span className="text-green font-bold">Address:</span> 1234 Mansarovar Jaipur - 302020</li>
                </ul>
            </div> */}




            <footer className="text-white py-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-green-400 inline">NEO</h2>
                        <span className="text-2xl font-bold"> Digital</span>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <FaTwitter className="text-white cursor-pointer hover:text-green-600" />
                            <FaFacebook className="text-white cursor-pointer hover:text-green-600" />
                            <FaLinkedinIn className="text-white cursor-pointer hover:text-green-600" />
                            <FaInstagram className="text-white cursor-pointer hover:text-green-600" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-1">
                            <li className="mb-2"><a href="#" className="hover:text-teal-400">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-teal-400">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p className="mb-2"><span className="font-semibold text-teal-400">Phone:</span> +91-9012345678</p>
                        <p className="mb-2"><span className="font-semibold text-teal-400">Email:</span> info@gmail.com</p>
                        <p className="mb-2"><span className="font-semibold text-teal-400">Address:</span> 1234 Mansarovar, Jaipur - 302020</p>
                    </div>
                </div>


                <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-6">
                    ©2025 <span className="text-green-400 font-semibold">NEO DIGITAL</span>. All rights reserved.
                </div>
            </footer>





        </div>










    </>
}

export default Footer;