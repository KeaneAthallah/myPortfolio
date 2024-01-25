import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";
import NavigationBar from "@/Components/NavigationBar";
const CardNav = () => {
    return (
        <>
            <Card className="flex-1">
                <NavigationBar />
                <CardBody></CardBody>
            </Card>
        </>
    );
};

export default CardNav;
