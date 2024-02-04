import Grid from "../Grid/Grid.tsx";
import Steps from "../Steps/Steps.tsx";
import Links from "../Links/Links.tsx";
import React from "react";
import Dashboard_about from "./dashboard_about.tsx";

const Body: React.FC = () => {
    return (
        <>
            <Dashboard_about/>
            <Steps />
            <Grid />
            <Links />
        </>
    )
}


export default Body;
