import SignUpSVG from '@assets/svgs/SignUp.svg';
import AuthForm from '@components/AuthForm/AuthForm';
import CustomButton from '@components/CustomButton';
import {BtnTypes} from '@components/CustomButton/types';
import InputField from '@components/InputField/InputField';
import LinkText from '@components/LinkText/LinkText';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import TextComponent from '@components/TextComponent/TextComponent';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {yupResolver} from '@hookform/resolvers/yup';
import {FeatureRoutes} from '@navigations/ScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {Spacings, TextVariants} from '@themes/Scales';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useWindowDimensions} from 'react-native';
import styles from '../Login/styles';
import {SignUpSchema, SignupInfo} from './utils';

const SignUp = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.3;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupInfo>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data: SignupInfo) => {};

  const onLogin = () => {
    navigation.navigate(FeatureRoutes.ONBOARDING.LOGIN);
  };

  return (
    <AuthForm
      image={<SignUpSVG />}
      canGoBack={true}
      navHeading={'Create Account'}
      bannerHeight={Banner_Height}>
      <ViewComponent style={{flex: 1}}>
        <ViewComponent style={[styles.childWrapper]}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                placeholder="First Name"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            )}
            name="firstName"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                placeholder="Last Name"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            )}
            name="lastName"
          />
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
          <ViewComponent>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <PasswordInput
                  placeholder="Password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.password?.message}
                />
              )}
              name="password"
            />
          </ViewComponent>
        </ViewComponent>
        <ViewComponent marginBottom={Spacings.L}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title={`Let's Get Started`}
            btnType={BtnTypes.PRIMARY}
          />
          <ViewComponent marginVertical={Spacings.M} style={styles.wrapper2}>
            <TextComponent variant={TextVariants.H5} style={styles.signUp}>
              Already have an account?{' '}
            </TextComponent>
            <LinkText
              variant={TextVariants.H5}
              text={'Login'}
              onPress={onLogin}
            />
          </ViewComponent>
        </ViewComponent>
      </ViewComponent>
    </AuthForm>
  );
};

export default SignUp;
