import { createSlice } from "@reduxjs/toolkit";
import { BuildingEnum, responses, StatusEnum, StepsEnum } from "../types";

const initialState = {
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
  responseStatus: "",
  responseMessage: "",
};

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState,
  reducers: {
    firstStep: (state) => initialState,
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
    startLoading(state) {
      state.isError = false;
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    errorLoading(state) {
      state.isLoading = false;
      state.isError = true;
    },
    setResponse(state, action) {
      const status = responses.find(
        ({ result }) => result === action.payload.result
      )?.status;
      state.responseStatus =
        status && Object.values(StatusEnum).includes(status) ? status : "";
      state.responseMessage = action.payload.message;
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
  startLoading,
  endLoading,
  errorLoading,
  setResponse,
} = toolkitSlice.actions;
