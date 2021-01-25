import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstStep, nextStep } from "../../redux/slice";
import { IState, StepsEnum } from "../../types";
import s from "./buttons.module.scss";

const Buttons = () => {
  const state = useSelector<IState, StepsEnum>(
    (state) => state.toolkit.stateStep
  );
  const dispatch = useDispatch();
  const nextStepClick = () => {
    dispatch(nextStep());
  };

  return (
    <div className={s.main}>
      <button className={s.button} onClick={() => dispatch(firstStep())}>
        {state === StepsEnum.RESULT ? "Новый расчет" : "Отмена"}
      </button>
      {state !== StepsEnum.RESULT && (
        <button className={s.button} onClick={nextStepClick}>
          {state === StepsEnum.SIZE ? "Рассчитать" : "Далее"}
        </button>
      )}
    </div>
  );
};

export default Buttons;
