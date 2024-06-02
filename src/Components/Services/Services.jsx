import style from "./Services.module.scss";

const Services = () => {
  return (
    <>
      <section className={style.services}>
        <div className={style.servicesContainer}>
          <div className={style.text}>
            <h3>Предоставляемые Услуги</h3>
            <p className={style.textItem}>
              При разработке проекта предложим техническое решение оптимальное
              по соотношению цены и качества, оно идеально впишется в ваш
              дизайн, а также будет учитывать все ваши пожелания.
            </p>
            <p className={style.textItem}>
              Монтаж выполняется опытными бригадами с соблюдением всех
              действующих технических норм, правил безопасности и строго по
              согласованному проекту.
            </p>
            <p className={style.textItem}>
              Одинаково эффективно выполняем проектирование и монтаж на объектах
              любой сложности – от небольшой квартиры, до объектов со сложными
              технологическими процессами на основе действующей нормативной
              документации.
            </p>
          </div>
          <div className={style.sidebar}>
            <div className={style.barMenu}>
              <button className={`${style.barMenuItem} ${style.firstButton}`}>
                Кондиционирование
              </button>
              <button className={`${style.barMenuItem} ${style.secondButton}`}>
                Система Вентиляции
              </button>
            </div>
            <div className={style.descriptionContainer}>
              <div className={style.description}>
                <ul>
                  <li className={style.descriptionItem}>
                    <div className={style.imageBox}>
                      <img
                        className={style.imageBoxItem}
                        src="src\assets\images\ventilation\1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={style.descriptionText}>
                      Проектирование систем вентиляции любой сложности
                    </div>
                  </li>
                  <li className={style.descriptionItem}>
                    <div className={style.imageBox}>
                      <img
                        className={style.imageBoxItem}
                        src="src\assets\images\ventilation\2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={style.descriptionText}>
                      Монтаж приточной вентиляции
                    </div>
                  </li>
                  <li className={style.descriptionItem}>
                    <div className={style.imageBox}>
                      <img
                        className={style.imageBoxItem}
                        src="src\assets\images\ventilation\3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={style.descriptionText}>
                      Монтаж вытяжной вентиляции
                    </div>
                  </li>
                  <li className={style.descriptionItem}>
                    <div className={style.imageBox}>
                      <img
                        className={style.imageBoxItem}
                        src="src\assets\images\ventilation\4.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={style.descriptionText}>
                      Монтаж вентиляции с увлажнением воздуха
                    </div>
                  </li>
                  <li className={style.descriptionItem}>
                    <div className={style.imageBox}>
                      <img
                        className={style.imageBoxItem}
                        src="src\assets\images\ventilation\5.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={style.descriptionText}>
                      Монтаж вентиляции с рекуператором
                    </div>
                  </li>
                  <li className={style.descriptionItem}>
                    <div className={style.imageBox}>
                      <img
                        className={style.imageBoxItem}
                        src="src\assets\images\ventilation\6.svg"
                        alt="icon"
                      />
                    </div>
                    <div className={style.descriptionText}>
                      Монтаж вентиляции с осушением для бассейна
                    </div>
                  </li>
                </ul>
              </div>
              <div className={style.photo}>
                <img
                  src="src\assets\images\ventilation\image.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
