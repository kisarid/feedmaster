import { AgeGroup } from '../enums/agegroup.enum';
import { Nutrition } from '../enums/nutrition.enum';

export interface SubGroup {
  id?: number;

  name: string;
  numberOfPersons: number;

  allergens: string[];

  agegroup: AgeGroup;

  maxDailyEnergyKJ?: number;
  maxDailyEnergyKcal?: number;
  maxDailyProtein?: number;
  maxDailyFat?: number;
  maxDailySaturatedFat?: number;
  maxDailyCarbohydrate?: number;
  maxDailySugar?: number;
  maxGlycemIndexPerMeal?: number;
  maxDailyFibre?: number;
  maxDailyNatrium?: number;
  maxDailyPotassium?: number;
  maxDailyCalcium?: number;
  maxDailyMagnesium?: number;
}

export interface Group {
  id?: number;
  name: string;
  subGroups: SubGroup[];
  isOpen?: boolean;
}

export interface MaxValue {
  type: Nutrition;
  value: number;
}


export interface SubGroupDisplay {
  id?: number;
  name: string;
  numberOfPersons: number;
  allergens: string[];
  maxValues: MaxValue[];
  agegroup: AgeGroup;
}

export interface GroupDisplay {
  id?: number;
  name: string;
  subGroups: SubGroupDisplay[];
}
