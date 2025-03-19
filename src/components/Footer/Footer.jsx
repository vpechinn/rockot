import { Button } from "antd";

import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import styles from "../Footer/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer__application}>
          <p>
            Не нашли своё оборудование? Оставьте заявку, и мы свяжемся с вами!
          </p>
          <Button color="danger" variant="solid" className={styles.footer__btn}>
            Оставить заявку
          </Button>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__item}>
            <Mail size={38} color="#f50000" />
            <a>rockot@gmail.com</a>
          </div>
          <div className={styles.footer__item}>
            <Phone size={36} color="#f50000" />
            <a>8800 255 255 85</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
