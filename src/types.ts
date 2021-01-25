export enum BuildingEnum {
  HOUSE = "Жилой дом",
  GARAGE = "Гараж",
}

export enum MaterialEnum {
  BRICK = "Кирпич",
  BLOCK = "Шлакоблок",
  WOODEN_BAR = "Деревянный брус",
  METALL = "Металл",
  SENDWICH = "Сендвич-панели",
}

export type ArrMaterials = MaterialEnum[];
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
  };
}
