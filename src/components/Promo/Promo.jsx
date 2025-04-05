import styles from './Promo.module.scss';
import Dropdown from '../DropDown/DropDown.jsx';
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
          УСЛУГИ ПО РЕМОНТУ ПРОМЫШЛЕННОГО ОБОРУДОВАНИЯ И СПЕЦТЕХНИКИ
        </h1>
      </div>
    </div>
  );
}

export default Promo;
