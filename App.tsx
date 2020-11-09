import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigations from './src/navigations';
import { persistor, store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigations />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
