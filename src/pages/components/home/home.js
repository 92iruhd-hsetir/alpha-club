import React, { lazy, useState, useEffect } from "react";
const Header = lazy(() => import(/* webpackChunkName: "header" */ './header'))
const HowItWork = lazy(() => import(/* webpackChunkName: "howItWork" */ './howItWork'))
const Tiers = lazy(() => import(/* webpackChunkName: "tiers" */ './tiers'))
const Teams = lazy(() => import(/* webpackChunkName: "teams" */ './teams'))
const Books = lazy(() => import(/* webpackChunkName: "books" */ './books'))
const Faqs = lazy(() => import(/* webpackChunkName: "faqs" */ './faqs'))

function Home({ urlBasePath, imageBasePath }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const menus = [
        /* {
            route: urlBasePath,
            name: "Mint",
            isPageRoute: true
        }, */
        {
            route: "/#howItWork",
            name: "How it works",
            selector: "howItWork",
            component: <HowItWork key="1" imageBasePath={imageBasePath} />
        },
        {
            route: "/#books",
            name: "Book",
            selector: "books",
            component: <Books key="4" imageBasePath={imageBasePath} />
        },
        {
            route: "/#tiers",
            name: "Tiers",
            selector: "tiers",
            component: <Tiers key="2" imageBasePath={imageBasePath} />
        },
        {
            route: "/#teams",
            name: "Team",
            selector: "teams",
            component: <Teams key="3" imageBasePath={imageBasePath} />
        },
        {
            route: "/#faqs",
            name: "Faqs",
            selector: "faqs",
            component: <Faqs key="5" imageBasePath={imageBasePath} />
        }
    ];

    useEffect(() => {
        const isInViewport = (selector) => {
            let target = document.getElementById(selector);
            let settings = target.getBoundingClientRect();
            let header = document.getElementById("header");
            let buffer = header.offsetHeight; // menu height
            let isTargetCrossedTop = (buffer > settings.top);
            let isTargetReachedBottom = (buffer < settings.bottom);
            if (isTargetCrossedTop && isTargetReachedBottom) {
                return selector;
            } else {
                return null;
            }
        }
        const handleScroll = () => {
            for (let i = 0; i < menus.length; i++) {
                let m = menus[i];
                if (!m.isPageRoute) {
                    let activeSelector = isInViewport(m.selector);
                    if (activeSelector) {
                        setActiveMenu(activeSelector);
                        break;
                    } else {
                        setActiveMenu(null);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <>
            <Header urlBasePath={urlBasePath} imageBasePath={imageBasePath} activeMenu={activeMenu} menuList={menus} />
            <section className="hp__banner aos-init" data-aos="fade"></section>
            {
                menus.map(m => {
                    if (!m.isPageRoute) {
                        return (m.component)
                    }
                    return null;
                })
            }
        </>
    )
}

export default Home;