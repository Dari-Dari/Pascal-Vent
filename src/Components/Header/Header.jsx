import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const Header = ({ isScrolled }) => {
  const [scrolled, setScrolled] = useState(isScrolled);

  useEffect(() => {
    setScrolled(isScrolled);
  }, [isScrolled]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <a className={styles.logo}></a>
        <div>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>услуги</li>
            <li className={styles.nav_item}>о нас</li>
            <li className={styles.nav_item}>польза продукта</li>
            <li className={styles.nav_item}>оборудование</li>
            <li className={styles.nav_item}>этапы работы</li>
            <li className={styles.nav_item}>отзывы</li>
          </ul>
        </div>
        <div className={styles.alignRight}>
          <Button
            widthDiv={210}
            heightDiv={75}
            radiusDiv={20}
            width={190}
            height={55}
            radius={17}
            fontSize={15}
            text={"СВЯЗАТЬСЯ"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
