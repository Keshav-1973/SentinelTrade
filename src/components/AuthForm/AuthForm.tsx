import ViewComponent from '@components/ViewComponent/ViewComponent';
import Wrapper from '@components/Wrapper/Wrapper';
import {SemanticColors} from '@themes/Scales';
import React, {useRef} from 'react';
import {useWindowDimensions} from 'react-native';
import BottomSheetHelper from '@components/BottomSheet/BottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';

interface AuthFormProps {
  children: React.JSX.Element;
  image: React.JSX.Element;
  canGoBack: boolean;
  navHeading: string;
  bannerHeight: number;
}

const AuthForm = ({
  children,
  image,
  canGoBack,
  navHeading,
  bannerHeight,
}: AuthFormProps) => {
  const {width, height} = useWindowDimensions();
  const btmRef = useRef<BottomSheet>(null);

  const Available_Height = height - 55;

  const snapPercentage = (((height - bannerHeight) / height) * 100)
    .toFixed(2)
    .toString();

  return (
    <Wrapper navHeading={navHeading} canGoBack={canGoBack}>
      <ViewComponent
        backgroundColor={SemanticColors.MAIN_FOREGROUND}
        style={styles.wrapper}>
        <ViewComponent backgroundColor={SemanticColors.MAIN_FOREGROUND}>
          {React.cloneElement(image, {width: width, height: bannerHeight})}
        </ViewComponent>
        <BottomSheetHelper
          bottomSheetRef={btmRef}
          snapPercentage={snapPercentage}>
          <ViewComponent
            height={Available_Height - bannerHeight}
            backgroundColor={SemanticColors.MAIN_BACKGROUND}
            style={styles.childWrapper}>
            {children}
          </ViewComponent>
        </BottomSheetHelper>
      </ViewComponent>
    </Wrapper>
  );
};
export default AuthForm;
