import React, { lazy } from "react";
const Header = lazy(() => import(/* webpackChunkName: "header" */ './header'))
const HowItWork = lazy(() => import(/* webpackChunkName: "howItWork" */ './howItWork'))
const Tiers = lazy(() => import(/* webpackChunkName: "tiers" */ './tiers'))
const Teams = lazy(() => import(/* webpackChunkName: "teams" */ './teams'))
const Books = lazy(() => import(/* webpackChunkName: "books" */ './books'))
const Faqs = lazy(() => import(/* webpackChunkName: "faqs" */ './faqs'))

function Home({urlBasePath, imageBasePath}) {
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
            route: "/#books",
            name: "Book",
            selector: "books",
            component: <Books key="4" imageBasePath={imageBasePath} />
        },
        {
            route: "/#faqs",
            name: "Faqs",
            selector: "faqs",
            component: <Faqs key="5" imageBasePath={imageBasePath} />
        }
    ];
    return (
        <>
            <Header urlBasePath={urlBasePath} imageBasePath={imageBasePath} menuList={menus} />
            <section className="hp__banner aos-init" data-aos="fade"></section>
            {
                menus.map((m, idx) => {
                    if (!m.isPageRoute) {
                        return (<div key={idx}>{m.component}</div>)
                    }
                    return null;
                })
            }
        </>
    )
}

export default Home;