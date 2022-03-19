import React, { lazy } from "react";
const Header = lazy(() => import(/* webpackChunkName: "header" */ './header'))
const HowItWork = lazy(() => import(/* webpackChunkName: "howItWork" */ './howItWork'))
const Tiers = lazy(() => import(/* webpackChunkName: "tiers" */ './tiers'))
const Teams = lazy(() => import(/* webpackChunkName: "teams" */ './teams'))
const Books = lazy(() => import(/* webpackChunkName: "books" */ './books'))
const Faqs = lazy(() => import(/* webpackChunkName: "faqs" */ './faqs'))

function Home() {
    let imageBasePath = `${process.env.PUBLIC_URL}/images/`;
    const menus = [
        /* {
            route: "/",
            name: "mint",
            isPageRoute: true
        }, */
        {
            route: "/#howItWork",
            name: "how it works",
            selector: "howItWork",
            component: <HowItWork key="1" imageBasePath={imageBasePath} />
        },
        {
            route: "/#tiers",
            name: "tiers",
            selector: "tiers",
            component: <Tiers key="2" imageBasePath={imageBasePath} />
        },
        {
            route: "/#teams",
            name: "team",
            selector: "teams",
            component: <Teams key="3" imageBasePath={imageBasePath} />
        },
        {
            route: "/#books",
            name: "book",
            selector: "books",
            component: <Books key="4" imageBasePath={imageBasePath} />
        },
        {
            route: "/#faqs",
            name: "faqs",
            selector: "faqs",
            component: <Faqs key="5" imageBasePath={imageBasePath} />
        }
    ];
    return (
        <>
            <Header imageBasePath={imageBasePath} menuList={menus} />
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