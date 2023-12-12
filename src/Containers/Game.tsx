import React, {useCallback, useState} from 'react';
import RowPod from '../Components/RowPod';
import {podRows, scorePoint} from '../constants';
import {pickColor, random} from '../Controller';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {ContainerStyle} from './ContainerStyle';
import uuid from 'react-native-uuid';
import Logo from '../Images/logo.png';
import {Colors} from '../constants';
import {Button} from '../Components/Button';
import {GameProps, Routes} from './containers.modal';

const Game = ({
  navigation,
  initScore = 0,
  initMemory = [],
  initClickable = false,
}: GameProps) => {
  const [score, setScore] = useState(initScore);
  const [clickable, setClickable] = useState(initClickable);
  const [memory, setMemory] = useState<number[][]>(initMemory);
  const [memoryIndex, setmemoryIndex] = useState(0);
  const [rowColor, setRowColor] = useState(0);
  const [colColor, setColColor] = useState(0);
  const [color, setColor] = useState<Colors>(Colors.SIMON_TRANSPERANT);
  const length = memory.length;

  const computerLight = useCallback(async () => {
    const [row, col] = random(podRows);
    const light = (localRow: number, localCol: number, timeOut: number) => {
      return new Promise(resolve =>
        setTimeout(function () {
          setRowColor(localRow);
          setColColor(localCol);
          resolve(pickColor(localRow, localCol, setColor));
        }, timeOut),
      );
    };
    for (let i = 0; i < length; i++) {
      if (
        i > 0 &&
        memory[i][0] === memory[i - 1][0] &&
        memory[i][1] === memory[i - 1][1]
      ) {
        await light(0, 0, 1000);
        await light(memory[i][0], memory[i][1], 1500);
      } else {
        await light(memory[i][0], memory[i][1], 1500);
      }
    }
    if (
      length > 0 &&
      memory[length - 1][0] === row &&
      memory[length - 1][1] === col
    ) {
      await light(0, 0, 1000);
    }
    await light(row, col, 1500);
    setMemory([...memory, [row, col]]);
    setTimeout(() => setColor(Colors.SIMON_TRANSPERANT), 1500);
    setClickable(true);
  }, [length, memory]);

  const userLight = useCallback(
    (row: number, col: number) => {
      setClickable(false);
      setRowColor(row);
      setColColor(col);
      if (row !== memory[memoryIndex][0] || col !== memory[memoryIndex][1]) {
        navigation?.navigate(Routes.RESULTS, {
          score,
          modalPop: true,
        });
        setMemory([]);
        setmemoryIndex(0);
        setScore(0);
        setTimeout(() => setColor(Colors.SIMON_TRANSPERANT), 200);
        return setClickable(false);
      } else {
        new Promise(resolve => {
          setTimeout(() => {
            resolve(setColor(Colors.SIMON_TRANSPERANT));
          }, 200);
        }).then(() => {
          if (memoryIndex < length - 1) {
            setClickable(true);
            setmemoryIndex(memoryIndex + 1);
          } else {
            setClickable(false);
            setScore(add => add + scorePoint);
            setmemoryIndex(0);
            computerLight();
          }
        });
      }
    },
    [computerLight, length, memory, memoryIndex, navigation, score],
  );

  return (
    <SafeAreaView style={ContainerStyle.podsContainer}>
      <Image
        source={Logo}
        style={ContainerStyle.image}
        resizeMode={'contain'}
      />
      <Text style={ContainerStyle.headerScore} testID="scoreText">
        Score: {score}
      </Text>
      {podRows.map((row: number) => {
        return (
          <RowPod
            row={row}
            userLight={userLight}
            clickable={clickable}
            rowColor={rowColor}
            colColor={colColor}
            pickColor={pickColor}
            color={color}
            setColor={setColor}
            key={String(uuid.v4())}
          />
        );
      })}
      <View style={ContainerStyle.row}>
        <Button
          color={Colors.SIMON_BLUE}
          title={'Results'}
          cb={() => navigation?.navigate(Routes.RESULTS, {score: 0})}
        />
        <Button
          title={'Start Game'}
          cb={async () => {
            return new Promise(resolve => {
              return resolve(computerLight());
            });
          }}
          color={Colors.SIMON_PINK}
        />
      </View>
    </SafeAreaView>
  );
};

export default Game;
