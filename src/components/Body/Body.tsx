import Dashboard from "../Dashboard/Dashboard.tsx";
import Cards from "../Cards/Cards.tsx";
import Grid from "../Grid/Grid.tsx";
import Steps from "../Steps/Steps.tsx";
import Links from "../Links/Links.tsx";
import React from "react";

const Body: React.FC = () => {
    return (
        <>
            <Dashboard />
            <Cards />
            <Grid />
            <Steps />
            <Links />
        </>
    )
}


export default Body;
