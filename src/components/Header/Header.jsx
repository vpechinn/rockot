import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <div id="main" className={styles.header}>
        <div className={styles.header__top}>
          <div className={styles.header__logo}>
            <div>
              <img src="img/logo.webp" />
            </div>
            {/* <div>slogan</div> */}
          </div>
          <div className={styles.header__contacts}>
            <div className={styles.header__contacts_item}>
              <Mail size={28} color="#ff9900" />
              <a href="mailto:Rokot-nn@mail.ru">Rokot-nn@mail.ru</a>
            </div>
            <div className={styles.header__contacts_item}>
              <Phone size={28} color="#ff9900" />
              <a href="tel:+79867465200">8(986)746-52-00</a>
            </div>
          </div>
        </div>

        <div className={styles.header__bot}>
          <ul className={styles.header__nav}>
            <li>
              <a href="#about">О компании</a>
            </li>
            <li>
              <a href="#advantages">Наши преимущества</a>
            </li>
            <li>
              <a href="#works">Наши Проекты</a>
            </li>
            <li>
              <a href="#solution">Готовые решения</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
