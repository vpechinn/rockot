import styles from './Advantages.module.scss';

function Advantages() {
  return (
    <div className={styles.container}>
      <div className={styles.advantages}>
        <h2 className={styles.advantages__title}>Отзывы о нашей работе</h2>
        <div className={styles.advantages__list}>
          <div className={styles.advantages__item}>
            <p>Оперативный выезд</p>
          </div>
          <div className={styles.advantages__item}>
            <p>Большой станочный парк</p>
          </div>
          <div className={styles.advantages__item}>
            <p>10 лет опыта</p>
          </div>
          <div className={styles.advantages__item}>
            <p>Гарантийные обязательства</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
