import React from 'react';
import Logo from '../logo/logo';
import Wrapper from '../wrapper/wrapper';
import {ReactComponent as FacebookIcon} from '../../assets/img/svg/icon-facebook.svg';
import {ReactComponent as InstagramIcon} from '../../assets/img/svg/icon-instagram.svg';
import {ReactComponent as TwitterIcon} from '../../assets/img/svg/icon-twitter.svg';
import {ReactComponent as PhoneIcon} from '../../assets/img/svg/icon-phone.svg';
import {ReactComponent as ClockIcon} from '../../assets/img/svg/icon-clock.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__mask" />
      <Wrapper name={`footer`}>
        <div className="footer__content-wrapper footer__content-wrapper--left">
          <Logo block={`footer`} />
          <ul className="footer__list footer__list--social">
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">
                <FacebookIcon />
              </a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">
                <InstagramIcon />
              </a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--about">
          <h3 className="footer__title">О нас</h3>
          <p className="footer__description">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
          <p className="footer__description">Все инструменты проверены, отстроены и доведены до идеала!</p>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--catalog">
          <h3 className="footer__title">Каталог</h3>
          <ul className="footer__list">
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Акустические гитары</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Классические гитары</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Электрогитары</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Бас-гитары</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Акулеле</a>
            </li>
          </ul>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--info">
          <h3 className="footer__title">Информация</h3>
          <ul className="footer__list">
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Где купить?</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Блог</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Вопрос - ответ</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Возврат</a>
            </li>
            <li className="footer__item">
              {/*eslint-disable-next-line*/}
              <a href="#" className="footer__link">Сервис-центры</a>
            </li>
          </ul>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--contacts">
          <h3 className="footer__title">Контакты</h3>
          <p className="footer__description">
            г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.
            <a href="tel: 8-812-500-50-50" className="footer__link footer__link--phone">
              <PhoneIcon className="footer__contacts-icon" />
              8-812-500-50-50
            </a>
          </p>
          <p className="footer__description">
            Режим работы:
            <br />
            <span className="footer__span">
              <ClockIcon className="footer__contacts-icon" />
              с 11:00 до 20:00,
            </span>
            <br />
            без выходных.</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
