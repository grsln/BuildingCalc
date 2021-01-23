import React from "react";
import s from "./material.module.scss";

const Material = () => {
  return (
    <div className={s.main}>
      <ul className={s.list}>
        <li>Кирпич</li>
        <li>Шлакоблок</li>
        <li>Деревянный брус</li>
      </ul>
    </div>
  );
};

export default Material;