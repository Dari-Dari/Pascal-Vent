/* eslint-disable react/prop-types */
import styles from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
const Button = ({
  widthDiv,
  heightDiv,
  radiusDiv,
  width,
  height,
  radius,
  fontSize,
  fontWeight,
  text,
}) => {
  const containerStyle = {
    width: `${widthDiv}px`,
    height: `${heightDiv}px`,
    borderRadius: `${radiusDiv}px`,
  };

  const buttonStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${radius}px`,
    fontWeight: fontWeight,
    fontSize: `${fontSize}px`,
  };

  return (
    <div className={styles.button} style={containerStyle}>
      <button className={styles["button-item"]} style={buttonStyle}>
        {text}
      </button>
    </div>
  );
};

export default Button;
