import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, selectMaterial } from "../../redux/slice";
import {
  BuildingEnum,
  BuildingMaterial,
  IState,
  MaterialEnum,
} from "../../types";
import s from "./material.module.scss";

const Material = () => {
  const building = useSelector<IState, BuildingEnum | null>(
    (state) => state.toolkit.building
  );
  const dispatch = useDispatch();
  const liClick = (material: MaterialEnum) => {
    dispatch(selectMaterial(material));
    dispatch(nextStep());
  };
  return (
    <div className={s.main}>
      <ul className={s.list}>
        {building
          ? BuildingMaterial.get(building).map((key: MaterialEnum) => (
              <li className={s.listItem} key={key} onClick={() => liClick(key)}>
                {key}
              </li>
            ))
          : Object.keys(MaterialEnum).map((key) => (
              <li
                className={s.listItem}
                key={key}
                onClick={() =>
                  liClick(MaterialEnum[key as keyof typeof MaterialEnum])
                }
              >
                {MaterialEnum[key as keyof typeof MaterialEnum]}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Material;
