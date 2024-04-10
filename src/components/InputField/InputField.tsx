import React, {memo, FC} from 'react';
import {Pressable, StyleProp, ViewStyle, TextInput} from 'react-native';
import styles from './styles';
import {useTheme} from '@shopify/restyle';
import {ThemeType} from '@themes/Themes';
import {useAppSelector} from '@utils/StoreHelpers/AppStore';
import {ThemeTypes} from '@constants/constants';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import TextComponent from '@components/TextComponent/TextComponent';
import {InputFieldProps} from './types';
import {SemanticColors} from '@themes/Scales';

const InputField: FC<InputFieldProps> = ({
  value,
  label,
  icon,
  iconPosition,
  error,
  secureTextEntry,
  editable,
  defaultValue,
  onSubmitEditing,
  keyboardType,
  rightIcon,
  style,
  placeholder,
  onIconPress,
  onChange,
  onBlur,
  onFocus,
}: InputFieldProps) => {
  const theme = useTheme<ThemeType>();
  const currentTheme = useAppSelector(state => state.theme.currentTheme);

  const wrapperStyle: StyleProp<ViewStyle> = {
    flexDirection: icon
      ? iconPosition === 'left'
        ? 'row'
        : 'row-reverse'
      : 'row',
    alignItems: icon ? 'center' : 'center',
  };

  return (
    <ViewComponent
      style={styles.inputContainer}
      backgroundColor={SemanticColors.MAIN_BACKGROUND}>
      {!!label && (
        <TextComponent color={SemanticColors.MAIN_FOREGROUND}>
          {label}
        </TextComponent>
      )}
      <ViewComponent
        borderColor={
          error ? SemanticColors.ERROR_COLOR : SemanticColors.INPUT_PRIMARY
        }
        backgroundColor={SemanticColors.MAIN_BACKGROUND}
        style={[styles.wrapper, wrapperStyle]}>
        {!!icon && (
          <ViewComponent>
            <ViewComponent>{icon}</ViewComponent>
          </ViewComponent>
        )}
        <TextInput
          style={[
            styles.textInput,
            style,
            {color: theme.colors.primaryButtonText},
          ]}
          placeholder={placeholder}
          onChangeText={onChange}
          defaultValue={defaultValue}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={
            currentTheme === ThemeTypes.LIGHT
              ? theme.colors.secondaryText
              : theme.colors.inputPrimary
          }
          editable={editable}
          selectTextOnFocus={editable}
          onEndEditing={onSubmitEditing}
          blurOnSubmit={false}
          keyboardType={keyboardType}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
        />
        {!!rightIcon && (
          <Pressable
            onPress={onIconPress}
            style={{
              height: '100%',
              justifyContent: 'center',
            }}>
            <ViewComponent style={{marginHorizontal: 8}}>
              {rightIcon}
            </ViewComponent>
          </Pressable>
        )}
      </ViewComponent>
      {!!error && (
        <TextComponent style={{color: theme.colors.error}}>
          {error}
        </TextComponent>
      )}
    </ViewComponent>
  );
};

export default memo(InputField);
