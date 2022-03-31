import React from "react";

function Books({ imageBasePath }) {
    const bookList = [
        /* {
            title: "Who Else Wants To Be A New York Times Bestselling Author?",
            imageName: "books/book-cover.png",
            alt: "Who Else Wants To Be A New York Times Bestselling Author?",
            details: [
                {
                    type: "para",
                    content: "Alpha Book Writers Club has partnered with a 19x NYT bestselling publisher who is going to help us plan, design, write, edit, and promote a NYT bestselling book together."
                },
                {
                    type: "para",
                    content: "And every token holder who contributes to this book, even  just a single sentence, will be credited as a NYT best-selling author."
                },
                {
                    type: "para",
                    content: "For early access, visit our Discord and grab your WL spot."
                }
            ]
        }, */
        {
            title: "What's The Book About?",
            imageName: "books/book-art.png",
            alt: "What's The Book About?",
            details: [
                {
                    type: "para",
                    content: "We’re at a generational crossroads - an artistic, financial, cultural and technological renaissance is happening right before our eyes - and NFTs are at the center."
                },
                /* {
                    type: "bullets",
                    content: [
                        "Web3 & decentralization",
                        "Politics",
                        "Finance",
                        "Art",
                        "Culture",
                        "New world order",
                    ]
                }, */
                {
                    type: "para",
                    content: "As a community, we can standby and let someone else tell our story, and therefore create our future."
                },
                {
                    type: "para",
                    content: "Or we can come together, take control of the narrative, and create our own future with the story we choose to tell."
                },
                {
                    type: "para",
                    content: "It’s up to us."
                },
                {
                    type: "para",
                    content: "Our goal for this project is to bring together the brightest minds in the NFT space to defend, celebrate and champion NFTs. And we’re gonna do it as a community."
                },
            ]
        }
    ]
    return (
        <section id="books" className="section-row-inner section--books">
            <div className="main__container--fluid">
                <div className="main__container">
                    <div className="books__wrap">
                        <ul>
                            {
                                bookList.map((b, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div className="books__box">
                                                <div className="books__box-lft aos-init" data-aos="fade">
                                                    <h1 className="section-heading">
                                                        <span>{b.title}</span>
                                                    </h1>
                                                    <div className="section__para">
                                                        {
                                                            b.details.map((d, idx) => {
                                                                if (d.type === 'bullets') {
                                                                    return (
                                                                        <ol key={idx}>
                                                                            {
                                                                                d.content.map((c, idx) => {
                                                                                    return (
                                                                                        <li key={idx}>{c}</li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ol>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <p key={idx}>{d.content}</p>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div className="books__box-rgt aos-init" data-aos="zoom-in">
                                                    <div className="books__thumb">
                                                        <img src={`${imageBasePath}${b.imageName}`} alt={b.alt} />
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

export default Books;