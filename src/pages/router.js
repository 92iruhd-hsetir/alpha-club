import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLoader from './common/loader/pageLoader';
import AOS from 'aos';
import "aos/dist/aos.css";

const HomeParent = lazy(() => import(/* webpackChunkName: "homeParent" */ './components/home/homeParent'))
const Footer = lazy(() => import(/* webpackChunkName: "footer" */ './components/footer/footer'));
const Orientation = lazy(() => import(/* webpackChunkName: "orientation" */ './common/orientation'));

function Router() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<HomeParent />} />
                </Routes>
                <Footer />
                <Orientation />
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;