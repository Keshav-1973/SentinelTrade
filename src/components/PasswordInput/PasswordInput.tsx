import React, {memo} from 'react';
import InputField from '../InputField/InputField';
import useToggle from '@hooks/useToggle';
import {Iconify} from 'react-native-iconify';
import {InputFieldProps} from '@components/InputField/types';
import {useTheme} from '@shopify/restyle';
import {ThemeType} from '@themes/Themes';

const PasswordInput = (props: InputFieldProps) => {
  const {onChange, onBlur, value, error, placeholder} = props;
  const {toggleValue, toggle} = useToggle(true);
  const theme = useTheme<ThemeType>();

  const makePasswordIcon = () => {
    if (!toggleValue) {
      return (
        <Iconify icon="mdi:eye" size={30} color={theme.colors.inputPrimary} />
      );
    } else if (toggleValue) {
      return (
        <Iconify
          icon="mdi:eye-off"
          size={28}
          color={theme.colors.inputPrimary}
        />
      );
    }
  };

  return (
    <InputField
      placeholder={placeholder || 'Password'}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      error={error}
      iconPosition="left"
      rightIcon={makePasswordIcon()}
      onIconPress={toggle}
      secureTextEntry={toggleValue}
    />
  );
};

export default memo(PasswordInput);
