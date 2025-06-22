import React from 'react';
import styles from '../Footer/Footer.module.scss';
import { Phone, Mail, MapPin } from 'lucide-react';
function Footer() {
  return (
    <div className={styles.footer}>
      <div id="contacts" className={styles.footer__container}>
        <div className={styles.footer__list}>
          <a href="#main" className={styles.footer__item}>
            О компании
          </a>
          <a href="#works" className={styles.footer__item}>
            Наши работы
          </a>
          <a className={styles.footer__item}>Контакты</a>
        </div>
        <div>
          <iframe
            className={styles.footer__map}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2e526f5f344dc017815916a9dea59dfe58c50d2dc5c2907e2ad44ffd1c7b29ea&amp;source=constructor"
            width="723"
            height="351"
            frameborder="0"></iframe>
        </div>
        <div className={styles.footer__info}>
          <div className={styles.footer__logo}>
            <img src="img/logo.webp" />
            <div>Ваше подразделение</div>
          </div>
          <div className={styles.footer__contacts}>
            <div className={styles.footer__contacts_item}>
              <MapPin size={28} color="#ff9900" />
              <a>Новикова прибоя 16А</a>
            </div>
            <div className={styles.footer__contacts_item}>
              <Phone size={28} color="#ff9900" />
              <a href="tel:+79867465200">8(986)746-52-00</a>
            </div>
            <div className={styles.footer__contacts_item}>
              <Mail size={28} color="#ff9900" />
              <a href="mailto:Rokot-nn@mail.ru">Rokot-nn@mail.ru</a>
            </div>
          </div>
          <div className={styles.footer__social}>
            <div>
              <a target="_blank" href="https://web.telegram.org/a/#7275743684">
                <img src="img/icons/telegram.png" alt="telegram" />
              </a>
            </div>
            <div>
              <img src="img/icons/whatsapp.png" alt="whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
