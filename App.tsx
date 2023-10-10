import React, {useEffect} from 'react';
import {Platform, NativeModules, ActivityIndicator} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigator} from './src/navigation/Navigator';

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // NativeModules.SplashScreenModule.hide();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer
            fallback={<ActivityIndicator color="blue" size="large" />}>
            <Navigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
