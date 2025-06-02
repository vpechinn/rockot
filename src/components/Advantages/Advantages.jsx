import styles from './Advantages.module.scss';

function Advantages() {
  return (
    <div className={styles.container}>
      <div className={styles.advantages}>
        <h2 className={styles.advantages__title}>Наши приемущества</h2>
        <div className={styles.advantages__list}>
          <div className={styles.advantages__item}>
            <img src="img/icons/check.png" alt="приемущества" />
            <h4>Высокое качество услуг</h4>
            <p>
              Гарантируем высокое качество услуг благодаря профессионализму и современному
              оборудованию.
            </p>
          </div>
          <div className={styles.advantages__item}>
            <img src="img/icons/workers.png" alt="приемущества" />
            <h4>Опытная команда</h4>
            <p>Наши специалисты имеют многолетний опыт и постоянно повышают квалификацию.</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="img/icons/handshake.png" alt="приемущества" />
            <h4>Индивидуальный подход</h4>
            <p>Предлагаем рещения, учитывающие уникальные потребности каждого клиента.</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="img/icons/deadline.png" alt="приемущества" />
            <h4>Скорость выполнения робот</h4>
            <p>Выполняем заказы быстро, минимизируя простой оборудования.</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="img/icons/price.png" alt="приемущества" />
            <h4>Кокнкуретные цены</h4>
            <p>Предлагаем разумные и прозрачные цены на все услуги.</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="img/icons/ight.png" alt="приемущества" />
            <h4>Современные технологии</h4>
            <p>Используем новейшие технологии для диагностики и ремонта</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="img/icons/guarantee.png" alt="приемущества" />
            <h4>Гарантия на услуги</h4>
            <p>Предоставляем гарантию на все выполненные работы.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
