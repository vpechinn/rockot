import styles from './Works.module.scss';

import data from '../../data/products.js';

function Works() {
  return (
    <div className={styles.container}>
      <div id="works" className={styles.works}>
        <h2 className={styles.works__title}>НАШИ ПРОЕКТЫ</h2>
        <div className={styles.works__list}>
          {data.map((item) => (
            <div key={item.id} className={styles.works__card}>
              <img src={item.image} alt={item.title} className={styles.works__img} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.works__btn}>посмотреть все работы</button>
    </div>
  );
}

export default Works;
