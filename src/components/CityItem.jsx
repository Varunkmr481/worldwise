/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../hooks/useCities";
import getCountryCodeFromEmoji from "../getCountryCodeFromEmoji";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  // eslint-disable-next-line
  const { cityName, emoji, date, id, position } = city;
  const codeToFlag = getCountryCodeFromEmoji(emoji);

  function handleClick(e) {
    e.preventDefault();

    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        {/* <span className={styles.emoji}>{emoji}</span> */}
        <span className={`${styles.emoji} fi fi-${codeToFlag}`}></span>

        <h3 className={styles.name}>{cityName}</h3>

        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          {" "}
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
