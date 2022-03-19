import React from "react";

function orientation({ imageBasePath }) {
    return (
        <div className="orientation__wrap">
            <div className="orientation__box">
                <div className="orientation__thumb">
                    <img src={`${imageBasePath}landscape-orientation.svg`} alt="" />
                </div>
                <div className="orientation__text">
                    <span>Please rotate your device <br /> to PORTRAIT mode</span>
                </div>
            </div>
        </div>
    )
}

export default orientation;