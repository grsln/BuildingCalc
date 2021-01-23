import React from "react";
import s from "./buttons.module.scss";

const Buttons = () => {
  return (
    <div className={s.main}>
      <button className={s.button}>Отмена</button>
      <button className={s.button}>Далее</button>
    </div>
  );
};

export default Buttons;