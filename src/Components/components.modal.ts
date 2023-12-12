import {Dispatch, SetStateAction} from 'react';
import {Colors} from '../constants';

export interface RowPodProps {
  row: number;
  userLight: any;
  clickable: boolean;
  rowColor: number;
  colColor: number;
  setColor: Dispatch<SetStateAction<Colors>>;
  pickColor: (
    row: number,
    col: number,
    setColor: Dispatch<SetStateAction<Colors>>,
  ) => void;
  color: Colors;
}

export interface ButtonProps {
  title: string;
  cb: () => void;
  color: Colors;
}
