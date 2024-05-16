import React, {useCallback} from 'react';
import ReanimatedBox from '@components/AnimatedView/AnimatedView';
import Wrapper from '@components/Wrapper/Wrapper';
import {SemanticColors, Spacings, TextVariants} from '@themes/Scales';
import styles from '../Login/styles';
import FingerPrint from '@assets/svgs/FingerPrint.svg';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {useWindowDimensions} from 'react-native';
import CustomButton from '@components/CustomButton';
import {BtnTypes} from '@components/CustomButton/types';
import TextComponent from '@components/TextComponent/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {FeatureRoutes} from '@navigations/ScreenTypes';

const ProtectWallet = ({children}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.4;

  const navigateToPinOrBiometrics = useCallback(
    (isPin: boolean) => {
      const navigateTo = isPin
        ? FeatureRoutes.ONBOARDING.PIN
        : FeatureRoutes.ONBOARDING.BIOMETRICS;
      navigation.navigate(navigateTo);
    },
    [navigation],
  );

  return (
    <Wrapper navHeading={'Protect your wallet'} canGoBack={false}>
      <ViewComponent
        backgroundColor={SemanticColors.MAIN_FOREGROUND}
        style={styles.wrapper}>
        <ViewComponent backgroundColor={SemanticColors.MAIN_FOREGROUND}>
          <FingerPrint width={width} height={Banner_Height} />
        </ViewComponent>
        <ViewComponent
          backgroundColor={SemanticColors.MAIN_BACKGROUND}
          style={[
            {
              height: Available_Height - Banner_Height - 30,
            },
            styles.card,
          ]}>
          <ViewComponent
            backgroundColor={SemanticColors.MAIN_BACKGROUND}
            style={styles.childWrapper}>
            <TextComponent
              variant={TextVariants.H5}
              style={{color: 'white', textAlign: 'center'}}>
              Add an extra layer of security to your funds.
            </TextComponent>
            <ViewComponent>
              <CustomButton
                onPress={() => {
                  navigateToPinOrBiometrics(true);
                }}
                title={'PIN'}
                btnType={BtnTypes.PRIMARY}
              />
              <ViewComponent paddingVertical={Spacings.S}></ViewComponent>
              <CustomButton
                onPress={() => {
                  navigateToPinOrBiometrics(false);
                }}
                title={'Biometric'}
                btnType={BtnTypes.SECONDARY}
              />
            </ViewComponent>
          </ViewComponent>
        </ViewComponent>
      </ViewComponent>
    </Wrapper>
  );
};

export default ProtectWallet;
