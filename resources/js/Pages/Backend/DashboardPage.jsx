import { Head } from "@inertiajs/react";
import React from "react";
import MainDashboardPage from "./MainDashboardPage";

const DashboardPage = () => {
    return (
        <div>
            <Head title="Dashboard" />
            <MainDashboardPage />
        </div>
    );
};

export default DashboardPage;
