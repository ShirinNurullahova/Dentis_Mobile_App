// import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FC} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {checkValidity} from '../api';
// import {ILoginUser} from '../types/types';
// import {RootStackParamList} from './types';
import {AuthNavigate} from './AuthNavigate';

export const Navigator: FC = () => {
  // const user = useSelector((state: {user: ILoginUser}) => state.user)?.user;
  // const dispatch = useDispatch();
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // checkValidity(navigation, dispatch);
  const Stack = createStackNavigator<any>();
  // if (!user) {
    
  // }
return <AuthNavigate />;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
    </Stack.Navigator>
  );
};
