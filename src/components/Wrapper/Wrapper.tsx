import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FC} from 'react';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {SemanticColors, TextVariants} from '@themes/Scales';
import IconBack from '@assets/svgs/IconBack.svg';
import TextComponent from '@components/TextComponent/TextComponent';
import HapticPressable from '@components/HapticPressable/HapticPressable';

interface Props {
  navHeading: string;
  children: JSX.Element;
  icon?: any;
  onPressIcon?: () => void;
  canGoBack?: boolean;
}

const Wrapper: FC<Props> = ({
  navHeading,
  icon,
  onPressIcon,
  children,
  canGoBack = true,
}) => {
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);
  return (
    <ViewComponent
      backgroundColor={SemanticColors.MAIN_BACKGROUND}
      style={{flex: 1}}>
      <ViewComponent
        style={{
          height: 55,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        {canGoBack && (
          <HapticPressable
            hitSlop={{bottom: 20, left: 20, right: 30, top: 50}}
            style={{
              position: 'absolute',
              zIndex: 100000,
              left: 16,
            }}
            onPressed={goBack}>
            <IconBack width={30} height={30} />
          </HapticPressable>
        )}
        <TextComponent
          variant={TextVariants.AppHeader}
          style={{flex: 1, textAlign: 'center'}}>
          {navHeading}
        </TextComponent>
      </ViewComponent>
      <ViewComponent style={{flex: 1}}>{children}</ViewComponent>
    </ViewComponent>
  );
};

const styles = StyleSheet.create({
  children: {
    flex: 1,
  },
});

export default Wrapper;
