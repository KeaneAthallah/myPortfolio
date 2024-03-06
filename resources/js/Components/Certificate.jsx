import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
} from "@nextui-org/react";
import React from "react";
import { Image } from "@nextui-org/react";

const Certificate = () => {
    return (
        <div className="mt-24 mb-10 mx-7">
            <div className="flex flex-auto gap-3 text-medium text-center p-2">
                <Card className="">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold">
                            Belajar Dasar Data Science
                        </h4>
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
                        <Button className="cursor-default">Dicoding</Button>
                    </CardFooter>
                </Card>
                <Card className="">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center  mt-5">
                        <h4 className="font-bold">
                            Belajar Dasar Git dengan GitHub
                        </h4>
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
                <Card className="">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold">
                            Belajar Dasar Structured Query Language
                        </h4>
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
                <Card className="">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold">
                            Cloud Practitioner Essentials (Belajar Dasar AWS
                            Cloud)
                        </h4>
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
                <Card className="">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold">Responsive Web Design</h4>
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
                        <Button className="cursor-default">freeCodeCamp</Button>
                    </CardFooter>
                </Card>
                <Card className="">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold">
                            Memulai Pemrograman dengan Python
                        </h4>
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
                        <Button className="cursor-default">Dicoding</Button>
                    </CardFooter>
                </Card>
                <Card className="">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center mt-5">
                        <h4 className="font-bold">
                            Belajar Dasar Visualisasi Data
                        </h4>
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
                        <Button className="cursor-default">Dicoding</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Certificate;
