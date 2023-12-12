import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ComponentStyle} from './ComponentStyle';
import {numberOfPods} from '../constants';
import {RowPodProps} from './components.modal';
import uuid from 'react-native-uuid';
import {Colors} from '../constants';

const RowPod = ({
  row,
  userLight,
  clickable,
  rowColor,
  colColor,
  setColor,
  pickColor,
  color,
}: RowPodProps) => {
  return (
    <View style={ComponentStyle.podsContainer}>
      {numberOfPods.map(col => (
        <TouchableOpacity
          testID={`pod-${row}-${col}`}
          disabled={!clickable}
          onPress={() => {
            pickColor(row, col, setColor);
            userLight(row, col);
          }}
          style={[
            ComponentStyle.podStyle,
            {
              backgroundColor:
                row === rowColor && col === colColor
                  ? color
                  : Colors.SIMON_TRANSPERANT,
            },
          ]}
          key={String(uuid.v4())}
        />
      ))}
    </View>
  );
};

export default RowPod;
