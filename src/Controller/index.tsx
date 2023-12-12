import {SetStateAction} from 'react';
import {Colors} from '../constants';
let sounds: any; //bug in library of react native sound ts
if (process.env.NODE_ENV !== 'test') {
  sounds = require('../constants/sounds');
}
export const pickColor = (
  row: number,
  col: number,
  setColor: React.Dispatch<SetStateAction<Colors>>,
) => {
  switch (true) {
    case row === 1 && col === 1:
      sounds?.vol1Play.play();
      setColor(Colors.SIMON_GREEN);
      break;
    case row === 1 && col === 2:
      sounds?.vol2Play.play();
      setColor(Colors.SIMON_YELLOW);
      break;
    case row === 2 && col === 1:
      sounds?.vol3Play.play();
      setColor(Colors.SIMON_RED);
      break;
    case row === 2 && col === 2:
      sounds?.vol4Play.play();
      setColor(Colors.SIMON_BABYBLUE);
      break;
    default:
      setColor(Colors.SIMON_TRANSPERANT);
  }
};

export const random = (podRows: number[]) =>
  podRows.map((num: number, index: number) =>
    index === 1 ? Math.round(Math.random() + 1) : Math.round(Math.random() + 1),
  );
