import React from "react";

function footer({ imageBasePath }) {
    const footerLinks = [
        // {
        //     text: "Terms & Conditions",
        //     link: "/terms-conditions"
        // },
        // {
        //     text: "Privacy Policy",
        //     link: "/privacy"
        // }
    ];
    const socialLinks = [
        {
            icon: `${imageBasePath}socialIcons/twitter.svg`,
            link: null,
            alt: 'twitter',
            title: 'Twitter'
        },
        {
            icon: `${imageBasePath}socialIcons/discord.svg`,
            link: null,
            alt: 'discord',
            title: 'Discord'
        },
        {
            icon: `${imageBasePath}socialIcons/opensea.svg`,
            link: null,
            alt: 'opensea',
            title: 'Opensea'
        },
        {
            icon: `${imageBasePath}socialIcons/union.svg`,
            link: null,
            alt: 'union',
            title: 'Union'
        },
        {
            icon: `${imageBasePath}socialIcons/instagram.svg`,
            link: null,
            alt: 'instagram',
            title: 'Instagram'
        }
    ]

    return (
        <footer className="footer__wrap">
            <div className="main__container--fluid">
                <div className="main__container">
                    <div className="footer__box">
                        <div className="footer__logo">
                            <img src={`${imageBasePath}logo.jpg`} alt="Alpha Book Writers Club" title="Alpha Book Writers Club" />
                        </div>
                        <div className="footer__copyrite">
                            <span>&copy; {new Date().getFullYear()} Alpha Book Writers Club</span>
                        </div>
                        <div className="footer__nav">
                            <ul>
                                {
                                    footerLinks.map((f, idx) => {
                                        return (
                                            <li key={idx}>
                                                <a href={f.link}>{f.text}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="footer__socials">
                            <ul>
                                {
                                    socialLinks.map((s, idx) => {
                                        return (
                                            <li key={idx}>
                                                <a href={s.link}>
                                                    <img src={s.icon} alt={s.alt} title={s.title} target="_blank" />
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;