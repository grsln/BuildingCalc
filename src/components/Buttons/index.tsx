import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  endLoading,
  errorLoading,
  firstStep,
  nextStep,
  setResponse,
  startLoading,
} from "../../redux/slice";
import ApiService from "../../service/apiservice";
import {
  buildingsApiIndex,
  IState,
  materialsApiIndex,
  StepsEnum,
} from "../../types";
import s from "./buttons.module.scss";

const Buttons = () => {
  const state = useSelector<IState, IState["toolkit"]>(
    (state) => state.toolkit
  );
  const dispatch = useDispatch();
  const nextStepClick =
    state.stateStep !== StepsEnum.SIZE
      ? () => dispatch(nextStep())
      : () => {
          const apiParams = {
            building: buildingsApiIndex.find(
              ({ build }) => build === state.building
            )?.index,
            height: state.height,
            material: materialsApiIndex.find(
              ({ material }) => material === state.material
            )?.index,
            sizex: state.sizes.sizex,
            sizey: state.sizes.sizey,
          };
          dispatch(startLoading());
          ApiService.request(apiParams)
            .then((response) => dispatch(setResponse(response.data)))
            .catch(() => dispatch(errorLoading()))
            .finally(() => dispatch(endLoading()));
          dispatch(nextStep());
        };

  return (
    <div className={s.main}>
      <button className={s.button} onClick={() => dispatch(firstStep())}>
        {state.stateStep === StepsEnum.RESULT ? "Новый расчет" : "Отмена"}
      </button>
      {state.stateStep !== StepsEnum.RESULT && (
        <button className={s.button} onClick={nextStepClick}>
          {state.stateStep === StepsEnum.SIZE ? "Рассчитать" : "Далее"}
        </button>
      )}
    </div>
  );
};

export default Buttons;
