import React, { useState } from 'react'
import "../../../styles/CustomSlider.scss";
import im1 from '../../../images/cam4_2.webp'
import im2 from '../../../images/5.webp'
import im3 from '../../../images/3.webp'
import im4 from '../../../images/4.webp'
import im5 from '../../../images/5.webp'

const CustomSlider = () => {
    const images = [
        {
            title: "Перформанс-дворы авангардистов",
            subtitle: "Галерея возможностей",
            number: "1",
            image: im1,
        },
        {
            title: "от 2-х квартир на этаже. Высота потолков до 4,2 м",
            subtitle: "Дом Бизнес - класса",
            number: "2",
            image: im2,
        },
        {
            title: "Перформанс-дворы авангардистов",
            subtitle: "Квартиры с ремонтом",
            number: "3",
            image: im3,
        },
        {
            title: "от 2-х квартир на этаже. Высота потолков до 4,2 м",
            subtitle: "Галерея возможностей",
            number: "4",
            image: im4,
        },
        {
            title: "Перформанс-дворы авангардистов",
            subtitle: "Дом Бизнес - класса",
            number: "5",
            image: im5,
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0); // текущее изображение
    const currentImage = images[currentIndex].image;
    const currentTitle = images[currentIndex].title;
    const currentSubtitle = images[currentIndex].subtitle;


    const [isAnimating, setIsAnimating] = useState(false); // Чтобы контролировать анимацию

    const handleNext = () => {
        setIsAnimating(true); // Начинаем анимацию
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
            setIsAnimating(false); // Останавливаем анимацию после смены слайда
        }, 500); // Время анимации должно совпадать с transition в CSS
    };

    const handlePrev = () => {
        setIsAnimating(true); // Начинаем анимацию
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex - 1 + images.length) % images.length
            );
            setIsAnimating(false); // Останавливаем анимацию после смены слайда
        }, 500); // Время анимации должно совпадать с transition в CSS
    };

    return (
        <div className="slider-container">
            <div className="center-content">
                <img className={` ${isAnimating ? 'fade' : ''}`} src={images[currentIndex].image} />
                <h3 className='right-image-container__text'>
                    {currentTitle}
                </h3>
                <h3 className='right-image-container__text-vertical'>
                    {currentSubtitle}
                </h3>
            </div>
            <div className="right-content">
                <div className="right-image-container">

                    <img className={` ${isAnimating ? 'fade' : ''}`} src={images[(currentIndex + 1) % images.length].image} />
                    <span className="slide-number">{currentIndex + 1}</span>
                    <div className="right-content-arrows">

                        <PrevArrow onClick={handlePrev} />
                        <NextArrow onClick={handleNext} />
                        <div className="right-content-arrows-num-block">/ 5</div>
                    </div>
                    <img src={images[(currentIndex + 2) % images.length].image} className={`img-num3 ${isAnimating ? 'fade' : ''} `} />
                </div>
            </div>
        </div>



    );
};

// Кастомные стрелки для слайдера
const NextArrow = (props) => {
    const { onClick } = props;

    return (
        <div className="slick-arrow next-arrow" onClick={onClick}>
            <span>→</span>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow prev-arrow" onClick={onClick}>
            <span>←</span>
        </div>
    );
};

export default CustomSlider;
