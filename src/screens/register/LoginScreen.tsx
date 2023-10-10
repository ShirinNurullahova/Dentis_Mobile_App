import React, { FC, useEffect } from 'react';
import Screen from '../../components/Screen/Screen';
import { Text } from 'react-native';

const LoginScreen: FC = () => {
  return (
    <Screen>
      <Text
        style={{
          color:'red',
          backgroundColor:'black',
          fontSize:30
        }}
      >
        Salam 
      </Text>
    </Screen>
  );
};

export default LoginScreen;
