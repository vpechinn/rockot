import styles from "./Advantages.module.scss";

function Advantages() {
  return (
    <div className={styles.container}>
      <div className={styles.advantages}>
        <h2 className={styles.advantages__title}>Нащи приумещества</h2>
        <div className={styles.advantages__list}>
          <div className={styles.advantages__item}>
            <img src="/img/icons/car.svg" alt="1" />
            <p>Оперативный выезд</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="/img/icons/rocket.svg" alt="1" />
            <p>Большой станочный парк</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="/img/icons/graphs.svg" alt="1" />
            <p>10 лет опыта</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="/img/icons/security.svg" alt="1" />
            <p>Гарантийные обязательства</p>
          </div>
          <div className={styles.advantages__item}>
            <img src="/img/icons/world.svg" alt="1" />
            <p>Работаем по РФ и СНГ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
