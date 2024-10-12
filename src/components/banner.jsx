import React, { useEffect, useState } from 'react'
import building from '../images/buildBanner.webp'
import '../styles/banner.scss'
import { BannerButtom } from './UI/button/bannerButtom';
import { OffersMore } from './UI/button/offersMore';
import CustomSlider from './UI/CustomSlider/CustomSlider';
import { Tandem } from './blocks/tandem';
export const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(1); // For controlling the opacity of non-building elements
  const [scaleValue, setScaleValue] = useState(0.8); // For controlling the opacity of non-building elements
  const [opacityHoverEl, setOpacityHoverEl] = useState(0); // For controlling the opacity of non-building elements
  const [translateYnum, settranslateYnum] = useState(0); // For controlling the opacity of non-building elements
  const [height, setHeigth] = useState(''); // For controlling the opacity of non-building elements
  const [translateImg, setTranslateImg] = useState(-40); // For controlling the opacity of non-building elements

  // useEffect(() => {0

  const buttonRezidenziya = () => {
    const handleScroll = () => {
      settranslateYnum(-270)
      setTranslateImg(50)
      setOpacity(0); // Set opacity for other elements
      setOpacityHoverEl(1)
      setScaleValue(.8);
      setHeigth('150vh')
    };
    handleScroll()

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    // return () => {
    window.removeEventListener('scroll', handleScroll);
    // };
    // }, []);
  };
  const speed = 0.2;
  const translateY = -(scrollPosition * speed);

  return (
    <>

      <div className="container-linear">
        <div className="line-left-1"></div>
        <div className="line-left-2"></div>
        <div className="line-left-3"></div>
        <div className="line-right-1"></div>
        <div className="line-right-2"></div>
        <div className="line-right-3"></div>
      </div>
      <div className='banner'>


        <header className="banner__header"
        >
          {/* SVG Logo */}
          <svg className='AnimationScroll' style={{ transform: `translateY(${translateY + translateYnum}px)` }} width="962" height="205" viewBox="0 0 1462 185" fill="#D3B6A5" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_7825)">
              <path d="M92.6444 0.0151685C109.866 -0.280073 126.87 3.73916 141.99 11.6783C156.201 19.2556 167.909 30.5305 175.772 44.2124C183.732 58.8648 187.89 75.1534 187.89 91.6876C187.89 108.222 183.732 124.511 175.772 139.163C167.905 152.836 156.198 164.102 141.99 171.672C126.87 179.612 109.866 183.631 92.6444 183.336C78.2217 183.398 63.9037 180.979 50.3663 176.19C37.2313 171.574 25.5166 163.847 16.304 153.723C6.75356 142.904 1.04164 129.433 0 115.272L27.4029 111.515C28.6276 127.23 35.2785 139.572 47.3555 148.542C59.4326 157.513 74.5288 162.023 92.6444 162.072C104.207 162.223 115.621 159.545 125.814 154.288C135.711 149.145 143.967 141.506 149.696 132.189C155.881 122.094 159.509 110.738 160.284 99.0415L73.5338 101.816V79.2265L159.901 82.0011C158.944 70.6708 155.182 59.7256 148.93 50.0809C143.119 41.1064 134.929 33.7837 125.201 28.8662C115.123 23.855 103.911 21.3242 92.5678 21.4999C74.4693 21.4999 59.373 25.977 47.279 34.931C35.185 43.885 28.5341 56.2357 27.3264 71.983L0 68.1035C1.0417 53.95 6.75394 40.4867 16.304 29.6764C25.5084 19.5381 37.225 11.8017 50.3663 7.18498C63.9021 2.38841 78.2202 -0.0397764 92.6444 0.0151685Z" fill="#D3B6A5" />
              <path d="M268.798 3.7988C279.963 3.56105 291.027 5.88398 301.075 10.5757C309.849 14.7042 317.26 21.0966 322.482 29.0403C327.441 36.964 330.061 46.0388 330.061 55.2886C330.061 64.5384 327.441 73.6132 322.482 81.5369C317.239 89.4698 309.835 95.8653 301.075 100.026C291.004 104.729 279.913 107.052 268.722 106.803H260.914V141.964L262.216 179.63H233.588L234.889 141.964V38.9847L233.588 3.8233H268.798V3.7988ZM268.798 86.6932C279.234 86.6932 287.475 83.8695 293.573 78.1484C299.454 71.8844 302.71 63.7429 302.71 55.3009C302.71 46.8589 299.454 38.7173 293.573 32.4533C287.467 26.7568 279.208 23.9004 268.798 23.884H260.991V86.6932H268.798Z" fill="#D3B6A5" />
              <path d="M580.895 3.79883L579.568 38.9601V141.94L580.895 179.606H553.492L554.793 141.94V45.246L488.506 136.931H467.609L401.857 45.246V141.94L403.159 179.606H375.781L377.082 141.94V38.9601L375.781 3.79883H398.745L478.351 115.274L557.957 3.79883H580.92H580.895Z" fill="#D3B6A5" />
              <path d="M816.27 3.79883L814.943 38.9601V141.94L816.27 179.606H788.867L790.168 141.94V39.2057L666.191 179.606H641.927L643.228 141.94V38.9601L641.927 3.79883H669.33L668.003 38.9601V144.199L791.979 3.82333H816.27V3.79883Z" fill="#D3B6A5" />
              <path d="M948.643 179.603H919.939L921.24 141.937V23.881L849.467 27.6623L852.095 3.82031H1016.51L1019.11 27.6623L947.367 23.881V141.937L948.668 179.603H948.643Z" fill="#D3B6A5" />
              <path d="M1096.35 3.79883H1118.78L1202.54 179.606H1171.13L1159.65 148.201L1147.38 120.578H1067.01L1054.48 148.201L1043 179.606H1012.38L1096.14 3.79883H1096.35ZM1107.83 31.9377L1076.5 100.493H1138.35L1107.73 31.9377H1107.83Z" fill="#D3B6A5" />
              <path d="M1387.32 76.4051C1396.71 78.6347 1405.34 83.1692 1412.37 89.5661C1418.98 95.6615 1424.54 102.732 1428.83 110.511C1434.06 120.285 1438.77 130.307 1442.94 140.54C1447.12 150.084 1450.53 157.581 1453.15 163.032C1455.81 168.397 1458.91 173.553 1462.41 178.452V179.728H1431.79C1428.31 174.72 1425.3 169.429 1422.78 163.916C1420.08 158.055 1417.08 151.107 1413.78 143.069C1409.08 131.496 1404.99 122.37 1401.5 115.692C1398.21 109.22 1393.6 103.457 1387.93 98.7492C1382.25 94.0903 1374.98 91.6233 1367.52 91.8251H1352.03V141.94L1353.36 179.606H1327.26L1328.56 141.94V91.7268H1312.92C1305.46 91.5203 1298.18 93.988 1292.5 98.6511C1286.85 103.365 1282.23 109.127 1278.93 115.593C1275.43 122.305 1271.34 131.431 1266.66 142.971C1263.34 150.992 1260.34 157.941 1257.65 163.817C1255.13 169.331 1252.12 174.622 1248.64 179.63H1218.03V178.353C1221.53 173.455 1224.63 168.299 1227.29 162.934C1229.99 157.483 1233.4 149.985 1237.49 140.442C1242.72 128.067 1247.41 118.057 1251.58 110.412C1255.88 102.676 1261.43 95.6405 1268.01 89.5661C1275.03 83.1609 1283.67 78.6252 1293.07 76.4051L1234.08 3.82333H1266.71L1284.98 32.6989L1317.08 74.1461H1328.3V38.9602L1327 3.79883H1353.31L1352.01 38.9602V74.1461H1363.23L1395.33 32.6989L1413.52 3.82333H1446.15L1387.24 76.4051H1387.32Z" fill="#D3B6A5" />
            </g>
            <defs>
              <clipPath id="clip0_1_7825">
                <rect width="1462" height="185" fill="#D3B6A5" />
              </clipPath>
            </defs>

          </svg>
          {/* Your SVG Path content */}
          <div className="AnimationScroll" style={{ transform: `translateY(${translateY + (translateYnum * 3) - 200}px)` }}>
            <div className="banner__header-background-icon" />
          </div>
        </header>

        <section className="banner__content">
          <div className="banner__content_description" >
            <p style={{ opacity: opacity }}>Первый культурный квартал в Краснодаре</p>
            <BannerButtom buttonRezidenziya={buttonRezidenziya} translateY={translateY} translateYnum={translateYnum} />

          </div>

          {/* Only building image stays visible */}
          <div className="banner__content_image-wrapper parallax"
            style={{ height: height, transform: `translateY(${translateY + translateImg}px) scale(${scaleValue})` }}
          >
            {/* <img
              src={building}
              alt="здание"
              className='building-image'
              style={{ transform: `translateY(${translateY + translateYnum}px) scale(${scaleValue})` }}
            /> */}
            {/* <div class="gradient-overlay"></div> */}

          </div>
          <div class="gradient-overlay_out"></div>

          <div style={{ opacity: opacityHoverEl }} className="third_button_hover_n1">
            <span>
              ИНФРАСТРУКТУРА
            </span>
            <div className="third_button_hover_n1-circle"></div>
            <div class="tooltip_text">
              Выразительный силуэт дома подчёркивают закруглённые архитектурные формы и пастельные тона фасадов. Панорамные окна создают уникальный паттерн и придают зданию облик лучших клубных домов мира.            </div>
          </div>

          <div style={{ opacity: opacityHoverEl }} className="third_button_hover_n2">
            <span>
              ТЕРРИТОРИЯ
            </span>
            <div className="third_button_hover_n2-circle"></div>
            <div class="tooltip_text tooln2">
              Квартал спроектирован по инновационной системе модулей. Всего 6 домов переменной этажности пропускают во дворы много света и одновременно сохраняют приватную атмосферу закрытой территории Эрмитажа. Внутри дворов же царит спокойствие и безопасность благодаря car free зонам.
            </div>
          </div>

          <div style={{ opacity: opacityHoverEl }} className="third_button_hover_n3">
            <span>
              ФАСАДЫ
            </span>
            <div className="third_button_hover_n3-circle"></div>
            <div class="tooltip_text tool_n3">
              Внутри Квартала создана своя экосистема, которая удовлетворяет любой запрос резидентов. Престижный детский сад для юных жителей, променады, аллеи и скверы для ценителей природы. А те, кто живёт в активном ритме, оценят Галерею возможностей, спорт хабы, а также лаунж-зоны с портами для зарядки гаджетов во дворах.
            </div>
          </div>

        </section>
      </div>

      <div className="offers__container">
        <div id='offers__content_p'>
          ПОКА МИР ЖДЁТ РЕЗИДЕНТОВ
          КУЛЬТУРНОГО КВАРТАЛА СНАРУЖИ,
          ОНИ НАСЛАЖДАЮТСЯ ЭСТЕТИКОЙ
          ЖИЗНИ ВНУТРИ.
        </div>
        <div className="block-right">

          <div id='offers__content_p2'>
            <h4 className='offers__title'>
              Квартиры от 4,5 млн₽
            </h4>
            <h5 className='offers__subtitle'>Только на старте продаж</h5>
            <OffersMore />

          </div>

          <div id='offers__content_p2'>
            <h4 className='offers__title'>
              Не упустите уникальное предложение!
            </h4>
            <h5 className='offers__subtitle '>Выгода до 700 000 ₽</h5>
            <OffersMore />

          </div>
        </div>
      </div>
      <br />
      <CustomSlider />

      <Tandem />

    </>

  );
};