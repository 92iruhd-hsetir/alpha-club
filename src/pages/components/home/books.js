import React from "react";

function Books({ imageBasePath }) {
    const bookList = [
        {
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
        },
        {
            title: "What’s this book about?",
            imageName: "books/book-art.png",
            alt: "What’s this book about?",
            details: [
                {
                    type: "para",
                    content: "Simply put, the book is NFTs. But as you know, the rabbit hole goes deep. My goal is to see just how deep we can go. Literally,  nothing is off-limits:"
                },
                {
                    type: "bullets",
                    content: [
                        "Web3 & decentralization",
                        "Politics",
                        "Finance",
                        "Art",
                        "Culture",
                        "New world order",
                    ]
                },
                {
                    type: "para",
                    content: "Ultimately, We’re going to celebrate and champion the NFTs space. And we’re going to do it as a community. This is a unique opportunity to educate the masses, onboard millions of new users and lift the entire NFT community. A rising tide really does lift all ships."
                }
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