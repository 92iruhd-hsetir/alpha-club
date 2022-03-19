import React from "react";

function landing({imageBasePath, enterHome}) {
    return (
        <div className="heroBanner__wrap">
            <div className="heroBanner__cta">
                <a onClick={() => enterHome()}>
                    <img src={`${imageBasePath}enter-cta.jpg`} alt="Enter" title="Click to Enter" />
                </a>
            </div>
        </div>
    )
}

export default landing;