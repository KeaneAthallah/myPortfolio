import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Identity from "./Identity";
import Identity2 from "./Identity2";

const Profile = () => {
    return (
        <Card className="flex-2 h-3/5">
            <CardBody>
                <div className="flex items-center justify-center flex-col mt-3">
                    <Image
                        isBlurred
                        width={150}
                        src="/asset/img/3d-illustration-boy-with-camera-his-hand.jpg"
                        alt="NextUI Album Cover"
                        classNames="flex items-center"
                    />
                    <p className="text-4xl font-bold my-5">Keane Athallah</p>
                    <Card className="-mt-3 py-1 px-4 rounded-md text-sm font-bold mb-3">
                        Junior Web Developer
                    </Card>
                </div>
                <div>
                    <Identity />
                    <Identity2 />
                </div>
            </CardBody>
        </Card>
    );
};

export default Profile;
