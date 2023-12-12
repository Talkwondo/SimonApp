import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './components.modal';
import {ComponentStyle} from './ComponentStyle';

export const Button = ({title, cb, color}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[ComponentStyle.button, {backgroundColor: color}]}
      onPress={cb}>
      <Text style={ComponentStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
};
