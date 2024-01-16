import Dashboard from "../Dashboard/Dashboard.tsx";
import Cards from "../Cards/Cards.tsx";
import Grid from "../Grid/Grid.tsx";
import Steps from "../Steps/Steps.tsx";
import Links from "../Links/Links.tsx";
import React from "react";
import ManagePortfolio from "../Hero/ManagePortfolio.tsx";

const Body: React.FC = () => {
    return (
        <>
            <Dashboard />
            <Steps />
            <ManagePortfolio />
            <Cards />
            <Grid />
            <Links />
        </>
    )
}


export default Body;
