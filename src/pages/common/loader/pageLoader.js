import React from "react";
import "./pageLoader.css";

function pageLoader({imageBasePath}) {
    return (
        <div className="pageloader__wrap active">
            <div className="pageloader__box">
                <div className="pageloader__img">
                    <img src={`${imageBasePath}loader.svg`} alt="Loader" />
                </div>
                <div className="pageloader__content">
                    <span className="loading">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default pageLoader;