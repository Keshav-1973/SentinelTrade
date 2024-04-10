import {ToastType} from 'react-native-toast-message';

export interface ToastProps {
  title: string;
  desc: string;
  type: string;
}

export interface ToastConfigTypes {
  type: ToastType;
  props: any;
}
