import React, {memo, useCallback} from 'react';
import {ActivityIndicator, Pressable, TouchableOpacity} from 'react-native';
import {trigger} from 'react-native-haptic-feedback';
import styles from './styles';
import {BtnTypes, Props} from './types';
import {useTheme} from '@shopify/restyle';
import {ThemeType} from '@themes/Themes';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import TextComponent from '@components/TextComponent/TextComponent';
import {SemanticColors} from '@themes/Scales';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const CustomButton = ({
  onPress,
  btnType,
  title,
  loadingTitle,
  disabled,
  logo,
  customStyles,
  innerStyles,
  isOpacity = false,
  loading = false,
}: Props) => {
  const theme = useTheme<ThemeType>();
  const {mainBackground, mainForeground} = theme.colors;
  const activityIndicatorColor =
    btnType === BtnTypes.PRIMARY ? mainForeground : mainBackground;

  const withHapticFeedback = useCallback(() => {
    trigger('soft', options);
    onPress?.();
  }, [trigger, onPress]);

  const ViewWrapper = isOpacity ? TouchableOpacity : Pressable;

  return (
    <ViewWrapper
      onPress={withHapticFeedback}
      disabled={disabled || loading}
      style={[customStyles]}>
      <ViewComponent
        style={[
          btnType === BtnTypes.PRIMARY
            ? styles.primaryStyles
            : styles.secondaryStyles,
          innerStyles,
        ]}
        backgroundColor={
          btnType === BtnTypes.PRIMARY
            ? SemanticColors.PRIMARY_BUTTON
            : SemanticColors.SECONDARY_BUTTON
        }
        borderColor={
          btnType === BtnTypes.PRIMARY
            ? SemanticColors.SECONDARY_BUTTON
            : SemanticColors.PRIMARY_BUTTON
        }>
        {loading && (
          <ActivityIndicator
            animating={loading}
            color={activityIndicatorColor}
            style={{marginRight: 10}}
          />
        )}
        <ViewComponent
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 30,
            top: 0,
            bottom: 0,
          }}>
          {logo && logo}
        </ViewComponent>
        {
          <TextComponent
            variant={
              btnType === BtnTypes.PRIMARY
                ? 'primaryButtonText'
                : 'secondaryButtonText'
            }>
            {loading ? loadingTitle : title}
          </TextComponent>
        }
      </ViewComponent>
    </ViewWrapper>
  );
};

export default memo(CustomButton);
