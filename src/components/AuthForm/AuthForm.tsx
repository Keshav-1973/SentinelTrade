import React, {useEffect} from 'react';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import Wrapper from '@components/Wrapper/Wrapper';
import {useWindowDimensions} from 'react-native';
import {SemanticColors} from '@themes/Scales';
import ReanimatedBox from '@components/AnimatedView/AnimatedView';
import useKeyboardStatus from '@hooks/useKeyboardStatus';
import {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import styles from './styles';
import {ThemeType} from '@themes/Themes';
import {useTheme} from '@shopify/restyle';

interface AuthFormProps {
  children: React.JSX.Element;
  image: React.JSX.Element;
  canGoBack: boolean;
}

const AuthForm = ({children, image, canGoBack}: AuthFormProps) => {
  const {width, height} = useWindowDimensions();
  const {isKeyboardOpen, keyboardHeight} = useKeyboardStatus();
  const offsetY = useSharedValue(0);
  const theme = useTheme<ThemeType>();

  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.4;

  useEffect(() => {
    if (isKeyboardOpen) {
      offsetY.value = withTiming(-keyboardHeight + 30, {
        duration: 250,
      });
    } else {
      offsetY.value = withTiming(0, {duration: 250});
    }
  }, [isKeyboardOpen]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offsetY.value}],
    };
  });

  return (
    <Wrapper navHeading={'Login'} canGoBack={canGoBack}>
      <ViewComponent
        backgroundColor={SemanticColors.MAIN_FOREGROUND}
        style={styles.wrapper}>
        <ViewComponent backgroundColor={SemanticColors.MAIN_FOREGROUND}>
          {React.cloneElement(image, {width: width, height: Banner_Height})}
        </ViewComponent>
        <ReanimatedBox
          backgroundColor={SemanticColors.MAIN_BACKGROUND}
          style={[
            {
              height: Available_Height - Banner_Height - 30,
            },
            styles.card,
            animatedStyles,
          ]}>
          <ViewComponent
            backgroundColor={SemanticColors.MAIN_BACKGROUND}
            style={styles.childWrapper}>
            {children}
          </ViewComponent>
        </ReanimatedBox>
      </ViewComponent>
    </Wrapper>
  );
};
export default AuthForm;
