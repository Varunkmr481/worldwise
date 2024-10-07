import getCountryCodeFromEmoji from "../getCountryCodeFromEmoji";
import styles from "./CountryItem.module.css";

/* eslint-disable react/prop-types */

function CountryItem({ country }) {
  const codeToFlag = getCountryCodeFromEmoji(country.emoji);

  return (
    <li className={styles.countryItem}>
      <span className={`fi fi-${codeToFlag}`}></span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
