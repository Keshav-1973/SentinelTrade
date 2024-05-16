import TextComponent from '@components/TextComponent/TextComponent';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {AppStateStatus} from '@constants/constants';
import useAppState from '@hooks/useAppState';
import {useIsFocused} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import {SemanticColors, Spacings, TextVariants} from '@themes/Scales';
import {ThemeType} from '@themes/Themes';
import React, {useCallback, useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {Iconify} from 'react-native-iconify';
import {OnboardingScreenProps} from '../AuthRoutes';
import styles from './styles';
import {BioStatusTypes} from './utils';

const rnBiometrics = new ReactNativeBiometrics();

const Biometrics = ({
  navigation,
  route,
}: OnboardingScreenProps<'/auth/biometrics'>) => {
  const {height} = useWindowDimensions();
  const appState = useAppState();
  const isFocused = useIsFocused();
  const theme = useTheme<ThemeType>();
  const [bioStatus, setBioStatus] = useState<BioStatusTypes>({
    success: false,
    msg: '',
  });

  useEffect(() => {
    if (appState === AppStateStatus.Active && isFocused && !bioStatus.success) {
      setBioStatus({
        ...bioStatus,
        success: false,
        msg: '',
      });
      startBiometrics();
    }
  }, [appState, isFocused]);

  const startBiometrics = useCallback(async () => {
    const response = await rnBiometrics.isSensorAvailable();
    const {available, biometryType} = response;
    if (available) {
      switch (biometryType) {
        case BiometryTypes.Biometrics:
          handleBiometrics();
        case BiometryTypes.TouchID:
        // do something
        case BiometryTypes.FaceID:
        // do something
      }
    }
  }, [rnBiometrics]);

  const handleBiometrics = useCallback(async () => {
    try {
      const {success, error} = await rnBiometrics.simplePrompt({
        promptMessage: "Verify that it's you",
        fallbackPromptMessage:
          'Biometric Authentication Failed\nPlease use your device passcode to continue.',
      });
      if (success) {
        setBioStatus({
          ...bioStatus,
          success: true,
          msg: 'Biometric authentication successful!',
        });
      } else if (error) {
        setBioStatus({
          ...bioStatus,
          success: false,
          msg: error,
        });
      }
    } catch (error) {
      setBioStatus({
        ...bioStatus,
        success: false,
        msg: 'Failed to authenticate with biometrics.',
      });
    }
  }, [bioStatus, rnBiometrics]);

  const makeIcon = useCallback(() => {
    if (bioStatus.msg === '') {
      return (
        <Iconify
          icon="nimbus:fingerprint"
          size={80}
          color={theme.colors.heading}
        />
      );
    } else if (bioStatus.success) {
      return (
        <Iconify
          icon="simple-line-icons:check"
          size={80}
          color={theme.colors.heading}
        />
      );
    } else if (!bioStatus.success) {
      return (
        <Iconify
          icon="clarity:error-line"
          size={80}
          color={theme.colors.heading}
        />
      );
    } else {
    }
  }, [bioStatus]);

  return (
    <ViewComponent
      backgroundColor={SemanticColors.MAIN_BACKGROUND}
      style={styles.wrapper}>
      <ViewComponent
        backgroundColor={SemanticColors.MAIN_BACKGROUND}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: height / 5,
        }}>
        {makeIcon()}
        <TextComponent variant={TextVariants.AppHeader} paddingTop={Spacings.M}>
          {bioStatus.msg || 'Touch the sensor'}
        </TextComponent>
      </ViewComponent>
    </ViewComponent>
  );
};

export default Biometrics;
