import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./App.module.scss";
import Building from "./components/Building";
import Buttons from "./components/Buttons";
import Height from "./components/Height";
import Material from "./components/Material";
import Result from "./components/Result";
import Size from "./components/Size";
import { IState, StepsEnum, stepTitles } from "./types";

const App: React.FC = () => {
  const state = useSelector<IState, IState['toolkit']>((state) => state.toolkit);
  const dispatch = useDispatch();
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <h4 className={s.appName}>Калькулятор цены конструкций</h4>
        {state.stateStep===StepsEnum.RESULT?<p className={s.stepNumber}>Результат расчета</p> :
        <p className={s.stepNumber}>Шаг {state.stepNumber}</p>}
        <div className={s.window}>
        {state.stateStep===StepsEnum.RESULT?<div className={s.title}>Ошибка или успешно</div> :
                  <div className={s.title}>
                  {stepTitles[state.stateStep]}
                </div>}

          {state.stateStep === StepsEnum.BUILDING && <Building />}
          {state.stateStep === StepsEnum.HEIGHT && <Height />}
          {state.stateStep === StepsEnum.MATERIAL && <Material />}
          {state.stateStep === StepsEnum.SIZE && <Size />}
          {state.stateStep === StepsEnum.RESULT && <Result />}

        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default App;
