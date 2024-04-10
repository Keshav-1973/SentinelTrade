import {HapticOptions} from '@constants/constants';
import React, {useCallback} from 'react';
import {GestureResponderEvent, Pressable, PressableProps} from 'react-native';
import {trigger} from 'react-native-haptic-feedback';

interface HapticPressProps extends PressableProps {
  onPressed: null | ((event: GestureResponderEvent) => void) | undefined;
}

const HapticPressable = ({onPressed, ...props}: HapticPressProps) => {
  const withHapticFeedback = useCallback(
    (event: GestureResponderEvent) => {
      trigger('soft', HapticOptions);
      onPressed?.(event);
    },
    [onPressed],
  );
  return <Pressable onPress={withHapticFeedback} {...props} />;
};

export default HapticPressable;
