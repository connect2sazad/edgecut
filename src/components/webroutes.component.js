import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import AboutUsPage from "../pages/about";
import FurnituresPage from "../pages/furnitures";
import BlogsPage from "../pages/blogs";
import ContactUsPage from "../pages/contactus";

const WebRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutUsPage />} />
            <Route exact path="/furnitures" element={<FurnituresPage />} />
            <Route exact path="/blogs" element={<BlogsPage />} />
            <Route exact path="/contact-us" element={<ContactUsPage />} />
        </Routes>
    );
}

export default WebRoutes;
