import React from "react";
import { useDispatch } from "react-redux";
import { nextStep, selectBuilding } from "../../redux/slice";
import { BuildingEnum } from "../../types";
import s from "./result.module.scss";

const Result = () => {
  const dispatch = useDispatch();
  const liClick = (build: BuildingEnum) => {
    dispatch(selectBuilding(build));
    dispatch(nextStep());
  };
  return (
    <div className={s.main}>
      <div className={s.message}>message</div>
    </div>
  );
};

export default Result;
