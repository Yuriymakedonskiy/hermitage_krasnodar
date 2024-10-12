import React, { useState } from 'react'
import logo from '../images/Logo_txt.svg'
import burger from '../images/icons/burger.svg'
import '../styles/header.scss'
import { Rezidencia } from './UI/button/rezidencia'
import { Zvonok } from './UI/button/zvonok'
import { WrapperMenu } from './UI/popup/wrapper'
export const Header = () => {
  const [clickNum, setclickNum] = useState(false);

  return (
    <>

      <header className="header">
        <div className="header__left">
          <img src={logo} alt="Эрмитаж" className='header__logo' />
          <Rezidencia />
        </div>
        <div className="header__right">
          <Zvonok />
          <span className='header__number'>+7 968 879-54-85</span>
          <div className={clickNum ? 'header__burger active' : 'header__burger'} onClick={() => setclickNum((clickNum) => !clickNum)} id="burger">
            <svg width="60" height="14" viewBox="0 0 60 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect class="rect-top" width="60" height="2" rx="1" fill="white" />
              <rect class="rect-bottom" y="12" width="60" height="2" rx="1" fill="white" />
            </svg>
          </div>
        </div>
      </header>
      <WrapperMenu clickNum={clickNum} />
    </>
  )
}
