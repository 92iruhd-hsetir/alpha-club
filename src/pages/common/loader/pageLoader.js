import React from "react";
import "./pageLoader.css";

function pageLoader() {
    return (
        <div className="pageloader__wrap active">
            <div className="pageloader__box">
                <div className="pageloader__img">
                    <div className="pageloader__icon"></div>
                </div>
                <div className="pageloader__content">
                    <span className="loading">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default pageLoader;