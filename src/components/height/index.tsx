import React from "react";
import s from "./height.module.scss";

const Height = () => {
  return (
    <div className={s.main}>
      <input className={s.input} type="number"/>
    </div>
  );
};

export default Height;