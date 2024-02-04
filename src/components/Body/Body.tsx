import React from "react";
import Home from "../Home/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Aboutus from "../Aboutus/Aboutus.tsx";

const Body: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/about" element={<Aboutus />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Body;
