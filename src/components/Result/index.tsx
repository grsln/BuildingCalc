import React from "react";
import { useSelector } from "react-redux";
import { IState, StatusEnum } from "../../types";
import Loader from "../Loader";
import s from "./result.module.scss";

const Result = () => {
  const state = useSelector<IState, IState["toolkit"]>(
    (state) => state.toolkit
  );
  return (
    <div className={s.main}>
      <div className={s.message}>
        {state.isLoading ? (
          <Loader />
        ) : state.isError ? (
          <div className={s.error}>Ошибка загрузки</div>
        ) : (
          <div
            className={state.responseStatus === StatusEnum.Error ? s.error : ""}
          >
            {state.responseMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
