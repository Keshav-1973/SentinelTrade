import InputField from '@components/InputField/InputField';
import React from 'react';
import {useCallback, useEffect} from 'react';
import {
  Keyboard,
  KeyboardEventListener,
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

export type KeyboardAvoidingStyleWorkletFn = (
  endCoordinates: SharedValue<any | null>,
  isVisible: SharedValue<boolean>,
) => ReturnType<typeof useAnimatedStyle>;

export const useKeyboardAvoiding = (
  animatedStyleWorkletFn?: KeyboardAvoidingStyleWorkletFn,
) => {
  const keyboardVisible = useSharedValue(false);
  const keyboardEndCoordinates = useSharedValue<any | null>(null);

  const animatedStyle = useAnimatedStyle(() => {
    const kbHeight = keyboardEndCoordinates.value?.height ?? 0;

    return animatedStyleWorkletFn
      ? animatedStyleWorkletFn(keyboardEndCoordinates, keyboardVisible)
      : {
          bottom: withTiming(keyboardVisible.value ? kbHeight * 0.9 : 0),
        };
  }, [animatedStyleWorkletFn, keyboardEndCoordinates, keyboardVisible]);

  const handleKeyboardWillChangeFrame = useCallback<KeyboardEventListener>(
    ({endCoordinates}) => {
      keyboardVisible.value = true;
      keyboardEndCoordinates.value = endCoordinates;
    },
    [keyboardEndCoordinates, keyboardVisible],
  );

  const handleKeyboardWillHide = useCallback<KeyboardEventListener>(
    ({endCoordinates}) => {
      keyboardVisible.value = false;
      keyboardEndCoordinates.value = endCoordinates;
    },
    [keyboardEndCoordinates, keyboardVisible],
  );

  useEffect(() => {
    const emitter = Keyboard.addListener(
      'keyboardWillChangeFrame',
      handleKeyboardWillChangeFrame,
    );

    return () => emitter.remove();
  }, [handleKeyboardWillChangeFrame]);

  useEffect(() => {
    const emitter = Keyboard.addListener(
      'keyboardWillHide',
      handleKeyboardWillHide,
    );

    return () => emitter.remove();
  }, [handleKeyboardWillHide]);

  return {keyboardVisible, keyboardEndCoordinates, animatedStyle};
};

export const DefaultStyle = ({children}) => {
  const {animatedStyle} = useKeyboardAvoiding();

  return (
    <View style={styles.containerStyle}>
      <TextInput multiline style={styles.input} />
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </View>
  );
};

export const CustomStyle = ({children}) => {
  const {animatedStyle} = useKeyboardAvoiding((endCoords, isVisible) => {
    'worklet';
    const height = endCoords.value?.height ?? 0;

    return {
      marginBottom: withTiming(isVisible.value ? height * 0.7 : 0),
    };
  });

  return (
    <Animated.View style={[styles.containerStyle, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    // justifyContent: 'flex-end',
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // height: '100%',
  },
  input: {
    height: 500,
  },
});
