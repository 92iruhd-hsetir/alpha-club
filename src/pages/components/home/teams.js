import React from "react";

function Teams({ imageBasePath }) {
    const teamList = [
        {
            name: "Justin",
            pic: "profilePics/justin.png",
            alt: "Justin",
            role: "Founder",
            twitterLink: "https://twitter.com/justin3ckrich",
            username: "justin3ckrich",
            intro: "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            name: "Sofia Moore",
            pic: "profilePics/sofia.png",
            alt: "Sofia Moore",
            role: "Artist",
            twitterLink: null,
            username: "twitter",
            intro: "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            name: "Pratik",
            pic: "profilePics/pratik.png",
            alt: "Pratik",
            role: "Dev",
            twitterLink: 'https://twitter.com/Chodan_Bakri',
            username: "Chodan_Bakri",
            intro: "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        }
    ]
    let isMobile = window.innerWidth <= 768;
    const getAosDelay = (idx) => {
        let baseDelay = 500;
        let maxcols = isMobile ? 1 : 3; // set 1 for mobile
        let delayDiff = 100;
        return ( baseDelay + (( idx % maxcols ) * delayDiff ));
    }

    return (
        <section id="teams" className="section-row-inner section--team">
            <div className="main__container--fluid">
                <div className="main__container">
                    <h3 className="section-lbl aos-init" data-aos="fade">
                        <span>TEAM</span>
                    </h3>
                    <h1 className="section-heading aos-init" data-aos="fade">
                        <span>Genius minds behind this program for you</span>
                    </h1>
                    <div className="team__list">
                        <ul>
                            {
                                teamList.map((t, idx) => {
                                    return (
                                        <li key={idx} data-aos="fade-up" data-aos-delay={getAosDelay(idx)} className="aos-init">
                                            <div className="team__box">
                                                <div className="team__thumb">
                                                    <img src={`${imageBasePath}${t.pic}`} alt={t.alt} />
                                                </div>
                                                <div className="team__name">
                                                    <span>{t.name}</span>
                                                </div>
                                                <div className="team__designation">
                                                    <span>{t.role}</span>
                                                </div>
                                                <div className="team__intro">
                                                    <p>{t.intro}</p>
                                                </div>
                                                {/* <div className="team__cta">
                                                    <div className="btn btn__link">
                                                        <span>read more</span>
                                                    </div>
                                                </div> */}
                                                <div className="team__social">
                                                    <a href={t.twitterLink} target="_blank">
                                                        <img src={`${imageBasePath}socialIcons/twitter.svg`} alt={t.username} title={t.username} />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams;