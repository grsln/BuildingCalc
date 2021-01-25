import React from "react";
import { useDispatch } from "react-redux";
import { inputHeight } from "../../redux/slice";
import s from "./height.module.scss";

const Height = () => {
  const dispatch = useDispatch();
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputHeight(e.target.value));
  };
  return (
    <div className={s.main}>
      <input className={s.input} type="number" onChange={handleHeightChange} />
    </div>
  );
};

export default Height;
