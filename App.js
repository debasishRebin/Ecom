import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import HeaderContextProvider from './src/context/HeaderContext';
import Navigation from './src/navigation';
import store from './src/store';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Reanimated 2']);
  }, []);

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider successColor="#5bbb4f">
          <HeaderContextProvider>
            <Navigation />
          </HeaderContextProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
}
