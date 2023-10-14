import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import AboutUsPage from "../pages/about";

const WebRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutUsPage />} />
        </Routes>
    );
}

export default WebRoutes;
