import styles from "./App.module.css";
import entrenceLogo from "./images/entrence.png";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.dateContainer}>
          <span>10</span>
          <span className={styles.dot}>•</span>
          <span>10</span>
          <span className={styles.dot}>•</span>
          <span>24</span>
        </section>

        <section className={styles.namesContainer}>
          <span>Алесь</span>
          <span>и</span>
          <span>Екатерина</span>
        </section>

        <p className={styles.entrenceText}>
          10 октября 2024 года мы очень хотим оказаться в окружении самых
          близких и дорогих для нас людей. С огромным удовольствием приглашаем
          вас разделить с нами это радостное событие - нашу свадьбу!
        </p>

        <img
          src={entrenceLogo}
          alt="black cat"
          className={styles.entrenceLogo}
          width="300px"
        />
      </div>
    </div>
  );
};

export default App;
