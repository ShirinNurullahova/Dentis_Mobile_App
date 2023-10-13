import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {changeScroll} from '../../store/reducers/smoothScrollReducer';

export type ScreenProps = {
  header?: React.ReactNode;
  onPullToRefresh?: (finishCallback: () => void) => void;
  scroll?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  notTouchable?: boolean;
  style?:ViewStyle
};

const Content: FC<ScreenProps> = ({header, children,style}) => {
  return (
    <View style={[style]}>
      {header}
      {children}
    </View>
  );
};

const Screen: FC<ScreenProps> = ({
  header,
  children,
  onPullToRefresh,
  notTouchable,
  style
}) => {
  const [keyboardAvoidingEnabled, setKeyboardAvoidingEnabled] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const startRefreshing = () => {
    setRefreshing(true);
    onPullToRefresh && onPullToRefresh(stopRefreshing);
  };
  const stopRefreshing = () => {
    setRefreshing(false);
  };

  const handleKeyboardAvoidingViewBehavior = () => {
    if (Platform.OS === 'ios') {
      return 'padding';
    }
    return undefined;
  };
  const scrollY = useSelector(
    (state: {smoothScroll: {scrollY: number}}) => state?.smoothScroll?.scrollY,
  );
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log({scrollY});
    if (scrollY) {
      scrollViewRef?.current?.scrollTo({y: scrollY, animated: true});
      dispatch(changeScroll(null));
    }
  }, [scrollY]);

  return (
    <KeyboardAvoidingView
      id={handleKeyboardAvoidingViewBehavior()}
      testID="keyboardAvoidingView"
      behavior={handleKeyboardAvoidingViewBehavior()}
      enabled={keyboardAvoidingEnabled}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{flexGrow: 1}}
        testID="refreshControl"
        refreshControl={
          onPullToRefresh && (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={startRefreshing}
            />
          )
        }
        keyboardShouldPersistTaps={'always'}>
        {notTouchable ? (
          <SafeAreaView style={{flex:1}}>
            <Content header={header} children={children} style={style || styles.container}/>
          </SafeAreaView>
        ) : (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView>
              <Content header={header} children={children} style={style || styles.container}/>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 16,
    paddingVertical:100
  }
})

export default React.memo(Screen);
