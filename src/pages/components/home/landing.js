import React from "react";

function landing({enterHome}) {
    return (
        <div className="heroBanner__wrap">
            <div className="heroBanner__cta">
                <a onClick={() => enterHome()}>
                    <img src={`${process.env.PUBLIC_URL}images/enter-cta.jpg`} alt="Enter" title="Click to Enter" />
                </a>
            </div>
        </div>
    )
}

export default landing;