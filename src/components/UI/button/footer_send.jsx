import React from 'react'
import "../../../styles/footer_send.scss"
export const FooterSend = () => {
    return (
        <button className="footer-button" style={{ cursor: 'pointer' }}>
            <div className="footer-button_text">
                <span className="footer-button_upper">Отправить</span>
                <div className="footer-button_line-wrapper">
                    <div className="footer-button_line"></div>
                    <div className="footer-button_circle"></div>
                </div>
            </div>
        </button>
    )
}
