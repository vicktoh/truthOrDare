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
  Option: undefined;
  Level: {option: string};
  Question: {
    option: string,
    level: string,
    background: string,
    color: string,
    icon: any
  }
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type Level = {
  title: string, 
  description: string,
  background: string,
  icon: any,
  textColor?: string
}



