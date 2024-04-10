import {
  KeyboardTypeOptions,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from 'react-native';

export interface InputFieldProps extends TextInputProps {
  value: string;
  label?: string;
  icon?: React.JSX.Element;
  iconPosition?: string;
  error?: string;
  touched?: boolean;
  onIconPress?: () => void;
  secureTextEntry?: boolean;
  editable?: boolean;
  defaultValue?: string;
  onSubmitEditing?: any;
  keyboardType?: KeyboardTypeOptions;
  rightIcon?: React.JSX.Element;
  style?: StyleProp<ViewStyle>;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  onFocus?: () => void;
}
