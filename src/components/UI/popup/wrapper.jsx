import React, { useState } from 'react'
import '../../../styles/wrapper.scss'
import arrow_list from '../../../images/chevron-down.svg'
import img1 from '../../../images/12.webp'
import img2 from '../../../images/10.webp'
import img3 from '../../../images/11.webp'
import img4 from '../../../images/12.webp'
import img5 from '../../../images/10.webp'
import img6 from '../../../images/11.webp'
import img7 from '../../../images/12.webp'
import img8 from '../../../images/10.webp'
import img9 from '../../../images/11.webp'
import img10 from '../../../images/12.webp'
import img11 from '../../../images/10.webp'
import img12 from '../../../images/11.webp'
import img13 from '../../../images/12.webp'
import img14 from '../../../images/10.webp'

export const WrapperMenu = ({ clickNum }) => {
    const [fixbarList, setFixbarList] = useState(false)
    const [fixbarList2, setFixbarList2] = useState(false)
    const [translateLeftSwiper, setTranslateLeftSwiper] = useState('')
    const [translateRightSwiper, setTranslateRightSwiper] = useState('')
    return (
        <>
            <aside className={`fixbar column ${clickNum ? 'active' : ''}`}>
                <div class="fixbar-plug"></div>

                <div className="wrapper">
                    <div className="fixbar-container">
                        <div className="fixbar-menu">
                            <a href="" className='fixbar-menu_el li1 delay-1' onMouseEnter={() => { setTranslateLeftSwiper('0px'); setTranslateRightSwiper('-1570px') }}>
                                <h4 className='section_title'>Концепция проекта</h4>
                            </a>


                            <div className={`fixbar-menu_el_list o_proecte ${fixbarList ? 'active' : ''}`}>
                                <div className='fixbar-menu_el_list-index fixbar-menu_el delay-2 li2' onClick={() => setFixbarList(!fixbarList)} onMouseEnter={() => { setTranslateLeftSwiper('-330px'); setTranslateRightSwiper('-1240px') }}>
                                    <h4 className='section_title'>о проекте</h4>
                                    <img src={arrow_list} loading="lazy" />
                                </div>
                                <div class="fixbar-menu_el_list-content">
                                    <a href="architecture/" class="fixbar-adress">Архитектура</a>
                                    <a href="location/" class="fixbar-adress">Локация</a>
                                    <a href="territory/" class="fixbar-adress">Территория</a>
                                    <a href="infrastructure/" class="fixbar-adress">Инфраструктура</a>
                                </div>
                            </div>


                            <a href="" className='fixbar-menu_el delay-3 li3' onClick={() => setFixbarList(!fixbarList)} onMouseEnter={() => { setTranslateLeftSwiper('-670px'); setTranslateRightSwiper('-910px') }}>
                                <h4 className='section_title'>умные системы</h4>
                            </a>
                            <a href="" className='fixbar-menu_el delay-4 li4' onClick={() => setFixbarList(!fixbarList)} onMouseEnter={() => { setTranslateLeftSwiper('-1010px'); setTranslateRightSwiper('-580px') }}>
                                <h4 className='section_title'>паркинг</h4>
                            </a>
                            <div className={`fixbar-menu_el_list kak_kupit li5 ${fixbarList2 ? 'active' : ''}`}>
                                <div className='fixbar-menu_el_list-index fixbar-menu_el delay-5' onClick={() => setFixbarList2(!fixbarList2)} onMouseEnter={() => { setTranslateLeftSwiper('-1010px'); setTranslateRightSwiper('-250px') }}>
                                    <h4 className='section_title'>как купить</h4>
                                    <img src={arrow_list} loading="lazy" />
                                </div>
                                <div class="fixbar-menu_el_list-content">
                                    <a href="architecture/" class="fixbar-adress">рассрочка</a>
                                    <a href="location/" class="fixbar-adress">100% оплата</a>
                                    <a href="territory/" class="fixbar-adress">дистантионная сделка</a>
                                </div>
                            </div>

                            <a href="" className='fixbar-menu_el delay-6' onMouseEnter={() => { setTranslateLeftSwiper('-1010px'); setTranslateRightSwiper('-40px') }}>
                                <h4 className='section_title li6'>акции</h4>
                            </a>

                            <div className="fixbar-menu_bottom">
                                <div className="fixbar-menu_bottom_adresses">
                                    <a href="novosti/" className="fixbar-adress delay-7">
                                        <span>Новости</span>
                                    </a>
                                    <a href="hod-stroitelstva/" className="fixbar-adress delay-8">
                                        <span>Ход&nbsp;строительства</span>
                                    </a>
                                    {/*<a href="pamyatka-dolshhiku/" class="fixbar-adress delay-8"><span>Памятка дольщика</span></a> */}
                                    <a href="dokumenty/" className="fixbar-adress delay-9">
                                        <span>Документы</span>
                                    </a>
                                    <a href="o-kompanii/" className="fixbar-adress delay-10">
                                        <span>О&nbsp;застройщике</span>
                                    </a>
                                    <a href="contacts/" className="fixbar-adress delay-11">
                                        <span>Контакты</span>
                                    </a>
                                </div>
                                <div className="fixbar-menu_bottom_rightside">
                                    <a
                                        data-fancybox=""
                                        data-type="iframe"
                                        href="https://dzen.ru/embed/vbzRKafMS5AI?from_block=partner&from=zen&backoffice=1&mute=1&autoplay=1&tv=0"
                                        className="fixbar-other-adress"
                                    >
                                        <svg
                                            width={60}
                                            height={60}
                                            viewBox="0 0 60 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={30} cy={30} r={29} stroke="#D3B6A5" strokeWidth={2} />
                                            <path d="M43 30.5L24 41L24 20L43 30.5Z" fill="#D3B6A5" />
                                        </svg>
                                        <span className='fixbar-other-adress_span'>видео о&nbsp;проекте</span>
                                    </a>
                                    <a
                                        href="assets/templates/hermitage/docs/buklet-ermitazh.pdf"
                                        className="fixbar-other-adress"
                                        target="_blank"
                                    >
                                        <svg
                                            width={60}
                                            height={60}
                                            viewBox="0 0 60 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={30} cy={30} r={29} stroke="#D3B6A5" strokeWidth={2} />
                                            <path
                                                d="M29.0001 20H31.0001V34.4853L34.2428 31.2427L35.657 32.6569L30.0001 38.3137L24.3433 32.6569L25.7575 31.2427L29.0001 34.4853V20Z"
                                                fill="#D3B6A5"
                                            />
                                            <path d="M36 39.2877H24V41.2877H36V39.2877Z" fill="#D3B6A5" />
                                        </svg>
                                        <span className='fixbar-other-adress_span'>скачать PDF-буклет</span>
                                    </a>
                                </div>
                            </div>


                        </div>
                        {/* <Swipers/> */}

                        <div className="fixbar-swipers">
                            <div className="fixbar_swiper fixbar_swiper_left swiper-initialized swiper-vertical swiper-free-mode swiper-backface-hidden">
                                <div
                                    className="swiper-wrapper swiper-wrapper_left"
                                    id="swiper-wrapper-fab5e3a6eb8b69a4"
                                    aria-live="polite"

                                    style={{
                                        transform: `translate3d(0px, ${translateLeftSwiper}, 0px)`,
                                    }}
                                >
                                    <div
                                        className="swiper-slide swiper-slide-active"
                                        role="group"
                                        aria-label="1 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img1} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-next"
                                        role="group"
                                        aria-label="2 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img2} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="3 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img3} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="4 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img4} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="5 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img5} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="6 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img6} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="7 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img7} loading="lazy" />
                                    </div>
                                </div>
                                <span
                                    className="swiper-notification"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                />
                            </div>

                            <div className="fixbar_swiper fixbar_swiper_right swiper-initialized swiper-vertical swiper-free-mode swiper-backface">
                                <div
                                    className="swiper-wrapper swiper-wrapper_right"
                                    id="swiper-wrapper-1ada76110e105fc10f10"
                                    aria-live="polite"

                                    style={{
                                        transform: `translate3d(0px, ${translateRightSwiper}, 0px)`,
                                    }}
                                >
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="1 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img8} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="2 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img9} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="3 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img10} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide"
                                        role="group"
                                        aria-label="4 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img11} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-prev"
                                        role="group"
                                        aria-label="5 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img12} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-active"
                                        role="group"
                                        aria-label="6 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img13} loading="lazy" />
                                    </div>
                                    <div
                                        className="swiper-slide swiper-slide-next"
                                        role="group"
                                        aria-label="7 / 7"
                                        style={{ marginBottom: 30 }}
                                    >
                                        <img src={img14} loading="lazy" />
                                    </div>
                                </div>
                                <span
                                    className="swiper-notification"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>

    )
}
