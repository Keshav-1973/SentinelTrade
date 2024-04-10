import React, {memo, useCallback, useEffect, useState} from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {Iconify} from 'react-native-iconify';
import HapticPressable from '@components/HapticPressable/HapticPressable';
import TextComponent from '@components/TextComponent/TextComponent';
import styles from './styles';
import {SemanticColors, Spacings, TextVariants} from '@themes/Scales';
import {useTheme} from '@shopify/restyle';
import {ThemeType} from '@themes/Themes';
import {RenderItemType, dialPadContent, matchcode, setSelected} from './utils';
import {trigger} from 'react-native-haptic-feedback';
import ReanimatedBox from '@components/AnimatedView/AnimatedView';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {HapticOptions} from '@constants/constants';

const PinInput = () => {
  const {width} = useWindowDimensions();
  const theme = useTheme<ThemeType>();
  const [code, setCode] = useState<Array<number | string>>([]);
  const [verify, setVerify] = useState<boolean>(false);
  const offset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));
  const dialPadSize = width * 0.2;
  const dialPadTextSize = dialPadSize * 0.4;
  const pinLength = 4;
  const PIN_LEN = verify ? pinLength * 2 : pinLength;
  const MakeRandomArr = Array(pinLength * 2).fill('');
  const OFFSET = 8;
  const TIME = 100;

  useEffect(() => {
    if (verify && code.length === PIN_LEN) {
      matchCodeAndDoAction();
    }
  }, [code, PIN_LEN, verify]);

  const onKeyPress = useCallback(
    (item: number | string) => {
      if (item === 'X') {
        if (!verify || (verify && code.length - 1 >= PIN_LEN / 2)) {
          setCode(prev => prev.slice(0, -1));
        }
      } else {
        if (code.length === PIN_LEN - 1) {
          setCode(prev => [...prev, item]);
          setVerify(true);
        } else if (code.length <= PIN_LEN - 1) {
          setCode(prev => [...prev, item]);
        }
      }
    },
    [code, PIN_LEN, verify],
  );

  const animateOnError = useCallback(() => {
    offset.value = withSequence(
      withTiming(-OFFSET, {duration: TIME / 2}),
      withRepeat(withTiming(OFFSET, {duration: TIME}), 2, true),
      withTiming(0, {duration: TIME / 2}),
    );
  }, []);

  const matchCodeAndDoAction = () => {
    if (verify && !matchcode(code)) {
      trigger('notificationError', HapticOptions);
      setCode([]);
      setVerify(false);
      animateOnError();
    }
  };

  const renderItem = ({item, index}: RenderItemType) => {
    return (
      <HapticPressable
        key={index?.toString()}
        onPressed={() => {
          onKeyPress(item);
        }}
        disabled={item === ''}>
        <ViewComponent
          backgroundColor={SemanticColors.MAIN_BACKGROUND}
          style={[
            {
              width: dialPadSize,
              height: dialPadSize,
            },
            styles.dialPadContainer,
          ]}>
          {item === 'X' ? (
            <Iconify
              icon="solar:backspace-linear"
              size={dialPadTextSize}
              color={theme.colors.primaryButton}
            />
          ) : (
            <TextComponent
              variant={TextVariants.LinkText}
              style={[{fontSize: dialPadTextSize}]}>
              {item}
            </TextComponent>
          )}
        </ViewComponent>
      </HapticPressable>
    );
  };

  return (
    <ViewComponent
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between',
      }}>
      <ViewComponent
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <TextComponent variant={TextVariants.AppHeader}>
          {!verify ? 'Enter your secure four-digit code' : 'Confirm your Pin'}
        </TextComponent>
        <ReanimatedBox
          style={[styles.dialPadPinContainer, animatedStyle]}
          marginTop={Spacings.L}>
          {MakeRandomArr.map((_, index) => {
            const isSelected = setSelected(index, code);
            if ((!verify && index >= 4) || (verify && index <= 3)) {
              return null;
            } else {
              return (
                <ViewComponent
                  key={index}
                  backgroundColor={
                    isSelected
                      ? SemanticColors.PRIMARY_BUTTON
                      : SemanticColors.MAIN_FOREGROUND
                  }
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    marginHorizontal: 10,
                    borderWidth: isSelected ? 0 : 2,
                    borderColor: 'white',
                  }}
                />
              );
            }
          })}
        </ReanimatedBox>
      </ViewComponent>
      <FlatList
        style={{
          flexGrow: 0,
        }}
        data={dialPadContent}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </ViewComponent>
  );
};
export default memo(PinInput);
