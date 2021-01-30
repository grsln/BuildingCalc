import React from "react";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.root}>
      <div className={s.loaderText}>Загрузка...</div>
    </div>
  );
};

export default Loader;
