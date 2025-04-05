import styles from './Advantages.module.scss';

function Advantages() {
  return (
    <div className={styles.container}>
      <div className={styles.advantages}>
        <h2 className={styles.advantages__title}>Отзывы о нашей работе</h2>
        <div className={styles.advantages__list}>
          <div className={styles.advantages__item}>
            <img
              src="https://www.pnevmoteh.ru/sites/pnevmoteh.ru/files/styles/large/public/images/letter_scans/blagodarstvennoe_pismo_remprofservis.png?itok=dCSDZCMe"
              alt="1"
            />
            <p>Оперативный выезд</p>
          </div>
          <div className={styles.advantages__item}>
            <img
              src="https://www.pnevmoteh.ru/sites/pnevmoteh.ru/files/styles/large/public/images/letter_scans/blagodarstvennoe_pismo_remprofservis.png?itok=dCSDZCMe"
              alt="1"
            />
            <p>Большой станочный парк</p>
          </div>
          <div className={styles.advantages__item}>
            <img
              src="https://www.pnevmoteh.ru/sites/pnevmoteh.ru/files/styles/large/public/images/letter_scans/blagodarstvennoe_pismo_remprofservis.png?itok=dCSDZCMe"
              alt="1"
            />
            <p>10 лет опыта</p>
          </div>
          <div className={styles.advantages__item}>
            <img
              src="https://www.pnevmoteh.ru/sites/pnevmoteh.ru/files/styles/large/public/images/letter_scans/blagodarstvennoe_pismo_remprofservis.png?itok=dCSDZCMe"
              alt="1"
            />
            <p>Гарантийные обязательства</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
