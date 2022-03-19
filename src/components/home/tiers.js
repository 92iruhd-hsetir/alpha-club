import React from "react";

function Tiers({ imageBasePath }) {
    const tierList = [
        {
            name: "Bronze",
            thumbClass: "bronze",
            imageName: "tiers/bronze.jpg",
            tokenCount: "6,000 tokens",
            tierLabel: "Bronze holders get:",
            tierBenifits: [
                "Private access to contests & giveaways",
                "Creative direction over the story.",
                "Influence within the community.",
                "Chance to become a NYT best-selling author",
                "Experience of a lifetime"
            ]
        },
        {
            name: "Silver",
            thumbClass: "silver",
            imageName: "tiers/silver.jpg",
            tokenCount: "1,500 tokens",
            tierLabel: "Silver holders get all Bronze benefits plus:",
            tierBenifits: [
                "100% of the book profits split",
                "Exclusive merch",
                "Guaranteed WL to next book project"
            ]
        },
        {
            name: "Gold",
            thumbClass: "gold",
            imageName: "tiers/gold.jpg",
            tokenCount: "250 tokens",
            tierLabel: "Gold holders get all Bronze & Silver benefits plus:",
            tierBenifits: [
                "Featured listing in the book",
                "Private access to the Advisors channel"
            ]
        },
        {
            name: "Platinum",
            thumbClass: "platinum",
            imageName: "tiers/platinum.jpg",
            tokenCount: "27 tokens",
            tierLabel: "Platinum holders get:",
            tierBenifits: [
                "A featured chapter in the book.",
                "Work directly with a 19x NYT best-selling book publisher.",
                "Private networking channel with the other advisors and partners."
            ]
        }
    ]
    return (
        <section id="tiers" className="section-row-inner  section--tier">
            <div className="main__container--fluid">
                <div className="main__container">
                    <h1 className="section-heading aos-init" data-aos="fade">
                        <span>Tiers</span>
                    </h1>
                    <div className="tier__list">
                        <ul>
                            {
                                tierList.map((t, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div className="tier__box">
                                                <div className="tier__box-lft aos-init" data-aos="zoom-in">
                                                    <div className={`tier__thumb ${t.thumbClass}`}>
                                                        <img src={`${imageBasePath}${t.imageName}`} alt={t.imageName} />
                                                    </div>
                                                </div>
                                                <div className="tier__box-rgt aos-init" data-aos="fade">
                                                    <h2 className="tier__heading">{t.name}</h2>
                                                    <h4 className="tier__price">{t.tokenCount}</h4>
                                                    <div className="tier__description">
                                                        <p>{t.tierLabel}</p>
                                                        <ol>
                                                            {
                                                                t.tierBenifits.map((b, idx) => {
                                                                    return (
                                                                        <li key={idx}>{b}</li>
                                                                    )
                                                                })
                                                            }
                                                        </ol>
                                                    </div>
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

export default Tiers;