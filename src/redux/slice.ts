import { createSlice } from "@reduxjs/toolkit";
import { BuildingEnum, IState, StepsEnum } from "../types";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: <IState["toolkit"]>{
    isLoading: false,
    isError: false,
    stateStep: StepsEnum.BUILDING,
    stepNumber: 1,
    building: null,
    height: 0,
    material: null,
    sizes: {
      sizex: 0,
      sizey: 0,
    },
  },
  reducers: {
    firstStep(state) {
      state.isLoading = false;
      state.isError = false;
      state.stateStep = StepsEnum.BUILDING;
      state.stepNumber = 1;
      state.building = null;
      state.height = 0;
      state.material = null;
      state.sizes = {
        sizex: 0,
        sizey: 0,
      };
    },
    nextStep(state) {
      switch (state.stateStep) {
        case StepsEnum.BUILDING:
          if (state.building === BuildingEnum.GARAGE) {
            state.stateStep = StepsEnum.MATERIAL;
          } else {
            state.stateStep = StepsEnum.HEIGHT;
          }
          state.stepNumber += 1;
          break;
        case StepsEnum.HEIGHT:
          state.stateStep = StepsEnum.MATERIAL;
          state.stepNumber += 1;
          break;
        case StepsEnum.MATERIAL:
          state.stateStep = StepsEnum.SIZE;
          state.stepNumber += 1;
          break;
        case StepsEnum.SIZE:
          state.stateStep = StepsEnum.RESULT;
          state.stepNumber += 1;
          break;
        case StepsEnum.RESULT:
          state.stateStep = StepsEnum.BUILDING;
          state.stepNumber = 1;
          break;
      }
    },
    selectBuilding(state, action) {
      state.building = action.payload;
    },
    selectMaterial(state, action) {
      state.material = action.payload;
    },
    inputHeight(state, action) {
      state.height = action.payload;
    },
    inputSizeX(state, action) {
      state.sizes.sizex = action.payload;
    },
    inputSizeY(state, action) {
      state.sizes.sizey = action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  firstStep,
  nextStep,
  selectBuilding,
  selectMaterial,
  inputHeight,
  inputSizeX,
  inputSizeY,
} = toolkitSlice.actions;
