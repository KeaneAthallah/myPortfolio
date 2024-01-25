import { Card } from "@nextui-org/react";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

const Identity2 = () => {
    return (
        <div className="hidden lg:flex flex-col m-5 gap-4">
            <div className="flex flex-row">
                <Card className="flex-2  mr-4 rounded-lg">
                    <CiMail size={35} className="justify-self-center p-2" />
                </Card>
                <div className="flex-1 ">
                    <p className="text-sm font-semibold">EMAIL</p>
                    <p className="text-sm -mt-1">keane.athall@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-row">
                <Card className="flex-2 mr-4 rounded-lg">
                    <FaUniversity
                        size={35}
                        className="justify-self-center p-2"
                    />
                </Card>
                <div className="flex-1 ">
                    <p className="text-sm font-semibold">Studied at</p>
                    <p className="text-sm -mt-1">Universitas Negeri Makassar</p>
                </div>
            </div>
            <div className="flex flex-row">
                <Card className="flex-2 mr-4 rounded-lg">
                    <IoIosPin size={35} className="justify-self-center p-2" />
                </Card>
                <div className="flex-1 ">
                    <p className="text-sm font-semibold">Location</p>
                    <p className="text-sm -mt-1">Makassar, Indonesia</p>
                </div>
            </div>
        </div>
    );
};

export default Identity2;
