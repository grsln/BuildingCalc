export enum BuildingEnum {
  HOUSE = "Жилой дом",
  GARAGE = "Гараж",
}

export type buildingType = {
  build: BuildingEnum;
  index: number;
};

export const buildingsApiIndex: buildingType[] = [
  {
    build: BuildingEnum.HOUSE,
    index: 1,
  },
  {
    build: BuildingEnum.GARAGE,
    index: 2,
  },
];

export enum MaterialEnum {
  BRICK = "Кирпич",
  BLOCK = "Шлакоблок",
  WOODEN_BAR = "Деревянный брус",
  METALL = "Металл",
  SENDWICH = "Сендвич-панели",
}

type materialType = {
  material: MaterialEnum;
  index: number;
};

export const materialsApiIndex: materialType[] = [
  {
    material: MaterialEnum.BRICK,
    index: 1,
  },
  {
    material: MaterialEnum.BLOCK,
    index: 2,
  },
  {
    material: MaterialEnum.WOODEN_BAR,
    index: 3,
  },
  {
    material: MaterialEnum.METALL,
    index: 4,
  },
  {
    material: MaterialEnum.SENDWICH,
    index: 5,
  },
];

export const BuildingMaterial = new Map();
BuildingMaterial.set(BuildingEnum.HOUSE, [
  MaterialEnum.BRICK,
  MaterialEnum.BLOCK,
  MaterialEnum.WOODEN_BAR,
]);
BuildingMaterial.set(BuildingEnum.GARAGE, [
  MaterialEnum.BLOCK,
  MaterialEnum.METALL,
  MaterialEnum.SENDWICH,
]);

export interface ISizes {
  sizex: number;
  sizey: number;
}
export enum StepsEnum {
  BUILDING = 0,
  HEIGHT = 1,
  MATERIAL = 2,
  SIZE = 3,
  RESULT = 4,
}

export const stepTitles = [
  "Что будем строить?",
  "Количество этажей (число):",
  "Материал стен:",
  "Длина стен (в метрах):",
];

export interface IState {
  toolkit: {
    isLoading: boolean;
    isError: boolean;
    stateStep: StepsEnum;
    stepNumber: number;
    building: BuildingEnum | null;
    height: number;
    material: MaterialEnum | null;
    sizes: ISizes;
    responseStatus: string;
    responseMessage: string;
  };
}

export interface IApi {
  building?: number;
  height: number;
  material?: number;
  sizex: number;
  sizey: number;
}

export enum StatusEnum {
  OK = "Успешно",
  Error = "Ошибка",
}

interface IResponse {
  status: StatusEnum;
  result: string;
}
export const responses: IResponse[] = [
  {
    status: StatusEnum.OK,
    result: "ok",
  },
  {
    status: StatusEnum.Error,
    result: "error",
  },
];
