import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__top}>
          <div className={styles.header__logo}>
            <div>logo</div>
            <div>slogan</div>
          </div>
          <div className={styles.header__contacts}>
            <div className={styles.header__contacts_item}>
              <Mail size={28} color="#FAD65A" />
              <a>Rokot-nn@mail.ru</a>
            </div>
            <div className={styles.header__contacts_item}>
              <Phone size={28} color="#FAD60A" />
              <a>8(986)746-52-00</a>
            </div>
          </div>
        </div>

        <div className={styles.header__bot}>
          <ul className={styles.header__nav}>
            <li>О компании</li>
            <li>Наши преимущества</li>
            <li>Наши Проектын</li> 
            <li>Готовые решения</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
