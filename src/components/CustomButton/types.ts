import {StyleProp, ViewStyle} from 'react-native';

export enum BtnTypes {
  PRIMARY,
  SECONDARY,
}

export type Props = {
  onPress: () => void;
  btnType: BtnTypes;
  title: string;
  loading?: boolean;
  loadingTitle?: string;
  disabled?: boolean;
  logo?: any;
  accessibilityLabel?: string;
  customStyles?: StyleProp<ViewStyle>;
  titleAfterLogo?: any;
  logoMid?: any;
  innerStyles?: StyleProp<ViewStyle>;
  isOpacity?: boolean;
};
