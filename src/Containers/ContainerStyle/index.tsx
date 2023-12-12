import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constants';
const {width, height} = Dimensions.get('screen');

export const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colors.SIMON_BG,
  },
  podsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  borderList: {
    borderWidth: 2,
    borderColor: 'white',
  },
  line: {
    position: 'absolute',
    height: height / 1.355,
    width: width / 2,
    borderColor: 'white',
    borderRightWidth: 2,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  headerScore: {
    fontSize: 40,
    paddingVertical: 15,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    width: 200,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    fontSize: 20,
    paddingHorizontal: 5,
  },
  wrapperTable: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    borderColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    paddingBottom: 15,
  },

  resultName: {
    fontSize: 20,
    color: 'white',
  },
  resultScore: {
    fontSize: 18,
    color: 'white',
  },
});
