import React from 'react';
import {ContainerStyle} from './ContainerStyle';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from './Game';
import Results from './Results';
import {Provider} from 'react-redux';
import {RootStackParamList, Routes} from './containers.modal';
import store, {persistor} from '../store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator<RootStackParamList>();
const SimonTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: ContainerStyle.container.backgroundColor,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={SimonTheme}>
          <Stack.Navigator initialRouteName={Routes.GAME}>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name={Routes.GAME}
              component={Game}
            />
            <Stack.Screen name={Routes.RESULTS} component={Results} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
