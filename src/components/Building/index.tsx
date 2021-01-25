import React from "react";
import { useDispatch } from "react-redux";
import { nextStep, selectBuilding } from "../../redux/slice";
import { BuildingEnum } from "../../types";
import s from "./building.module.scss";

const Building = () => {
  const dispatch = useDispatch();
  const liClick = (build: BuildingEnum) => {
    dispatch(selectBuilding(build));
    dispatch(nextStep());
  };
  return (
    <div className={s.main}>
      <ul className={s.list}>
        {Object.keys(BuildingEnum).map((key) => (
          <li
            className={s.listItem}
            key={key}
            onClick={() =>
              liClick(BuildingEnum[key as keyof typeof BuildingEnum])
            }
          >
            {BuildingEnum[key as keyof typeof BuildingEnum]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Building;
