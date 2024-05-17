import React from 'react';
import styles from './styles';
import AuthForm from '@components/AuthForm/AuthForm';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import ForgotPassSVG from '@assets/svgs/ForgotPass.svg';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {useWindowDimensions} from 'react-native';
import {ForgotPassInfo, ForgotPassSchema} from './utils';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import {BtnTypes} from '@components/CustomButton/types';
import CustomButton from '@components/CustomButton';
import {Spacings, TextVariants} from '@themes/Scales';
import TextComponent from '@components/TextComponent/TextComponent';
import LinkText from '@components/LinkText/LinkText';
import InputField from '@components/InputField/InputField';

const ForgotPassword = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.7;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ForgotPassInfo>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(ForgotPassSchema),
  });

  const onSubmit = (data: ForgotPassInfo) => {};
  return (
    <AuthForm
      image={<ForgotPassSVG />}
      canGoBack={true}
      navHeading={'Forgot Password?'}
      bannerHeight={Banner_Height}>
      <ViewComponent style={styles.wrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputField
              placeholder="Email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.email?.message}
            />
          )}
          name="email"
        />
        <ViewComponent marginBottom={Spacings.XL}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title={'Reset Password'}
            btnType={BtnTypes.PRIMARY}
          />
        </ViewComponent>
      </ViewComponent>
    </AuthForm>
  );
};

export default ForgotPassword;
