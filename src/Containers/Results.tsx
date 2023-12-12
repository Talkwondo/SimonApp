import React, {useCallback, useState} from 'react';
import {SafeAreaView, Modal, View, Text, FlatList} from 'react-native';
import ModalSheet from './Modal';
import {Button} from '../Components/Button';
import {ResultsProps} from './containers.modal';
import {Colors} from '../constants';
import uuid from 'react-native-uuid';
import {ContainerStyle} from './ContainerStyle';
import {History, ScoresState} from '../store/store.modal';
import {useSelector} from 'react-redux';

const Results = ({route, navigation}: ResultsProps) => {
  const {score, modalPop} = route.params;
  const [flexHeight, setFlexHeight] = useState(0);
  const [modalVisible, setModalVisible] = useState(modalPop ?? false);
  const tableData = useSelector((state: ScoresState) => state.tableScore);

  const renderTable = useCallback(
    ({item}: {item: History}) => (
      <View style={ContainerStyle.wrapperTable}>
        <Text style={ContainerStyle.resultName}>{item.name}</Text>
        <Text style={ContainerStyle.resultName}>{item.score}</Text>
      </View>
    ),
    [],
  );

  const resultHeader = useCallback(() => {
    return (
      <View style={ContainerStyle.wrapperTable}>
        <Text style={ContainerStyle.resultName}>Name</Text>
        <Text style={ContainerStyle.resultName}>Score</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={ContainerStyle.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalSheet score={score} setModalVisible={setModalVisible} />
      </Modal>
      <View style={[ContainerStyle.line, {height: flexHeight}]} />
      <FlatList
        data={[...tableData].sort((a, b) => b.score - a.score)}
        onLayout={e => setFlexHeight(e.nativeEvent.layout.height)}
        style={ContainerStyle.borderList}
        keyExtractor={() => String(uuid.v4())}
        renderItem={renderTable}
        ListHeaderComponent={resultHeader}
      />
      <Button
        title="Back to Game"
        color={Colors.SIMON_BLUE}
        cb={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};
export default Results;
