import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import MyForm from '../Form/Form.jsx';
import styles from '../Aplication/Aplication.module.scss';

function Aplication() {
  return (
    <div className={styles.container}>
      <div className={styles.aplication}>
        <MyForm />
        <div className={styles.aplication__info}>
          <h3 className={styles.aplication__title}>
            Получите <br /> консультацию <br />
            по ремонту <br /> вашего оборудования
          </h3>
          <p className={styles.aplication__description}>
            Заполнтие форму или свяжитесь с нами любым удобным способом.
            <br /> Наши специалисты ответят на все ваши вопросы.
          </p>
          <div className={styles.aplication__contacts}>
            <div className={styles.aplication__item}>
              <Mail size={34} color="#ff9900" />
              <a>Rockot@gmail.com</a>
            </div>
            <div className={styles.aplication__item}>
              <Phone size={34} color="#ff9900" />
              <a>8(986)746-52-00</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aplication;
