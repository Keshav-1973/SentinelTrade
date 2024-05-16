import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import useKeyboardStatus from '@hooks/useKeyboardStatus';
import {useTheme} from '@shopify/restyle';
import {ThemeType} from '@themes/Themes';
import React, {useCallback, useEffect, useMemo} from 'react';
import {BottomSheetProps} from './utils';

const BottomSheetHelper = ({
  children,
  bottomSheetRef,
  getSheetStatus,
  snapPercentage,
}: BottomSheetProps) => {
  const theme = useTheme<ThemeType>();

  const handleSheetChange = useCallback(
    (index: number) => {
      if (index > -1) {
        getSheetStatus?.(true);
      } else {
        getSheetStatus?.(false);
      }
    },
    [getSheetStatus],
  );

  const {isKeyboardOpen} = useKeyboardStatus();

  useEffect(() => {
    if (!isKeyboardOpen) {
      bottomSheetRef?.current?.snapToIndex(0);
    } else if (isKeyboardOpen) {
      bottomSheetRef?.current?.snapToIndex(1);
    }
  }, [isKeyboardOpen]);

  const snapPoints = useMemo(
    () => [`${snapPercentage}%`, '100%'],
    [snapPercentage],
  );

  return (
    <BottomSheet
      handleIndicatorStyle={{backgroundColor: theme.colors.mainForeground}}
      backgroundStyle={{backgroundColor: theme.colors.mainBackground}}
      snapPoints={snapPoints}
      enableOverDrag={false}
      ref={bottomSheetRef}
      // keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize"
      onChange={handleSheetChange}>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        bounces={false}>
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetHelper;
