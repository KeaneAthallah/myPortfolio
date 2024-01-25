import React from "react";
import { CiMail } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
const Identity = () => {
    return (
        <Accordion className="block lg:hidden">
            <AccordionItem title="Show Contact">
                <div className="flex flex-col m-5 gap-4">
                    <div className="flex flex-row">
                        <div className="flex-2 bg-gray-600 mr-4 rounded-lg">
                            <CiMail
                                color="white"
                                size={35}
                                className="justify-self-center p-2"
                            />
                        </div>
                        <div className="flex-1 ">
                            <p className="text-sm font-semibold">EMAIL</p>
                            <p className="text-sm -mt-1">
                                keane.athall@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-2 bg-gray-600 mr-4 rounded-lg">
                            <FaUniversity
                                color="white"
                                size={35}
                                className="justify-self-center p-2"
                            />
                        </div>
                        <div className="flex-1 ">
                            <p className="text-sm font-semibold">Studied at</p>
                            <p className="text-sm -mt-1">
                                Universitas Negeri Makassar
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-2 bg-gray-600 mr-4 rounded-lg">
                            <IoIosPin
                                color="white"
                                size={35}
                                className="justify-self-center p-2"
                            />
                        </div>
                        <div className="flex-1 ">
                            <p className="text-sm font-semibold">Location</p>
                            <p className="text-sm -mt-1">Makassar, Indonesia</p>
                        </div>
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    );
};

export default Identity;
