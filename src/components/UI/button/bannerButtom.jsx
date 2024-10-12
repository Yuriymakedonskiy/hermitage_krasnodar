import React from 'react'
import "../../../styles/bannerButtom.scss"
export const BannerButtom = ({buttonRezidenziya,translateY,translateYnum}) => {
    return (
        <button onClick={buttonRezidenziya} className="banner_button AnimationScroll" style={{cursor:'pointer', transform: `translateY(${translateY+(translateYnum*3)}px)` }}>
            <div className="text">
                <span className="upper">ПОДОБРАТЬ</span>
            <div className="line-wrapper">
                <div className="line"></div>
                <div className="circle"></div>
            </div>
                <span className="lower">РЕЗИДЕНЦИЮ</span>
            </div>
        </button>
        )
}
