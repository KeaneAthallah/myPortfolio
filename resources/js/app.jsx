import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { CardHeader, NextUIProvider } from "@nextui-org/react";
import Profile from "./Components/Profile";
import { Card, CardBody } from "@nextui-org/react";
import NavigationBar from "@/Components/NavigationBar";
import Title from "./Components/Title";
import Navigation from "./Components/Dashboard/Navigation";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/Frontend/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <NextUIProvider>
                <main className="flex flex-col lg:flex-row m-10 gap-10 mt-20">
                    <Profile />
                    <Card className="flex-1">
                        <NavigationBar />
                        <CardHeader>
                            <Title />
                        </CardHeader>
                        <CardBody>
                            <App {...props} />
                        </CardBody>
                    </Card>
                </main>
            </NextUIProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <NextUIProvider>
                <main>
                    <App {...props} />
                </main>
            </NextUIProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/Backend/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <NextUIProvider>
                <main>
                    <Navigation props={props} />
                    <App {...props} />
                </main>
            </NextUIProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
