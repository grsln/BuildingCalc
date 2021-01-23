import React from "react";
import s from "./App.module.scss";
import Building from "./components/building";
import Buttons from "./components/buttons";
import Height from "./components/height";
import Material from "./components/material";
import Size from "./components/size";

const App: React.FC = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <h4 className={s.appName}>Калькулятор цены конструкций</h4>
        <p className={s.stepNumber}>Шаг №</p>
        <div className={s.window}>
          <div className={s.title}>
            <p>Start page</p>
          </div>
          {/* <Building /> */}
          {/* <Height/> */}
          {/* <Material/> */}
          <Size/>
          {/* <p className={s.success}>Elements</p> */}
          {/* <p className={s.error}>Elements</p> */}
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default App;
