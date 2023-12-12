import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ModalResultsProps} from './containers.modal';
import {ContainerStyle} from './ContainerStyle';
import {Button} from '../Components/Button';
import {Colors} from '../constants';
import {addScoreToHistory} from '../store/actions';
import {useDispatch} from 'react-redux';

const Modal = ({score, setModalVisible}: ModalResultsProps) => {
  const [name, setName] = useState<string>();
  const dispatch = useDispatch();
  return (
    <View style={ContainerStyle.container}>
      <Text style={ContainerStyle.headerScore}>Your Score: {score}</Text>
      <View style={ContainerStyle.column}>
        <Text style={ContainerStyle.headerScore}>Write your name:</Text>
        <TextInput
          style={ContainerStyle.textInputStyle}
          value={name}
          onChangeText={setName}
          placeholder="Write your name"
        />
      </View>

      <Button
        title={'Update Score'}
        cb={() => {
          dispatch(addScoreToHistory({name: name ?? 'user', score}));
          setModalVisible(false);
        }}
        color={Colors.SIMON_RED}
      />
    </View>
  );
};

export default Modal;
