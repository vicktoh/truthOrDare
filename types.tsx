/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Main: undefined;
  Settings: undefined;
  Level: undefined;
  Option: {level: Level};
  Question: {
    level: Level;
    type: 'truths' | 'dares'
  }
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type Level = {
  value: 'adult' | 'mature' | 'normal',
  title: string, 
  description: string,
  background: string,
  icon: any,
  textColor?: string
}
export type Question= {
  question: string;
  level: 'normal'| 'adult'| 'mature'

}

export type Questions = {
  ['truths']: Question[];
  ['dares'] : Question[];
}


