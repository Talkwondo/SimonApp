import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constants';
const {width} = Dimensions.get('screen');

export const ComponentStyle = StyleSheet.create({
  podsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  podStyle: {
    maxWidth: 150,
    maxHeight: 150,
    width: width / 4,
    height: width / 4,
    borderRadius: width / 2,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  button: {
    width: 160,
    paddingHorizontal: 10,
    backgroundColor: Colors.SIMON_PINK,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    margin: 15,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
