import React, {memo} from 'react';
import styles from './styles';
import {TextVariants} from '@themes/Scales';
import {TOAST_TYPE} from '@constants/constants';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import TextComponent from '@components/TextComponent/TextComponent';
import {ToastProps} from './types';

const ToastMessage = (props: ToastProps) => {
  const {title, desc, type} = props || {};
  return (
    <ViewComponent
      pointerEvents="none"
      style={[
        styles.toastContainer,
        type === TOAST_TYPE.SUCCESS ? styles.toastSuccess : styles.toastError,
      ]}>
      <TextComponent variant={TextVariants.BannerText}>{title}</TextComponent>
      {!!desc && <TextComponent>{desc}</TextComponent>}
    </ViewComponent>
  );
};

export default memo(ToastMessage);
