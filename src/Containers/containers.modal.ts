import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {SetStateAction} from 'react';

export interface GameProps {
  navigation?: NavigationProp<ParamListBase>;
  initScore?: number;
  initMemory?: number[][];
  initClickable?: boolean;
}

export interface ModalResultsProps {
  score: number;
  setModalVisible: React.Dispatch<SetStateAction<boolean>>;
}
export interface ResultsProps {
  navigation: NavigationProp<RootStackParamList, Routes.RESULTS>;
  route: RouteProp<RootStackParamList, Routes.RESULTS>;
}
export enum Routes {
  GAME = 'GAME',
  RESULTS = 'RESULTS',
}
export type RootStackParamList = {
  GAME: undefined;
  RESULTS: {score: number; modalPop: boolean};
};
