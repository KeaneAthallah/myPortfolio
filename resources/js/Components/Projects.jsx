import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
} from "@nextui-org/react";
import React from "react";
import { Image } from "@nextui-org/react";

const Projects = () => {
    return (
        <div className="mt-24 mb-10 mx-7">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold text-large">Kotarindu</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-5">
                        <Image
                            isBlurred
                            width={240}
                            src="/asset/projects/Screenshot 2024-01-22 164647.png"
                            alt="NextUI Album Cover"
                            classNames="m-5"
                        />
                    </CardBody>
                    <CardFooter className="flex justify-center font-semibold text-2xl mb-5 gap-1">
                        <Button className="cursor-default">Laravel</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center  mt-5">
                        <h4 className="font-bold text-large">News Portal</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-5">
                        <Image
                            isBlurred
                            width={240}
                            src="/asset/projects/Screenshot 2024-01-22 164647.png"
                            alt="NextUI Album Cover"
                            classNames="m-5"
                        />
                    </CardBody>
                    <CardFooter className="flex justify-center font-semibold text-2xl mb-5 gap-1">
                        <Button className="cursor-default">Laravel</Button>

                        <Button className="cursor-default">React</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold text-large">Survey IKM</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-5">
                        <Image
                            isBlurred
                            width={240}
                            src="/asset/projects/Screenshot 2024-01-22 164647.png"
                            alt="NextUI Album Cover"
                            classNames="m-5"
                        />
                    </CardBody>
                    <CardFooter className="flex justify-center font-semibold text-2xl mb-5 gap-1">
                        <Button className="cursor-default">Laravel</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold text-large">KeanimeList</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 items-center my-5">
                        <Image
                            isBlurred
                            width={240}
                            src="/asset/projects/Screenshot 2024-01-22 164647.png"
                            alt="NextUI Album Cover"
                            classNames="m-5"
                        />
                    </CardBody>
                    <CardFooter className="flex justify-center font-semibold text-2xl mb-5 gap-1">
                        <Button className="cursor-default">Next Js</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Projects;
