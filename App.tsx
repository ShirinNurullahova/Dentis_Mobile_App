import React, { useEffect } from 'react';
import { Platform, NativeModules, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Navigator } from './src/navigation/Navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const navigationRef = createNavigationContainerRef();
function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // NativeModules.SplashScreenModule.hide();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer fallback={<ActivityIndicator color="blue" size="large" />}>
              <Navigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
