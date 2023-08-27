import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div>
            <div className="hidden lg:block z-20">
                <div className="flex justify-between h-[300px] w-full bg-black ">
                    <div className="basis-3/4">
                        <a href="https://lumoscit.in"><img src={logo} alt="lumos logo" className="p-5 fill-white w-[25%]" /></a>
                        <div className="pl-7 text-white poppins-text">For further queries:</div>
                        <div className="pl-7 text-white poppins-text">+91 89256 50699 (Ahmed Mustafa)</div>
                        <div className="pl-7 text-white poppins-text">+91 89397 59393 (Madhuvarshini)</div>
                        {/* <p className="pl-7 text-white poppins-text"><a href="mailto:lumos@citchennai.net" className="hover:cursor-pointer"  >Mail: lumos@citchennai.net</a></p> */}
                        <div className="flex justify-between w-2/12 pl-7 mt-3">
                            <a href="https://www.instagram.com/lumos_cit/">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="text-white"
                                    size="2x"
                                />

                            </a>
                            <a href="https://www.linkedin.com/company/lumos-magazine/mycompany/?viewAsMember=true ">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-white"
                                    size="2x"
                                />

                            </a>

                            <a href="https://twitter.com/LumosMagazine">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="text-white"
                                    size="2x"
                                />

                            </a>
                        </div>
                    </div>
                    <div className="basis-1/5">
                        <h1 className="text-white text-2xl ibm-bold mt-4">Sections</h1>
                        <div className="flex gap-2 mt-5 flex-wrap poppins-text">
                            <a href='#events' className="text-white poppins-regular">Events |</a>
                            <a href='#exhibits' className="text-white poppins-regular">Exhibits |</a>
                            <a href='#workshops' className="text-white poppins-regular">Workshops</a>
                            {/* <a href='/campuslife' className="text-white poppins-regular">CAMPUS LIFE</a> */}
                        </div>
                    </div>
                </div>
                {/* <hr className="border border-black" /> */}
                <h1 className="text-center  bg-black-400  text-white">
                    LUMOS OFFICIAL 2023
                </h1>
            </div>

            <div className="block md:hidden z-20">
                <div className="flex flex-col justify-center items-center w-full  bg-black-400 poppins-text">
                    <img src={logo} alt="lumos logo" className="p-5" />
                    <a href='#events' className="text-white poppins-text">Events</a>
                    <a href='#exhibits' className="text-white poppins-text">Exhibits</a>
                    <a href='#workshops' className="text-white poppins-text">Workshops</a>
                    <p className="text-white poppins-text">For further queries:</p>
                    <p className="text-white poppins-text">+91 89256 50699 (Ahmed Mustafa)</p>
                    <p className="text-white poppins-text">+91 89397 59393 (Madhuvarshini)</p>
                    <a href="mailto:lumos@citchennai.net" className="hover:cursor-pointer text-white">lumos@citchennai.net</a>

                    <div className="flex justify-between w-1/2 mt-3">
                        <a href="https://www.instagram.com/lumos_cit/">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-white"
                                size="2x"
                            />

                        </a>
                        <a href="https://www.linkedin.com/company/lumos-magazine/mycompany/?viewAsMember=true ">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-white"
                                size="2x"
                            />

                        </a>

                        <a href="https://twitter.com/LumosMagazine">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-white"
                                size="2x"
                            />

                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;