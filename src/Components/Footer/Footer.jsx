import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <section className={style.footer}>
        <div className={style.footerText}>
          Данный проект находится на начальной стадии разработки
        </div>
      </section>
    </>
  );
};

export default Footer;
