import styles from "./Promo.module.scss";
import Dropdown from "../DropDown/DropDown.jsx";
function Promo() {
  return (
    <div className={styles.promo}>
      <video className={styles.video} autoPlay loop muted preload="auto">
        <source src="/videos/promo_video.mp4" type="video/mp4" />
        {/*<source src="video.webm" type="video/webm" />*/}
        Ваш браузер не поддерживает видео.
      </video>
      <div className={styles.container}>
        <h1 className={styles.promo__title}>
          ТИПОВЫЕ УСЛУГИ ПО РЕМОНТУ ПРОМЫШЛЕННОГО ОБОРУДОВАНИЯ И СПЕЦТЕХНИКИ
        </h1>
      </div>
      <div>
        <div className={styles.container}>
          <div className={styles.promo__type}>
            <div className={styles.promo__item}>
              <Dropdown />
            </div>
            <div className={styles.promo__item}>
              <p className={styles.promo__text}>Ремонт авто и спецтехники</p>
              <img src="/img/4.jpg" alt="alt" />
            </div>
            <div className={styles.promo__item}>
              <p className={styles.promo__text}>
                Ремонт лесозаготовительной техники
              </p>
              <img src="/img/2.jpg" alt="alt" />
            </div>
            <div className={styles.promo__item}>
              <p className={styles.promo__text}>
                Ремонт дорожно строительной техники
              </p>
              <img src="/img/3.jpg" alt="alt" />
            </div>
            <div className={styles.promo__item}>
              <p className={styles.promo__text}>
                Ремонт оборудования для производства и переработки пластиков
              </p>
              <img src="/img/1.jpg" alt="alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
