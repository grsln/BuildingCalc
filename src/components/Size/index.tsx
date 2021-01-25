import React from "react";
import { useDispatch } from "react-redux";
import { inputSizeX, inputSizeY } from "../../redux/slice";
import s from "./size.module.scss";

const Size = () => {
  const dispatch = useDispatch();
  const handleSizexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputSizeX(e.target.value));
  };
  const handleSizeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputSizeY(e.target.value));
  };
  return (
    <div className={s.main}>
      <input
        className={s.input}
        type="number"
        onChange={handleSizexChange}
        placeholder="x"
      />
      <label>X</label>
      <input
        className={s.input}
        type="number"
        onChange={handleSizeyChange}
        placeholder="y"
      />
    </div>
  );
};

export default Size;
