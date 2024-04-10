import React, {useCallback} from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {SemanticColors, TextVariants} from '@themes/Scales';
import TextComponent from '@components/TextComponent/TextComponent';
import {trigger} from 'react-native-haptic-feedback';
import {Breakpoint, ResponsiveValue} from '@shopify/restyle';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
type Props = {
  onPress: () => void;
  text: string;
  styles?: StyleProp<TextStyle>;
  variant?:
    | ResponsiveValue<
        TextVariants,
        {
          PHONE: Breakpoint;
          TABLET: Breakpoint;
        }
      >
    | undefined;
};

const LinkText = ({onPress, text, styles, variant}: Props) => {
  const withHapticFeedback = useCallback(() => {
    trigger('soft', options);
    onPress?.();
  }, [trigger, onPress]);

  return (
    <Pressable onPress={withHapticFeedback}>
      <TextComponent
        color={SemanticColors.PRIMARY_BUTTON}
        variant={variant || TextVariants.LinkText}
        style={[
          {
            alignSelf: 'flex-start',
          },
          styles,
        ]}>
        {text}
      </TextComponent>
    </Pressable>
  );
};

export default LinkText;
