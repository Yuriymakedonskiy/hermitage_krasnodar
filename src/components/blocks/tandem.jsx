import React from 'react'
import '../../styles/tandem.scss'
import dvor from '../../images/5.webp'

export const Tandem = () => {
  return (
    <div className="tandem__container">
      <div className="image-content">
        <h1 className='tandem__h1'>ТАНДЕМ ИСКУССТВА И ПРИРОДЫ</h1>
        <img src={dvor} alt="dvor" />
      </div>
      <div className="tandem__container_text-content">
        <span className='tandem__container_text-content-title'>ГУЛЯТЬ ПО СОБСТВЕННОМУ ДВОРУ СЛОВНО ПО МУЗЕЮ — ЭТО ЭРМИТАЖ.</span>
        <br />
        <br />
        <h6 className='tandem__container_text-content_sub_title'>
          Аллея авангардистов пронизывает весь Квартал. Она предлагает резидентам прогуляться по Скверу Малевича, а затем очутиться на площади Кандинского. После этого вы можете насладиться всеми оттенками изумрудного на Зеленом променаде Рязановой и завершить это путешествие соприкосновением с абстракционизмом на Площади Лисицкого.
        </h6>
      </div>
    </div>
  )
}
