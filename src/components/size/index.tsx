import React from "react";
import s from "./size.module.scss";

const Size = () => {
  return (
    <div className={s.main}>
      <input className={s.input} type="number"/>
      <label>X</label>
      <input className={s.input} type="number"/>
    </div>
  );
};

export default Size;