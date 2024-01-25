import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoHardwareChip } from "react-icons/io5";

const Job = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-4">
            <Card className="py-4 w-60">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <h4 className="font-bold text-xs lg:text-large">
                        Web Developer
                    </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center">
                    <FaLaptopCode className="size-10  lg:size-24" />
                </CardBody>
            </Card>
            <Card className="py-4 w-60">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <h4 className="font-bold text-xs lg:text-large">
                        Data Analyst
                    </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center ">
                    <MdOutlineAnalytics className="size-10 lg:size-24" />
                </CardBody>
            </Card>
            <Card className="py-4 w-60">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <h4 className="font-bold text-xs lg:text-large">
                        Hardware Programmer
                    </h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center ">
                    <IoHardwareChip className="size-10 lg:size-24" />
                </CardBody>
            </Card>
        </div>
    );
};
export default Job;
