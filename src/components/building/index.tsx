import React from "react";
import s from "./building.module.scss";

const Building = () => {
  return (
    <div className={s.main}>
      <ul className={s.list}>
        <li>Жилой дом</li>
        <li>Гараж</li>
      </ul>
    </div>
  );
};

export default Building;