import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import Navigations from './src/navigations';
import { Provider } from 'react-redux';
import store from './src/redux/store';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
