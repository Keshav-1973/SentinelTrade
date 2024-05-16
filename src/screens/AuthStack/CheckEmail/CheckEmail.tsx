import React from 'react';
import CheckEmailSVG from '@assets/svgs/CheckEmail.svg';
import Wrapper from '@components/Wrapper/Wrapper';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {useWindowDimensions} from 'react-native';
import CustomButton from '@components/CustomButton';
import {BtnTypes} from '@components/CustomButton/types';
import {Spacings} from '@themes/Scales';
import {openInbox} from 'react-native-email-link';

const CheckEmail = () => {
  const {height, width} = useWindowDimensions();
  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.6;

  return (
    <Wrapper navHeading={'Check Your Email'}>
      <ViewComponent style={{justifyContent: 'space-between', flex: 1}}>
        <CheckEmailSVG width={width} height={Banner_Height} />
        <ViewComponent
          marginBottom={Spacings.XL}
          style={{paddingHorizontal: 16}}>
          <CustomButton
            onPress={openInbox}
            title={'Open Email App'}
            btnType={BtnTypes.PRIMARY}
          />
          <ViewComponent marginBottom={Spacings.XL} />
        </ViewComponent>
      </ViewComponent>
    </Wrapper>
  );
};
export default CheckEmail;
