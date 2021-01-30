import React from "react";
import { useSelector } from "react-redux";
import s from "./App.module.scss";
import Building from "./components/Building";
import Buttons from "./components/Buttons";
import Height from "./components/Height";
import Material from "./components/Material";
import Result from "./components/Result";
import Size from "./components/Size";
import { IState, StepsEnum, stepTitles } from "./types";

const App: React.FC = () => {
  const state = useSelector<IState, IState["toolkit"]>(
    (state) => state.toolkit
  );
  function getComponent() {
    switch (state.stateStep) {
      case StepsEnum.BUILDING:
        return <Building />;
      case StepsEnum.HEIGHT:
        return <Height />;
      case StepsEnum.MATERIAL:
        return <Material />;
      case StepsEnum.SIZE:
        return <Size />;
      case StepsEnum.RESULT:
        return <Result />;
      default:
        return <></>;
    }
  }
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <h4 className={s.appName}>Калькулятор цены конструкций</h4>
        <p className={s.stepNumber}>
          {state.stateStep === StepsEnum.RESULT
            ? "Результат расчета"
            : "Шаг " + state.stepNumber.toString()}
        </p>
        <div className={s.window}>
          <div className={s.title}>
            {state.stateStep === StepsEnum.RESULT
              ? state.responseStatus
              : stepTitles[state.stateStep]}
          </div>
          {getComponent()}
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default App;
