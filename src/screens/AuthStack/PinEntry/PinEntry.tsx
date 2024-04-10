import React from 'react';
import PinInput from '@components/PinInput/PinInput';
import Wrapper from '@components/Wrapper/Wrapper';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import styles from './styles';
import {SemanticColors} from '@themes/Scales';

const PinEntry = () => {
  const pinLength = 4;
  return (
    <Wrapper navHeading={'Create a PIN'} canGoBack={true}>
      <ViewComponent
        backgroundColor={SemanticColors.MAIN_BACKGROUND}
        style={styles.wrapper}>
        <PinInput />
      </ViewComponent>
    </Wrapper>
  );
};

export default PinEntry;
