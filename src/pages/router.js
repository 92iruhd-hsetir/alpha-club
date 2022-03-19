import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLoader from './common/loader/pageLoader';
import AOS from 'aos';
import "aos/dist/aos.css";

const HomeParent = lazy(() => import(/* webpackChunkName: "homeParent" */ './components/home/homeParent'))
const Footer = lazy(() => import(/* webpackChunkName: "footer" */ './components/footer/footer'));
const Orientation = lazy(() => import(/* webpackChunkName: "orientation" */ './common/orientation'));

function Router() {
    let urlBasePath = `${process.env.PUBLIC_URL}/`;
    let imageBasePath = `${urlBasePath}images/`;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <BrowserRouter basename={urlBasePath}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<HomeParent urlBasePath={urlBasePath} imageBasePath={imageBasePath} />} />
                </Routes>
                <Footer imageBasePath={imageBasePath} />
                <Orientation imageBasePath={imageBasePath} />
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;