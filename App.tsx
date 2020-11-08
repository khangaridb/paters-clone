import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import Navigations from './src/navigations';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
