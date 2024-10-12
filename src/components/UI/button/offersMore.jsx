import React from 'react'
import "../../../styles/OffersMore.scss"

export const OffersMore = () => {
    return (
        <button className="offers-button-more" style={{ cursor: 'pointer' }}>
            <div className="text">
                <span className="upper">ПОДРОБНЕЕ</span>
                <div className="line-wrapper">
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </button>
    )
}
