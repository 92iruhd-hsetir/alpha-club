import React, { useState } from "react";

function Faqs() {
    const questions = [
        {
            "title": "How many NFT’s are there?",
            "content": `<p>There will be 7,777 total NFT’s minted.</p>`
        },
        {
            "title": "Are there different tiers of the NFT collection?",
            "content": `<p>Yes, there are 4 different levels of membership.</p>
                <p>Bronze – Membership, access to the community. Opportunity to upgrade to a Silver token through participation and contribution. Automatically get whitelisted for future projects.</p>
                <p>6000 tokens</p>
                <p>Silver – 100% of book profit share, plus get listed in credits.</p>
                <p>1500 tokens</p>
                <p>Gold – sponsorship, featured in book as an influencer/artist/creator to follow 1 ETH</p>
                <p>250 tokens</p>
                <p>Platinum – dedicated chapter in book. Advisor role. By invitation only.</p>
                <p>27 tokens (or voted on by community)</p>`
        },
        {
            "title": "What do I get for owning each tier of the NFT?",
            "content": `<p><strong>Bronze –</strong> The Bronze tier is the entry level token into the Alpha Book Club. It gives you access to the private server where all the exclusive games, contests and giveaways take place. It also serves as the Genesis token, granting you automatic whitelisting for all future book projects.</p>
                <p><strong>Silver –</strong> Silver tokens are not part of the initial mint but will only be granted as a reward for participating and contributing to the book. Because not everyone will actively participate in the creation of the book, it’s only fair that those who contribute will be rewarded with the spoils. Therefore, 100% of the book profits will be split between Silver token holders.</p>
                <p><strong>Gold –</strong> Gold tokens are reserved for Sponsors only and will not be part of the initial mint. Sponsors will be featured throughout the book, on the website and in our promotions. Gold token holders will also get access to our private Advisor channel inside the Discord.</p>
                <p><strong>Platinum –</strong> Platinum tokens are reserved for Advisors only and are not part of the initial mint. Advisors will each get a dedicated chapter in the book, featuring their project or artwork, and a chance to tell their story.</p>`
        },
        {
            "title": "Who is writing the book?",
            "content": `<p>WAGWI – We All Gonna Write It</p>
                <p>The NFT Community will come together to name the book, choose the Table of Contents, name each chapter, write, edit and promote the book. This will truly be a community effort.</p>
                <p>But we have also partnered with a 19x NYT Best-Selling Book Publisher who loves this project and will support and serve us from start to finish to ensure this project is a smashing success.</p>`
        },
        {
            "title": "How will the project be organized?",
            "content": `<p>With the initial mint, everyone will receive a bronze token. The bronze token is our genesis token and gives you membership access to the private discord server where all the magic happens.</p>
                <p>Games, contests and giveaways will be the mechanisms by which the work will be accomplished by the community. There will be art contests, writing contests, promotional contests, giveaways and partnerships that will ultimately produce the work we submit to our publishing agency. The publishing agency will then take our rough draft, and turn it into a NYT best seller.</p>
                <p>Through these games, contests and giveaways participants will be rewarded with an upgraded silver token. Silver token holders will be rewarded with 100% of the profit share of the book. Silver tokens cannot be minted but must be won through participation and contribution to the project. There will be contests and giveaways throughout the project, allowing for community members to upgrade their positions. This will not only encourage engagement but also help produce the best finished product possible.</p>
                <p>*We will keep a certain number of bronze, silver and gold tokens back to reward the community based on their participation and value they add to the project.</p>`
        },
        {
            "title": "When will the book be published?",
            "content": `<p>This will be determined after I speak with JeVon.</p>`
        },
        {
            "title": "Profit share breakdown",
            "content": `<p>100% of book profits will be distributed back to the community.</p>
                <p>Bronze – We realize not everyone will participate in the planning, editing, and writing of the book. Which is why we want to setup a system that rewards those who do contribute.</p>
                <p>As such, Silver tokens will be awarded to everyone that participates.</p>`
        },
        {
            "title": "Book as NFT?",
            "content": `<p>Jenkins says that he’s dropping the book as an NFT and all holders will get a copy airdropped. Not sure the mechanics of how this would work, but it’s definitely an option.</p>`
        },
        {
            "title": "When is the official launch?",
            "content": `<p>TBD</p>`
        },
        {
            "title": "What will the mint price be?",
            "content": `<p>.07</p>`
        },
        {
            "title": "Who is this project for?",
            "content": `<p>This project is for writers, artists, creators, builders, marketers, disrupters, revolutionaries and the defenders of web3. This project is for those who want to write the history books, shape the future and play an active role in the direction of the NFT space.</p>`
        },
        {
            "title": "How does the raffle work?",
            "content": `<p></p>`
        },
        {
            "title": "How do I get a free 2nd NFT?",
            "content": `<p></p>`
        },
        {
            "title": "How can I use my NFT?",
            "content": `<p></p>`
        },
        {
            "title": "What makes this NFT special?",
            "content": `<p></p>`
        }
    ]

    let [activeAccordion, setActiveAccordion] = useState(0);
    function setAccord(id) {
        let activeAccord = (id !== activeAccordion) ? id : null;
        setActiveAccordion(activeAccord);
    }
    return (
        <section id="faqs" className="section-row-inner section--faq">
            <div className="main__container--fluid">
                <div className="main__container">
                    <h1 className="section-heading aos-init" data-aos="fade">
                        <span>Frequently Asked Questions</span>
                    </h1>

                    <div className="faq__wrap">
                        <div className="faq__box">
                            <div className="accordion">
                                {
                                    questions.map((q, idx) => {
                                        return (
                                            <div key={idx} className={`accordion__box ${(idx === activeAccordion ? 'active' : '')} aos-init`} data-aos="fade-in">
                                                <div className="accordion__head" onClick={() => setAccord(idx)}>
                                                    <span>{q.title}</span>
                                                </div>
                                                <div className="accordion__body">
                                                    <div className="faqs-list" dangerouslySetInnerHTML={{ __html: q.content }}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs;