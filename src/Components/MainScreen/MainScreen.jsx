import { forwardRef } from "react";
import style from "./MainScreen.module.scss";
import Button from "../Button/Button";

// eslint-disable-next-line react/display-name
const MainScreen = forwardRef((props, ref) => {
  return (
    <>
      <section className={style.container}>
        <div ref={ref} className={style.mainScreen}>
          <h2>Чистый Воздух</h2>
          <h2 className={style.mainLine}>Вместе С</h2>
          <h1>PASCAL VENT</h1>
          <p className={style.subtitle}>
            Проектирование, поставка и монтаж систем вентиляции и
            кондиционирования
          </p>
          <div className={style.contacts}>
            <div className={style.contactsItem}>
              <p>Московский регион,</p>
              <p>Москва</p>
            </div>
            <div className={style.contactsItem}>
              <p>+ 7 492 373 63 31</p>
              <p>+ 7 424 367 89 29</p>
            </div>
          </div>
        </div>
        <div className={style.button}>
          <Button
            widthDiv={477}
            heightDiv={115}
            radiusDiv={40}
            width={447}
            height={85}
            radius={30}
            fontSize={17}
            text={"ОСТАВИТЬ ЗАЯВКУ"}
          />
        </div>
      </section>
    </>
  );
});

export default MainScreen;
